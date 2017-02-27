import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public af: AngularFire, public fb: FormBuilder) { }
  ngOnInit() {  }

public _form = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
    
  login(event){
    event.preventDefault();
    let email = this._form.get('email').value;
    let password = this._form.get('password').value;
    this.af.auth.login({"email":email,"password":password})
    .then(
        (success) => {
            this.af.auth.subscribe(auth => console.log(auth));
            this.router.navigate(['/dashboard/+analytics'])
      }).catch(
        (err) => {
        console.log(err);
      })
  }

}
