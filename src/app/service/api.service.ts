import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myGender } from 'src/model/myGender';
import { myHistory } from 'src/model/myHistory';
import { MyPatients } from 'src/model/myPatients';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl ='http://localhost:3000/patients'
  base2Url='http://localhost:3000/History'

  constructor(private http:HttpClient) { }

  getAllPatients():Observable<MyPatients>{
    return this.http.get(this.baseUrl)
  }
  viewPatients(patientId:any){
    return this.http.get(`${this.baseUrl}/${patientId}`)
  }
  getAllHistory():Observable<myHistory>{
    return this.http.get(this.base2Url)
  }
  getAllgender(gender:any):Observable<myGender>{
    return this.http.get('http://localhost:3000/gender/'+gender)
  }
  getAllgenders(){
    return this.http.get('http://localhost:3000/gender')
  }

  addPatient(patientbody:any){
    return this.http.post(this.baseUrl,patientbody)
  }

  deletepatient(patientId:any){
    return this.http.delete(`${this.baseUrl}/${patientId}`)
    
  }
  addhistory(Historybody:any){
    return this.http.post(this.base2Url,Historybody)
  }
  deletehistory(id:any){
    return this.http.delete(`${this.base2Url}/${id}`)
    
  }
  }
  

