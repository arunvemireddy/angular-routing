import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {emplo} from './emp'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServsampService {


  private _url="/assests/data.json";
  constructor(private http:HttpClient) { }

  getemployees(){
    return [
      {eid:1,name:"arun"},
      {eid:2,name:"kumar"},
      {eid:3,name:"reddy"}
    ];
  }
  getdepartment(){
    return[
      {did:1,name:"HR"},
      {did:2,name:"R&D"},
      {did:3,name:"Finance"}
    ];
  }
  getdata(): Observable<emplo[]>{
   return this.http.get<emplo[]>(this._url);
  }
  getheroes(){
    return [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
  }
}
