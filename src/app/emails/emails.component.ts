import { Component, OnInit } from '@angular/core';
import { EmailsService } from '../../email/emails.service';
import { Email } from '../../email/email.model';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {

  // Copying the emails logic over to this component
  emails: Email[];


  constructor(private emailService: EmailsService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails();

    this.emailService.emailsChanged.subscribe(
      (emails: Email[]) => {
        this.emails = emails;
      }
    );
  }

  // Delete this email from the Email Service Array
  onDelete(index: number) {
    this.emailService.deleteEmail(index);
    console.log('delete has been triggered on index: ' + index);
  }
}
