import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, public af: AngularFire, public fb: FormBuilder) { }

  ngOnInit() { }

  public _form = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    passwordConfirm: ["", Validators.required],
    firstname: [""],
    lastname: [""],
    terms: ["", Validators.required]
  });

  register(event) {
    event.preventDefault();
    let _email = this._form.get('email').value;
    let _password = this._form.get('password').value;
    let _firstname = this._form.get('firstname').value;
    let _lastname = this._form.get('lastname').value;
    let _terms = this._form.get('terms').value;


    this.af.auth.createUser({
      email: _email,
      password: _password
    }).then(
      (success) => {
        console.log(success);
        const _userId = success.auth.uid;
        const profile = this.af.database.list('users/' + _userId + '/profile');
        profile.push({
          email: _email,
          profile_picture: "assets/img/avatars/user.png",
          firstname: _firstname,
          lastname: _lastname,
          title: "",
          phone: ""
        });
        this.router.navigate(['/login'])
      }).catch(
      (err) => {
        console.log(err);
      })

    this.router.navigate(['/dashboard'])
  }
}
