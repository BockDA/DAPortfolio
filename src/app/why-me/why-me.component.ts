import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent implements AfterViewInit {
  
  @ViewChildren('fadeEl', { read: ElementRef })
  fadeEls!: QueryList<ElementRef<HTMLElement>>;

  constructor(public setAktiv: MyFunctionsService) {}

  ngAfterViewInit() {
 
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade_element');
          fadeElements.forEach((el, index) => {
              el.classList.add('is-visible');
      });
      
      // Intersection Observer als Backup
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
                       if (entry.isIntersecting) {
              el.classList.add('is-visible');
            } else {
              el.classList.remove('is-visible');
            }
          }
        },
        { threshold: 0.1 }
      );
      
      fadeElements.forEach((el) => {
        observer.observe(el);
      });

    }, 500); // Längere Verzögerung
  }
}

