import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientListComponent } from './patient-list/patient-list.component';

import { PatienthistoryUpdateComponent } from './patienthistory-update/patienthistory-update.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientNewComponent } from './patient-new/patient-new.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'patientlist',component:PatientListComponent},
  {path:'patientlist/patientupdate/id',component:PatientUpdateComponent},
  {path:'patientlist/patientview/:patientId',component:PatientViewComponent},
  {path:'pathienthistoryupdate/id',component:PatienthistoryUpdateComponent },
  {path:'patientlist/patientnew',component:PatientNewComponent },
  {path:'**',component:PageNotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
