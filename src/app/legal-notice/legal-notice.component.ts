import { Component } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-legal-notice',
  imports: [MenueComponent, TranslateModule, NgFor, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  numbers = Array(5).fill(0);
}
