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

  constructor(private animationService: MyFunctionsService) { }

  ngAfterViewInit(): void {
    this.animationService.setupAnimations([
      { selector: '.myskills_Titel', animationClass: 'animat_1' },
      { selector: '.myskills_Section', animationClass: 'animat_2' }
    ]);
  }

  ngOnDestroy(): void {
    this.animationService.disconnectAnimations();
  }
}

