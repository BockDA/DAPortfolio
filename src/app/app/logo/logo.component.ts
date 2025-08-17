import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
@Input() dark=false;
@Input() lightLogo1="../assets/icons/logoLight.png" ;
@Input() lightLogo2="../assets/icons/developerLight.png";
@Input() darkLogo1="../assets/icons/logoDark.png" ;
@Input() darkLogo2="../assets/icons/developerDark.png";
}
