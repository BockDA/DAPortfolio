import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menue',
  imports: [LogoComponent, TranslateModule],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss',
})
export class MenueComponent {
  menuAktiv: string = '';

  setMenuAktiv(section: string) {
    console.log('tsdgdssg');
    this.menuAktiv = section;
  }
}
