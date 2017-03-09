import { UserInterface } from './user.interface';
export class UserModel implements UserInterface {
    uid: string;
    email: string;
    photoURL: string;
    firstName: string;
    lastName: string;
    displayName: string = this.firstName + ' ' + this.lastName;
    phone: string;
    title: string;
    skype?: string;
}
