import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  data=[{
    name:'',
    category:'',
    about:'',
    objective:'',
    sponserimage:'',
    knowledgeParterimage:'',
    internshipPartnerimage:'',
    courseDelivery:'',
    agenda:'',
    highlights:'',
    eligibility:'',
    test:'',
    courseFee:'',
    refundPolicy:'',
    importantDates:'',
    img1:'',
    img2:'',
    questionPaperLink:'',
    status:''
  }]





  constructor(private _courseService:CourseServiceService,private _router:Router) { }

  ngOnInit(): void {
    console.log("inside RetailList init");
    

   
  this._courseService.getRetailCourses().subscribe((data:any)=>{
    this.data=JSON.parse(JSON.stringify(data));
  });
  }

  getDetails(name:any){
    console.log("inside retailcourselist:"+name);
    //alert("hello");
    localStorage.setItem("course_name",name);
    this._router.navigate(['coursedetails']);





  }

}
