import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MenueComponent } from '../menue/menue.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { MyprojectsComponent } from '../myprojects/myprojects.component';
import { TeamplayerComponent } from "../teamplayer/teamplayer.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    MenueComponent,
    WhyMeComponent,
    MyskillsComponent,
    MyprojectsComponent,
    TeamplayerComponent,
    ContactMeComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
  
home = HomeComponent;
  
menuFixedTop = false;

    @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || 0;
    this.menuFixedTop = scrollY > window.innerHeight * 0; 
      }
    
}
