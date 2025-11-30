import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-myskills',
  imports: [TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss',
    './myskills-mobile.scss'
  ]
})
export class MyskillsComponent implements AfterViewInit, OnDestroy {
  constructor(private animationService: MyFunctionsService, public setAktiv: MyFunctionsService) { }
  ngAfterViewInit(): void {
    this.animationService.setupAnimations([
      { selector: '.myskills_Titel', animationClass: 'animat_1' },
      { selector: '.myskills_Section', animationClass: 'animat_2' }
    ]);
  }


  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  ngOnDestroy(): void {
    this.animationService.disconnectAnimations();
  }
}

