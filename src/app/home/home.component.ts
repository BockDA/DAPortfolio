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
export class HomeComponent {
  home = HomeComponent;

  menuFixedTop = false;
  menuTranslateY = 0;
  useCssMenu = false;
  private menuHeight = 104;
  private threshold = 0;

  @ViewChild('menuEl', { read: ElementRef }) menuEl?: ElementRef<HTMLElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || 0;
    const offset = Math.min(scrollY, this.threshold);
    this.menuTranslateY = -offset;
    this.menuFixedTop = scrollY >= this.threshold;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.computeMetrics();
    this.onWindowScroll();
  }

  ngAfterViewInit(): void {
    const el = this.menuEl?.nativeElement;
    if (el) {
      const measured = el.offsetHeight;
      if (measured && !isNaN(measured)) {
        this.menuHeight = measured;
      }
    }
    this.computeMetrics();
    this.onWindowScroll();
  }

  private computeMetrics() {
    this.threshold = Math.max(0, window.innerHeight - this.menuHeight);
  }
}
  
