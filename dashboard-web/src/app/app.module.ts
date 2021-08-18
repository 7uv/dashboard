import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
//import {MatAccordion} from '@angular/material/accordion';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import {DateAdapter} from '@angular/material/datepicker';
//import {MatNativeDateModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {LayoutModule} from '@angular/cdk/layout';
import {NavComponent} from './nav/nav.component';
import {PanelsComponent} from './panels/panels.component';
import {HomeComponent} from './home/home.component';
import {ExecutorComponent} from './executor/executor.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PanelsComponent,
    HomeComponent,
    ExecutorComponent,
    ContactComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatCheckboxModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    //MatNativeDateModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
