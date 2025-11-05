

import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LegalNoticeComponent } from './app/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './app/privacy-policy/privacy-policy.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legalNotice', component: LegalNoticeComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent}

];

