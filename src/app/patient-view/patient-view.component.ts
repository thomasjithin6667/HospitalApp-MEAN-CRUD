import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit{
  patientId:any=''
  patient:any=''
  allHistory:any=''
  genderId:string=''
  gendername:any=''

  constructor(private ActivatedRoute:ActivatedRoute, private api:ApiService){}
  ngOnInit():void{
    this.ActivatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.patientId=data.patientId
      console.log(data.patientId);
      
      this.api.viewPatients(this.patientId).subscribe((data:any)=>{
        console.log(data);
        this.patient=data
        this.genderId=data.gender
        console.log(this.genderId);
        this.api.getAllgender(this.genderId).subscribe((data2)=>{
          console.log(data2)
          this.gendername=data2.genderid;
          console.log(this.gendername);
          
          
          
          
          })
          
          
          
          
        
      })
        
        
      })
      this.api.getAllHistory().subscribe((data:any)=>{
        console.log(data);
        this.allHistory=data
      })
     
  }
  deletehistory(id:any){
    this.api.deletepatient(id).subscribe((data:any)=>{
     
     
      
    })
  }
  
}
