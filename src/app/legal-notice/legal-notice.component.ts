import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { RouterLink } from "@angular/router";
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    MenueComponent,
    LogoComponent,
    TranslateModule,
    CommonModule,
    NgFor,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss',
    './legal-notice-mobile.scss'
  ],
})
export class LegalNoticeComponent implements OnInit, OnDestroy, AfterViewInit {
  sections: { TITLE: SafeHtml; TEXT: SafeHtml; EXTRA: SafeHtml }[] = [];
  private langSub?: Subscription;

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer,
    private myFunctions: MyFunctionsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.loadSections();

    // Auf Sprachwechsel reagieren
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadSections();
    });
  }

  private loadSections() {
    this.translate.get('LEGALNOTICE.SECTIONS').subscribe((data) => {
      if (Array.isArray(data)) {
        this.sections = data.map((s: any) => ({
          TITLE: this.sanitizer.bypassSecurityTrustHtml(s.TITLE ?? s.TEXT1 ?? ''),
          TEXT: this.sanitizer.bypassSecurityTrustHtml(s.TEXT ?? s.TEXT2 ?? ''),
          EXTRA: this.sanitizer.bypassSecurityTrustHtml(s.EXTRA ?? s.TEXT3 ?? ''),
        }));
      } else {
        this.sections = [];
      }
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
    if (isPlatformBrowser(this.platformId)) {
      this.myFunctions.disconnectAnimations();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      const animationConfigs = [
        {
          selector: '.legal_notice_content', animationClass: 'animate-intro'
        },
        {
          selector: '.legal_notice_header', animationClass: 'animate-intro'
        }
      ];
      this.myFunctions.setupAnimations(animationConfigs);
    }
  }
}
