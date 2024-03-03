import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatienthistoryUpdateComponent } from './patienthistory-update/patienthistory-update.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { PatientNewComponent } from './patient-new/patient-new.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientListComponent,
    PatientViewComponent,
    PatientUpdateComponent,
    PatienthistoryUpdateComponent,
    HeaderComponent,
    FooterComponent,
    PatientHistoryComponent,
    PatientNewComponent,
    PageNotfoundComponent,
    FilterPipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
