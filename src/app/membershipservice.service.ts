import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
item={
  name: String,
  email: String,
  message: String  
}
  constructor(private http:HttpClient) { }
  newContact(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"contactus":item})
    .subscribe(data =>{console.log(data)})
  }
}
