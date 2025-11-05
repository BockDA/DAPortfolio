import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent {
  constructor(public setAktiv: MyFunctionsService) {}
}

