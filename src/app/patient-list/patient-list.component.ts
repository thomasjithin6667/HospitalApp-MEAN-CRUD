import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyPatients } from 'src/model/myPatients';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  allPatients:MyPatients[]=[]
  searchTerm:any=""
  
  

  constructor(private api:ApiService, private router:Router){}
  ngOnInit():void{
    this.getAllPatients()
  
  }
  getAllPatients(){  this.api.getAllPatients().subscribe((data:any)=>{
    console.log(data);
    this.allPatients=data
    
  })

  }

  search() {
    
    console.log(this.searchTerm);
    
  
   
  }
  deletepatient(patientsid:any){
    this.api.deletepatient(patientsid).subscribe((data:any)=>{
      this.getAllPatients()
     
      
    })
  }
  
}
