import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyFunctionsService } from '../../services/my-functions.service';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements AfterViewInit, OnDestroy {
  constructor(
    public setAktiv: MyFunctionsService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;
  mailSend = false;
  mailError = false;

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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const animationConfigs = [
        { selector: '.contac_Headline', animationClass: 'animat_1', },
        { selector: '.contact_Headline_Container', animationClass: 'animat_1', },
        { selector: '.contac_Description', animationClass: 'animat_1', },
        { selector: '.contact_Field', animationClass: 'animat_1', },
        { selector: '.container_mail', animationClass: 'animat_1', },
        { selector: '.container_message', animationClass: 'animat_1', },
        { selector: '.hero_ArrowUp', animationClass: 'animat_1', }
      ];

      this.setAktiv.setupAnimations(animationConfigs);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.setAktiv.disconnectAnimations();
    }
  }
}



