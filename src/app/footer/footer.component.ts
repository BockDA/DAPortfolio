import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss',
    './footer-mobile.scss'
  ]
})
export class FooterComponent { };

