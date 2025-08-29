import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MenueComponent } from '../menue/menue.component';

@Component({
  selector: 'app-contact-me',
  imports: [TranslateModule, FormsModulem;MenueComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {


  contactData = {
    name: "",
    email: "",
    message:""
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {

      console.log(this.contactData);
    }
  }

}
