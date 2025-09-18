import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-hero',
  imports: [LogoComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
  
  
export class HeroComponent {
  constructor(public setAktiv: MyFunctionsService) {}
}
