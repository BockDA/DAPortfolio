import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface AnimationConfig {
  selector: string;
  animationClass: string;
  rootMargin?: string;
  threshold?: number | number[];
}

@Injectable({
  providedIn: 'root',
})
export class MyFunctionsService {
  private menuAktiv: string = '';
  private observer?: IntersectionObserver;
  private animationConfigs: Map<string, string> = new Map();

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  // Menu Functions
  setMenuAktiv(section: string): string {
    this.menuAktiv = section;
    return this.menuAktiv;
  }

  getMenuAktiv(): string {
    return this.menuAktiv;
  }
  // Animation Functions
  setupAnimations(configs: AnimationConfig[], options?: IntersectionObserverInit): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Store animation configs
    configs.forEach(config => {
      this.animationConfigs.set(config.selector, config.animationClass);
    });

    // Create observer with custom or default options
    const defaultOptions = {
      rootMargin: '650px 0px -200px 0px',
      threshold: [0, 0.1, 0.5, 1]
    };

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { ...defaultOptions, ...options }
    );

    // Observe all elements
    configs.forEach(config => {
      const elements = document.querySelectorAll(config.selector);
      elements.forEach(element => this.observer!.observe(element));
    });
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      const element = entry.target as HTMLElement;
      const selector = this.getElementSelector(element);
      const animationClass = this.animationConfigs.get(selector);

      if (animationClass) {
        element.classList.toggle(animationClass, entry.isIntersecting);
      }
    });
  }

  private getElementSelector(element: HTMLElement): string {
    // Find matching selector from our configs
    for (const selector of this.animationConfigs.keys()) {
      if (element.matches(selector)) {
        return selector;
      }
    }
    return '';
  }

  disconnectAnimations(): void {
    this.observer?.disconnect();
    this.animationConfigs.clear();
  }
}
