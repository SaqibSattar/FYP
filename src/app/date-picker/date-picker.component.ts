import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder,ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  userForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, private http: HttpClient ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      date: ['', [Validators.required]],
    })
  }
 // convenience getter for easy access to form fields
 get f() { return this.userForm.controls; }
submit() {

}

}
