import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-token-request',
  templateUrl: './token-request.component.html',
  styleUrls: ['./token-request.component.css']
})
export class TokenRequestComponent implements OnInit {

  tokenRequestRaised: Boolean = false;
  // loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: DataService) { }

  // ngOnInit(): void {

  //   this.loginForm = this.fb.group({
  //     username: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required)
  //   })
  // }

  // get loginFormControls() {
  //   return this.loginForm.controls;
  // }

  // onSubmit() {
  //   console.log(this.loginForm.value);
  // }

  ngOnInit(): void {
    
  }

  generateToken() {
    this.tokenRequestRaised = true;
    this.service.generateToken().subscribe(data => {
      console.log('Token', data);
    })
  }
}
