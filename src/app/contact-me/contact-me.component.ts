import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, FormsModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  constructor(
    public setAktiv: MyFunctionsService,
    private http: HttpClient // ✅ HttpClient hier korrekt injiziert
  ) {}

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;
  post = {
    endPoint: 'https://portfolio.elektro-bock.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const,
    },
  };

  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response: any) => {
            console.log('Antwort vom Server:', response);
            ngForm.resetForm();
          },
          error: (error: any) => {
            console.error('Fehler beim Senden:', error);
          },
          complete: () => console.info('Mailversand abgeschlossen'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Testmodus aktiv — keine echte Mail wird gesendet.');
      ngForm.resetForm();
    }
  }
}
