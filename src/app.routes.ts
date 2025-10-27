import {
  Component,
  HostListener,
  NgZone,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenueComponent } from './app/menue/menue.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MenueComponent, FooterComponent],
  templateUrl: './app/shared/layout/layout.component.html',
  styleUrl: './app/shared/layout/layout.component.scss',
})
export class LayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('menuRef', { static: true, read: ElementRef })
  menuRef!: ElementRef<HTMLElement>;

  private menuHeight = 104; // Fallback – wird gemessen
  private currentY = 0; // 0 = sichtbar, +menuHeight = versteckt nach unten
  private targetY = 0;
  private rafId: number | null = null;
  private lastY = 0;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.menuHeight =
      this.menuRef.nativeElement.getBoundingClientRect().height || this.menuHeight;
    this.applyTransform(0);
    this.startRAF();
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  @HostListener('window:resize')
  onResize() {
    this.menuHeight =
      this.menuRef.nativeElement.getBoundingClientRect().height || this.menuHeight;
    if (this.targetY > 0) this.targetY = this.menuHeight;
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY || 0;
    const delta = y - this.lastY;

    if (delta > 0) {
      // scrollt nach unten → Menü ausblenden (nach unten)
      this.targetY = this.menuHeight;
    } else if (delta < 0) {
      // scrollt nach oben → Menü einblenden (nach oben kommen)
      this.targetY = 0;
    }

    this.lastY = y;
  }

  private startRAF() {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      this.currentY = lerp(this.currentY, this.targetY, 0.18);
      if (Math.abs(this.currentY - this.targetY) < 0.5) this.currentY = this.targetY;

      this.applyTransform(this.currentY);
      this.rafId = requestAnimationFrame(tick);
    };
    this.zone.runOutsideAngular(() => (this.rafId = requestAnimationFrame(tick)));
  }

  private applyTransform(y: number) {
    // nach unten rausfahren
    this.menuRef.nativeElement.style.transform = `translate(-50%, ${y}px)`;
  }
}
