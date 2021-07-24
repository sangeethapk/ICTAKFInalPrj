import { Component, OnInit } from '@angular/core';
import {MembershipService} from '../membershipservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-corporatemembershipcontactusform',
  templateUrl: './corporatemembershipcontactusform.component.html',
  styleUrls: ['./corporatemembershipcontactusform.component.css']
})
export class CorporatemembershipcontactusformComponent implements OnInit {

  constructor(private membershipService: MembershipService,private router: Router) { }
  contactItem={
    name:'',
    email:'',
    message:''
  }
  ngOnInit(): void {
  }
  AddCorporateMembershipContact(){
    this.membershipService.newContact(this.contactItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/corporatemembership']);
  }
  
}
