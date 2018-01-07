import { Email } from './email.model';
import { Subject } from 'rxjs/Subject';

export class EmailsService {
  emailsChanged = new Subject<Email[]>();

  private emails: Email[] = [
    new Email('qmtruong92@gmail.com'),
    new Email('test@server.com'),
  ];

  addEmail(email: Email) {
    this.emails.push(email);
    this.emitChanges();
  }

  getEmails() {
   return this.emails.slice();
  }

  /**
   * Remove the current email.
   * Emit that the emails array has changed.
   * @param {number} index
   */
  deleteEmail(index: number) {
    // remove the current element
    this.emails.splice( index, 1);
    // emit the changes to the emails array
    this.emitChanges();
  }

  /**
   * Emit the current array to the Subject.
   */
  emitChanges() {
    this.emailsChanged.next(this.emails.slice());
  }
}
