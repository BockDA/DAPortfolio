import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-tab-my-projects',
  imports: [TranslateModule, NgFor],
  templateUrl: './tab-my-projects.component.html',
  styleUrls: ['./tab-my-projects.component.scss',
    './tab-my-projects-mobile.scss'
  ],
})
export class TabMyProjectsComponent implements AfterViewInit, OnDestroy {
  @Input() activeTab!: number;
  constructor(private animationService: MyFunctionsService) { }
  ngAfterViewInit(): void {
    this.animationService.setupAnimations([
      { selector: '.tab_firstSection', animationClass: 'animate-intro' },
      { selector: '.tab_secondSection', animationClass: 'animate-secondary' }
    ]);
  }

  ngOnDestroy(): void {
    this.animationService.disconnectAnimations();
  }

  getProjectKey(): string {
    // Map numeric tabs to semantic project keys
    switch (this.activeTab) {
      case 1:
        return 'JOIN';
      case 2:
        return 'EL_POLLO';
      case 3:
        return 'POKEDEX';
      default:
        return 'JOIN';
    }
  }
}
