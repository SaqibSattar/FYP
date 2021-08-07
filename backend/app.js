const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');
const path = require("path");

const City = require("./models/cities");
const Service = require("./models/service");
const User = require("./models/user");
const Date = require('./models/date')

const multer = require("multer");

const app = express();

mongoose
  .connect(
    'mongodb://localhost:27017/services', { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to Services database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid Mime Type");
    if(isValid){
      error = null;
    }
    cb(error, "/backend/images");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('_');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, fileName + '-'+ Date.now()+ '.'+ ext);
  },
});

const storage = multer({ storage: diskStorage }).single(
  'image'
);

app.post("/add", storage, (req, res, next) => {
  const url = req.protocol + '://'+ req.get("host");
  const service = new Service({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    image: url + "/images"+req.body.image,
    city: req.body.city,
    experience: req.body.experience
  });
  service
    .save()
    .then(createdservice => {
      console.log(createdservice)
      res.status(201).json({
        message: "Post added successfully",
        createdservice: createdservice
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a post failed!"
      });
    });
});


app.get("/serviceProvider", (req, res, next) => {
  Service.find().then(documents => {
    res.status(200).json({
      Service: documents
    });
  });
});


app.get("/api/city", (req, res, next) => {
  City.find().then(documents => {
    res.status(200).json({
      cities: documents
    });
  });
});

app.post("/add/user", (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length >= 1) {
       res.status(409).json({
        Message: 'Mail exist.'
      });
    } else {
      bcryptjs.hash(req.body.password, 10, (err, hash) => {
        if (err) {
        return  res.status(500).json({
            error: err
          });
        } else {
          var user = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            city: req.body.city,
            address: req.body.address,
            phone: req.body.phone

          });
          user.save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              Message: 'User successfully added.'
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            })
          });
        }
      });
    }
  })

})




app.post("/date", (req, res, next) => {
  const date = new Date({
    date: req.body.date
  });
  date
    .save()
    .then(createdservice => {
      console.log(createdservice)
      res.status(201).json({
        message: "Date added successfully",
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a date failed!"
      });
    });
});









module.exports = app;
