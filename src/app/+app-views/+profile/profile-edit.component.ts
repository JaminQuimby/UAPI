import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../shared/user/user.service';
import { UserModel } from '../../shared/user/user.model';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html'
})

export class ProfileEditComponent implements OnInit {
  user: UserModel = new UserModel();
  form: FormGroup;
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  phone = new FormControl('');
  title = new FormControl('');
  skype = new FormControl('');
  @Output()
  private closeEditor: EventEmitter<boolean> = new EventEmitter();

  private profileEditForm = this.fb.group({
    firstName: [this.user.firstName, Validators.required],
    lastName: [this.user.lastName, Validators.required],
    phone: [this.user.phone],
    title: [this.user.title],
    skype: [this.user.skype]
  });

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userService.getLoginInfo().subscribe(
      data => this.doProfileUpdate(data),
      error => this.throwError(error)
    );

    this.userService.getLoginDetails().subscribe(
      data => this.doProfileUpdate(data),
      error => this.throwError(error)
    );
  }

  private onCancle() {
    this.closeEditor.emit(true);
  }

  private doSaveProfile(event) {
    this.userService.setLoginDetails(this.profileEditForm.value);
    this.onCancle();
  }
  private doProfileUpdate(data): void {
    this.user = Object.assign({}, this.user, data, data.auth);
    if (typeof data.displayName === 'undefined') {
      this.user.displayName = data.firstName + ' ' + data.lastName;
    }
    if (data.auth) {
      this.user.photoURL = data.auth.photoURL
        || this.userService.getProfilePicture(data.auth.email)
        || './assets/img/avatars/user.png';
    }
    this.profileEditForm.patchValue(this.user);


  }
  private throwError(error) { console.log(error); }
}
