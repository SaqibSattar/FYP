import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  userForm!: FormGroup;
  imageSrc: string = '';
  imageUrl: string = ''
  constructor(public formBuilder: FormBuilder, private http: HttpClient ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required]],
      image: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      service: ['', [Validators.required]],
      city: ['', [Validators.required]],
      experience: ['', [Validators.required]]

    })
  }

  onFileChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.userForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }


  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  submit(){
    console.log(this.userForm.value);
    this.http.post('http://localhost:3000/add', this.userForm.value)
      .subscribe((res: any) => {
        alert('Uploaded Successfully.');
      })
}
}
