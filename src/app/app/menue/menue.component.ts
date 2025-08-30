import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-menue',
  imports: [LogoComponent, TranslateModule],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss',
})
export class MenueComponent {
  constructor(public setAktiv: MyFunctionsService) {}
  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
  }


   


}
