import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnalyticsService } from './shared/services/analytics.service';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InstallComponent } from './components/install/install.component';
import { DocsComponent } from './components/docs/docs.component';
import { QuickstartComponent } from './components/quickstart/quickstart.component';
import { HelpComponent } from './components/help/help.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'runnerty.io'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'info',
  content: {
    "message": "We use cookies, but not the dangerous ones",
    dismiss: 'OK!',
    deny: 'Refuse cookies',
    link: 'Learn more',
    href: 'https://cookiesandyou.com'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstallComponent,
    DocsComponent,
    QuickstartComponent,
    HelpComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [AppService, AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
