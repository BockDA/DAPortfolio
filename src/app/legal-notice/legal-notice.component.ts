import { Component } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  imports: [
    MenueComponent,
    TranslateModule,
    CommonModule,
    NgFor,
    FooterComponent,
  ],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent {
  numbers = Array(5).fill(0);
}
