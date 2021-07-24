import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PartnershipformComponent } from './partnershipform/partnershipform.component';
import { AcademicmembershipComponent } from './academicmembership/academicmembership.component';
import { CorporatemembershipComponent } from './corporatemembership/corporatemembership.component';
import { CorporatemembershipcontactusformComponent } from './corporatemembershipcontactusform/corporatemembershipcontactusform.component';
import { CorporatemembershipregisternowformComponent } from './corporatemembershipregisternowform/corporatemembershipregisternowform.component';
import {MembershipService} from './membershipservice.service';
import { ViewacademicmembersComponent } from './viewacademicmembers/viewacademicmembers.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnershipComponent,
    PartnershipformComponent,
    AcademicmembershipComponent,
    CorporatemembershipComponent,
    CorporatemembershipcontactusformComponent,
    CorporatemembershipregisternowformComponent,
    ViewacademicmembersComponent,
    CourselistComponent,
    CourseDetailsComponent,
    AdminComponent,
    AddcourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RichTextEditorAllModule 
  ],
  providers: [MembershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
