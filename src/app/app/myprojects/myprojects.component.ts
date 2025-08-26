import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabMyProjectsComponent } from '../tab-my-projects/tab-my-projects.component';

@Component({
  selector: 'app-myprojects',
  imports: [TranslateModule, TabMyProjectsComponent],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss',
})
export class MyprojectsComponent {
  public activeTab = 1;

  selectTab(tabNumber: number) {
    this.activeTab = tabNumber;
    console.log("Tab");
   }
}
