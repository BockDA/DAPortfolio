import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { RouterLink } from "@angular/router";

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
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent implements OnInit, OnDestroy, AfterViewInit {
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

  ngAfterViewInit() {
    setTimeout(() => {
      const offset = 0; 
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 200); 
  }
}
