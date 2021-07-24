import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

 
  data={
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
  }
  applicant={
  
    name:'',
    phone:'',
    email:'',
    employed:'',
    qualification:'',
    messsage:''
  };
  course_name:any;
  msg='';
  msg1='';
  constructor(private _courseService:CourseServiceService,private _router:Router) {console.log("test constructor") }

  ngOnInit(): void {
     

    this.course_name=localStorage.getItem("course_name");
    console.log("Course 1: Details----"+this.course_name);
    this._courseService.getRetailCoursesDetails(this.course_name).subscribe((datanew: any) =>{
      console.log(datanew.name);
      this.data=datanew;

  });

  }//close init

  addapplicant(){

   
      
    alert("Added Successfully");
    console.log(this.applicant.name+"....");
    this._courseService.retailBrouchreRequest(this.applicant);
    this._router.navigate(['/admin']);
   
   
 }


  emailValidate(e:any){

  const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  if(!regex.test(e.target.value)){
   this. msg='Invalid Email ID'
  }
  else{
    this. msg=''
  }
 }
  

}
  
  




