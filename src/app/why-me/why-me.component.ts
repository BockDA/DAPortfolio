import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private isAnimationActive = false;

  constructor(public setAktiv: MyFunctionsService) {
    // Reset bei jeder neuen Instanz
    this.isAnimationActive = false;
  
  }

  ngOnDestroy() {
    // Observer cleanup
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.isAnimationActive = false;
    
  }

  ngAfterViewInit() {
        // Reset der Animation
    this.isAnimationActive = false;

    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 100);
  }

  private setupIntersectionObserver() {
    const element = document.querySelector('.test') as HTMLElement;
   
    // Element-State zurücksetzen
    element.classList.remove('test2');
    element.style.backgroundColor = '';
    this.isAnimationActive = false;
   
    // Intersection Observer mit großem rootMargin für frühe Trigger
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`IntersectionObserver: isIntersecting=${entry.isIntersecting}, ratio=${entry.intersectionRatio.toFixed(3)}`);

          if (entry.isIntersecting && !this.isAnimationActive) {
            // Animation aktivieren
            this.isAnimationActive = true;
            element.classList.add('test2');
          
          
          } else if (!entry.isIntersecting && this.isAnimationActive) {
            // Animation deaktivieren
            this.isAnimationActive = false;
            element.classList.remove('test2');
            //element.style.backgroundColor = '';
           
          }
        });
      },
      {
        // Großer rootMargin für frühe Trigger - funktioniert responsive!
        //rootMargin: '650px 0px -200px 0px', // Top, Right, Bottom, Left
        //threshold: [0, 0.1, 0.5, 1] // Multiple thresholds für smooth detection
      }
    );
    // Observer starten
    this.observer.observe(element);
  
  }
}