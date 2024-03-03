import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { myGender } from 'src/model/myGender';
import { MyPatients } from 'src/model/myPatients';
import { Router, Routes } from '@angular/router';
import { myHistory } from 'src/model/myHistory';

@Component({
  selector: 'app-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.css']
})
export class PatientNewComponent {
  allGenders:any[]=[]
  patientName:string=''
  patient:MyPatients={}
  patienthistory:myHistory={}

  constructor(private api:ApiService, private router:Router){
    this.patient.gender="select gender"
  }
  

  ngOnInit():void{
    this.api.getAllgenders().subscribe((data:any)=>{
      console.log(data);
      this.allGenders=data
      
      
      

    })
  }
  create(){
    this.api.addPatient(this.patient).subscribe((data:any)=>{
      this.router.navigateByUrl('/patientlist')

    })
  }
  

  createhistory(){
    this.api.addPatient(this.patienthistory).subscribe((data:any)=>{
      this.router.navigateByUrl('/patientlist')

    })
  }


}
