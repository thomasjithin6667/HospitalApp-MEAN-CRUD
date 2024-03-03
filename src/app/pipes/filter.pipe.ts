import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterd'
})
export class FilterPipe implements PipeTransform {
 

  transform(allPatients:any[],searchTerm:string,propName:string): any[] {
    const result:any[]=[]
    
    
    if(!allPatients||searchTerm==""|| propName==""){    
    return allPatients;}
   
   
    allPatients.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchTerm.trim().toLocaleLowerCase())){
        result.push(contact)
      }
    })
    return result;

  }

}
