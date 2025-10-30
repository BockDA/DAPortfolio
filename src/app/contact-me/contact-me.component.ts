import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyFunctionsService } from '../../services/my-functions.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, FormsModule, RouterLink,CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  constructor(
    public setAktiv: MyFunctionsService,
    private http: HttpClient 
  ) {}

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;
  mailSend = false;
  mailError=false


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
            this.emailOK();
          },
          error: (error: any) => {
            console.error('Fehler beim Senden:', error);
            this.emailError();
          },
          complete: () => console.info('Mailversand abgeschlossen'),
           
        });
      
  
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Testmodus aktiv — keine echte Mail wird gesendet.');
        this.emailOK();
      ngForm.resetForm();
    
    }
  }

  private emailOK() {
    this.mailSend = true;
    setTimeout(() => (this.mailSend = false), 2000);
   }
  
  private emailError() {
    this.mailError = true;
    setTimeout(() => (this.mailError = false), 2000);
  }


}
