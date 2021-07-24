import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

 

 
constructor(private http:HttpClient) { }


retailBrouchreRequest(data:any){


  return this.http.post("http://localhost:3000/insert",{"applicant":data})
  .subscribe(data =>{console.log(data)});
}

getRetailBrochure(){
    
          return this.http.get("http://localhost:3000/display");
    }
    addRetailCourse(course:any){
      console.log("Servicce data for retail : "+course.name);

      return this.http.post("http://localhost:3000/addRetailCourse",{"course":course})
      .subscribe(data =>{console.log(data+"Data added successfully.....")});


    }
    getRetailCourses(){
    
      return this.http.get("http://localhost:3000/getRetailCourseData");
}

getRetailCoursesDetails(name:any){
    
console.log("Inside Course details request Service...");
  return this.http.get("http://localhost:3000/getRetailCourseDetails/"+name);
}
getInstitutionalCourses(){
    
  return this.http.get("http://localhost:3000/getInstitutionalCourseData");
}
getInstitutionalCoursesDeatils(course_name:any){
    
return this.http.get("http://localhost:3000/getaInstitutionalCourseDetails/"+course_name);
}
getCorporateCourses(){
    
return this.http.get("http://localhost:3000/getCorporateCourseData");
}
getCorporateCoursesDeatils(course_name:any){
    
return this.http.get("http://localhost:3000/getCorporateCourseDetails/"+course_name);
}

}
