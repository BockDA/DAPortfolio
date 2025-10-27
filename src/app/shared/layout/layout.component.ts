import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenueComponent } from '../../menue/menue.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MenueComponent, FooterComponent],
  template: `
    <app-menue #menuRef class="app_menu"></app-menue>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('menuRef', { read: ElementRef }) menuRef!: ElementRef<HTMLElement>;

  private distanceToTop = 0;   // Weg von unten bis ganz nach oben
  private lastY = 0;

  ngAfterViewInit() {
    this.remeasure();
  }

  @HostListener('window:resize')
  onResize() {
    this.remeasure();
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    const delta = y - this.lastY;

    // Nach oben scrollen -> bis ganz nach oben fahren
    if (delta < 0) {
      this.menuRef.nativeElement.style.transform =
        `translate(-50%, -${this.distanceToTop}px)`;
    }
    // Nach unten scrollen -> zurück nach unten
    else if (delta > 0) {
      this.menuRef.nativeElement.style.transform =
        'translate(-50%, 0)';
    }

    this.lastY = y;
  }

  private remeasure() {
    const h = this.menuRef.nativeElement.getBoundingClientRect().height || 104;
    // volle Strecke: Viewporthöhe minus Menü-Höhe
    this.distanceToTop = Math.max(0, window.innerHeight - h);
    // Start unten
    this.menuRef.nativeElement.style.transform = 'translate(-50%, 0)';
  }
}
