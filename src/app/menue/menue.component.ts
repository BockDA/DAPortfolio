import { Component, computed, signal } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';
import {
  isGerman,
  setLanguage,
  statusLanguage,
} from '../../state/language.state';

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

  statusLanguage = statusLanguage;
  isGerman = isGerman;
  setLanguage = setLanguage;
}
