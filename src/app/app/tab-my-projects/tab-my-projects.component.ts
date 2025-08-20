import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tab-my-projects',
  imports: [],
  templateUrl: './tab-my-projects.component.html',
  styleUrl: './tab-my-projects.component.scss'
})
export class TabMyProjectsComponent {

  @Input() title!:string;
  @Input() inhalt!:string;


}
