import { Component } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [MenueComponent, FooterComponent, RouterLink, TranslateModule,CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
