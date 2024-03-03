import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { myHistory } from 'src/model/myHistory';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {

  patienthistory:myHistory={}
  constructor(private api:ApiService,private router:Router){}
  createhistory(){
    this.api.addPatient(this.patienthistory).subscribe((data:any)=>{
      this.router.navigateByUrl('/patientlist')

    })
  }
}
