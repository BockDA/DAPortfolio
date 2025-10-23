import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MenueComponent } from '../menue/menue.component';
import { HeroComponent } from '../hero/hero.component';
import { MyFunctionsService } from '../../services/my-functions.service';
 import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, FormsModule,RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  //contactForm: NgForm;

  constructor(public setAktiv: MyFunctionsService) {}

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
