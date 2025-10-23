
/*
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
  standalone: true,
  imports: [LogoComponent, TranslateModule],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss',
})
export class MenueComponent {
  constructor(public setAktiv: MyFunctionsService) {}

  
  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
    console.log("Wechsel");
    const element = document.getElementById(value);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  }

  statusLanguage = statusLanguage;
  isGerman = isGerman;
  setLanguage = setLanguage;
}



*/


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyFunctionsService } from '../../services/my-functions.service';
import {
  isGerman,
  setLanguage,
  statusLanguage
}
  from '../../state/language.state';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-menue',
  standalone: true,
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss'],
  imports: [LogoComponent,TranslateModule],
})
export class MenueComponent {
  constructor(private router: Router, public setAktiv: MyFunctionsService) {}

  async setPosMenu(sectionId: string) {
    this.setAktiv.setMenuAktiv(sectionId);

    // In EINEM Schritt zur Startseite navigieren + Fragment setzen.
    // Der Router scrollt dank withInMemoryScrolling automatisch zum Element mit id=sectionId.
    await this.router.navigate(['/'], { fragment: sectionId });

    // Fallback (nur falls aus irgendeinem Grund nicht gescrollt wurde):
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    console.log('vor Navigation: ', this.router.url);
    await this.router.navigate(['/'], { fragment: sectionId });
    console.log('nach Navigation (sollte / sein): ', this.router.url);
  }

  statusLanguage = statusLanguage;
  isGerman = isGerman;
  setLanguage = setLanguage;
}







