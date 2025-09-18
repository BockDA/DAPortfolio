import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab-my-projects',
  imports: [TranslateModule, NgFor],
  templateUrl: './tab-my-projects.component.html',
  styleUrl: './tab-my-projects.component.scss',
})
export class TabMyProjectsComponent {
  @Input() activeTab!: number;
}
