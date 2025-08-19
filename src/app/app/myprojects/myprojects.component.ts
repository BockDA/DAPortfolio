import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-myprojects',
  imports: [TranslateModule],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {
  activeTab =1;


selectTab(tabNumber:number){
  this.activeTab=tabNumber;
  console.log("Test");
}

}
