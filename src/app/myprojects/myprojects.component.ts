import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabMyProjectsComponent } from '../tab-my-projects/tab-my-projects.component';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [TranslateModule, TabMyProjectsComponent],
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss',
    './myprojects-mobile.scss'
  ],
})
export class MyprojectsComponent implements AfterViewInit, OnDestroy {
  public activeTab = 1;

  constructor(private animationService: MyFunctionsService) { }

  ngAfterViewInit(): void {
    this.animationService.setupAnimations([
      { selector: '.myprojects_Titel', animationClass: 'animate-intro' }
    ]);
  }

  selectTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  ngOnDestroy(): void {
    this.animationService.disconnectAnimations();
  }
}

