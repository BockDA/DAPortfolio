import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
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
  sections: { TEXT1: SafeHtml; TEXT2: SafeHtml; TEXT3: SafeHtml }[] = [];
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
          TEXT1: this.sanitizer.bypassSecurityTrustHtml(s.TEXT1),
          TEXT2: this.sanitizer.bypassSecurityTrustHtml(s.TEXT2),
          TEXT3: this.sanitizer.bypassSecurityTrustHtml(s.TEXT3),
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


      // Animation Setup
      const animationConfigs = [
        {
          selector: '.legal-notice-content', animationClass: 'animat_1'
        },
        {
          selector: '.legal_notice_header', animationClass: 'animat_1'
        }

      ];
      this.myFunctions.setupAnimations(animationConfigs);
    }
  }

}
