import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   // console.log('submitted!');
  //   // console.log(form);
  //   // console.log(form.value);
  //   console.log('Username: ' + form.value.username + ' has submitted a form.');
  // }

  onSubmit() {

    // Print the NgForm to the console
    console.log(this.signupForm);

    // Display the username entered in the form
    console.log(this.signupForm.form.value.userData.username);

    // Check whether the form is valid. The form is valid if the email is entered correctly.
    console.log(this.signupForm.valid ? 'Valid' : 'Not Valid');

    // Display the user's email in the console
    console.log(this.signupForm.form.value.userData.email);
  }
}
