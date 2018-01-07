import { Email } from './email.model';
import {Subject} from 'rxjs/Subject';

export class EmailsService {
  emailsChanged = new Subject<Email[]>();

  private emails: Email[] = [
    new Email('qmtruong92@gmail.com'),
    new Email('test@server.com'),
  ];

  addEmail(email: Email) {
    this.emails.push(email);
    this.emailsChanged.next(this.emails.slice());
  }

  getEmails() {
   return this.emails.slice();
  }
}
