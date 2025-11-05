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
menuTranslateY = 0; // negative value (px) to move menu up while scrolling
useCssMenu = false; // use JS variant (transform-based) for reliable sticky behavior
private menuHeight = 104; // default fallback; will be measured after view init
private threshold = 0; // scrollY at which menu reaches the top

@ViewChild('menuEl', { read: ElementRef }) menuEl?: ElementRef<HTMLElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || 0;
    // Clamp progress until threshold (distance from bottom to top position)
    const offset = Math.min(scrollY, this.threshold);
    this.menuTranslateY = -offset; // translate up (negative)
    this.menuFixedTop = scrollY >= this.threshold;
  }
 
  @HostListener('window:resize', [])
  onWindowResize() {
    this.computeMetrics();
    // Re-apply scroll logic with updated threshold
    this.onWindowScroll();
  }
 
  ngAfterViewInit(): void {
    // Measure menu height if possible for robust threshold
    const el = this.menuEl?.nativeElement;
    if (el) {
      // Use offsetHeight if available; fallback to default
      const measured = el.offsetHeight;
      if (measured && !isNaN(measured)) {
        this.menuHeight = measured;
      }
    }
    this.computeMetrics();
    // Initialize based on current scroll position
    this.onWindowScroll();
  }
 
  private computeMetrics() {
    // Distance to travel from bottom to top
    // Ensure non-negative threshold in case of very small viewports
    this.threshold = Math.max(0, window.innerHeight - this.menuHeight);
  }
 
}
