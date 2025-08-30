import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MenueComponent } from '../menue/menue.component';
import { HeroComponent } from '../hero/hero.component';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-contact-me',
  imports: [TranslateModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
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
}
