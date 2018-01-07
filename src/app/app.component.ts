import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmailsService} from '../email/emails.service';
import {Email} from '../email/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  // for the email components
  emails: Email[];
  lastSubmittedEmail: Email;
  constructor(private emailService: EmailsService) {}


  /**
   * 1. Populate the emails array.
   * 2. Subscribe to any changes in the emails.
   */
  ngOnInit() {

    // retrieve the emails from the service
    this.emails = this.emailService.getEmails();
    // subscribe to any email changes
    this.emailService.emailsChanged.subscribe(
      (emails: Email[]) => {
        this.emails = emails;
      }
    );
  }


  suggestUserName() {
    const suggestedName = 'Superuser';
  }


  /**
   * Prints the ngForm, username, whether the form is valid, and the email
   * to the console. Also, pushes an email to the Email Service. Also, prints
   * the length of the emails array.
   */
  onSubmit() {

    // Print the NgForm to the console
    console.log(this.signupForm);

    // Display the username entered in the form
    console.log(this.signupForm.form.value.userData.username);

    // Check whether the form is valid. The form is valid if the email is entered correctly.
    console.log(this.signupForm.valid ? 'Valid' : 'Not Valid');

    // Display the user's email in the console
    console.log(this.signupForm.form.value.userData.email);

    // Store the last submitted email into a temporary variable
    this.lastSubmittedEmail = new Email(this.signupForm.form.value.userData.email);
    // Send the recently stored email to the Email Service
    this.emailService.addEmail(this.lastSubmittedEmail);

    // Prints the length of the emails array
    console.log(this.emails.length);
  }
}
