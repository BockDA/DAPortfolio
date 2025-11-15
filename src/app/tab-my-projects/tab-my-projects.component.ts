import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-tab-my-projects',
  imports: [TranslateModule, NgFor],
  templateUrl: './tab-my-projects.component.html',
  styleUrl: './tab-my-projects.component.scss',
})
export class TabMyProjectsComponent implements AfterViewInit, OnDestroy {
  @Input() activeTab!: number;

  constructor(private animationService: MyFunctionsService) { }

  ngAfterViewInit(): void {
    this.animationService.setupAnimations([
      { selector: '.tab_firstSection', animationClass: 'animat_1' },
      { selector: '.tab_secondSection', animationClass: 'animat_2' }
    ]);
  }

  ngOnDestroy(): void {
    this.animationService.disconnectAnimations();
  }
}
