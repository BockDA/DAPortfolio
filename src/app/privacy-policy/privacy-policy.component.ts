import { Component, AfterViewInit, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MyFunctionsService } from '../../services/my-functions.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  imports: [MenueComponent, FooterComponent, RouterLink, TranslateModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss',
    './privacy-policy-mobile.scss'
  ]
})
export class PrivacyPolicyComponent implements OnInit, AfterViewInit, OnDestroy {
  sections: any[] = [];
  private langSub?: Subscription;
  constructor(
    private myFunctions: MyFunctionsService,
    private translate: TranslateService,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.loadSections();
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadSections();
    });
  }

  private loadSections() {
    this.translate.get('PRIVACYPOLICY.SECTIONS').subscribe((data) => {
      if (Array.isArray(data)) {
        this.sections = data;
      } else {
        this.sections = [];
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const offset = 0;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }, 200);
      const animationConfigs = [
        { selector: '.privacy_policy_content', animationClass: 'animat_1' },
        { selector: '.privacy_policy_header', animationClass: 'animat_1' }
      ];
      this.myFunctions.setupAnimations(animationConfigs);
    }
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
    if (isPlatformBrowser(this.platformId)) {
      this.myFunctions.disconnectAnimations();
    }
  }
}

