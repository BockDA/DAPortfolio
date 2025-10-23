/*
import { Component, OnInit } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
   selector: 'app-legal-notice',
  standalone: true,
  imports: [
    MenueComponent,
    TranslateModule,
    CommonModule,
    NgFor,
    FooterComponent,
  ],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent implements OnInit {
  sections: { TEXT1: SafeHtml; TEXT2: SafeHtml; TEXT3: SafeHtml }[] = [];

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.translate.get('LEGALNOTICE.SECTIONS').subscribe((data) => {
      if (Array.isArray(data)) {
        this.sections = data.map((s: any) => ({
          TEXT1: this.sanitizer.bypassSecurityTrustHtml(s.TEXT1),
          TEXT2: this.sanitizer.bypassSecurityTrustHtml(s.TEXT2),
          TEXT3: this.sanitizer.bypassSecurityTrustHtml(s.TEXT3),
        }));
      }
    });
  }

   
}
*/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    MenueComponent,
    TranslateModule,
    CommonModule,
    NgFor,
    FooterComponent,
  ],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent implements OnInit, OnDestroy {
  sections: { TEXT1: SafeHtml; TEXT2: SafeHtml; TEXT3: SafeHtml }[] = [];
  private langSub?: Subscription;

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // Erstes Laden
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
  }
}
