import { Component } from '@angular/core';
import { myHistory } from 'src/model/myHistory';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patienthistory-update',
  templateUrl: './patienthistory-update.component.html',
  styleUrls: ['./patienthistory-update.component.css']
})
export class PatienthistoryUpdateComponent {
  patienthistory:myHistory={}
  constructor(private api:ApiService,private router:Router){}
  createhistory(){
    this.api.addhistory(this.patienthistory).subscribe((data:any)=>{
      this.router.navigateByUrl('/patientlist')

    })
  }

}
