import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
private baseurl="assets/employe.json";
  constructor(private http:HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`)
  }
  getbyemail(email:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/searchbyemail?=${email}`)
  }
  adduser(record:Employe):Observable<any[]>{
    return this.http.post<any[]>(this.baseurl,{data:record})
  }
  deleteuser(id:number):Observable<any[]>
  {
    return this.http.delete<any[]>(`${this.baseurl}/id?=$(id)`)
  }
  updateuser(id:number,record:EmployeService):Observable<any[]>
  {
    return this.http.put<any[]>(`${this.baseurl}/id?=${id}`,{data:record})
  }
}
