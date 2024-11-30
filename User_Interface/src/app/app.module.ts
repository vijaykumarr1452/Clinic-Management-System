import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {Routes,RouterModule} from '@angular/router';
import { DicomViewerModule } from 'ng-dicomviewer';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';   
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule }  from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { AddclinicdoctorComponent } from './addclinicdoctor/addclinicdoctor.component';
import { ShowallclinicsComponent } from './showallclinics/showallclinics.component';
import { ShowalldoctorsComponent } from './showalldoctors/showalldoctors.component';
import { ShowallpatientsComponent } from './showallpatients/showallpatients.component';
import { ViewpatientdetailsComponent } from './viewpatientdetails/viewpatientdetails.component';
import { ViewdoctorpatientsComponent } from './viewdoctorpatients/viewdoctorpatients.component';
import { EditclinicComponent } from './editclinic/editclinic.component';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { VieweditpatientdetailsComponent } from './vieweditpatientdetails/vieweditpatientdetails.component';
import { ClinicdashboardComponent } from './clinicdashboard/clinicdashboard.component';
import { ClnicDashboardTabComponent } from './clnic-dashboard-tab/clnic-dashboard-tab.component';
import { MastertableComponent } from './mastertable/mastertable.component';
import { LeftventriclesComponent } from './leftventricles/leftventricles.component';
//import { AddleftventricleComponent } from './addleftventricle/addleftventricle.component';
import { DicomviewerComponent } from './dicomviewer/dicomviewer.component';
import { AddmastertableComponent } from './addmastertable/addmastertable.component';
import { EditmastertableComponent } from './editmastertable/editmastertable.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DicomuploadComponent } from './dicomupload/dicomupload.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { RegisterKinComponent } from './register-kin/register-kin.component';
import { ComplainsComponent } from './complains/complains.component';
import { PreviewRegPatientComponent } from './preview-reg-patient/preview-reg-patient.component';
import { PreviewRegKinComponent } from './preview-reg-kin/preview-reg-kin.component';
import { EditKinComponent } from './edit-kin/edit-kin.component';
import { EditPatientMasterComponent } from './edit-patient-master/edit-patient-master.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { ObservationsComponent } from './observations/observations.component';
//import { CommentsComponent } from './comments/comments.component';
import { CaseCompletedComponent } from './case-completed/case-completed.component';
import { MasterLvComponent } from './master-lv/master-lv.component';
import { MasterLaComponent } from './master-la/master-la.component';
import { MasterRvComponent } from './master-rv/master-rv.component';
import { MasterPvComponent } from './master-pv/master-pv.component';
import { MasterRaComponent } from './master-ra/master-ra.component';
import { MasterMvComponent } from './master-mv/master-mv.component';
import { MasterTvComponent } from './master-tv/master-tv.component';
import { MasterPaComponent } from './master-pa/master-pa.component';
import { MasterAortaComponent } from './master-aorta/master-aorta.component';
import { MasterPcComponent } from './master-pc/master-pc.component';
import { PreviewObservationsComponent } from './preview-observations/preview-observations.component';
import { ReportComponent } from './report/report.component';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { ReferralImageComponent } from './referral-image/referral-image.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { GeneralAddclinicdoctorComponent } from './general-addclinicdoctor/general-addclinicdoctor.component';
import { GeneralAddmasterComponent } from './general-addmaster/general-addmaster.component';
import { GeneralEditdoctorComponent } from './general-editdoctor/general-editdoctor.component';
import { GeneralEditclinicComponent } from './general-editclinic/general-editclinic.component';
import { GeneralClinicpreviewallComponent } from './general-clinicpreviewall/general-clinicpreviewall.component';
import { GeneralDoctorpreviewallComponent } from './general-doctorpreviewall/general-doctorpreviewall.component';
import { GenerateEditmasterComponent } from './generate-editmaster/generate-editmaster.component';
import { GeneratePreviewallmasterComponent } from './generate-previewallmaster/generate-previewallmaster.component';
import { AddOtherdetailsComponent } from './add-otherdetails/add-otherdetails.component';
import { PreviewallOtherdetailsComponent } from './previewall-otherdetails/previewall-otherdetails.component';
import { EditOtherdetailsComponent } from './edit-otherdetails/edit-otherdetails.component';
import { AddFamilyhistoryComponent } from './add-familyhistory/add-familyhistory.component';
import { EditFamilyhistoryComponent } from './edit-familyhistory/edit-familyhistory.component';
import { PreviewallFamilyhistoryComponent } from './previewall-familyhistory/previewall-familyhistory.component';
import { AddLifestyleComponent } from './add-lifestyle/add-lifestyle.component';
import { PreviewLifestyleComponent } from './preview-lifestyle/preview-lifestyle.component';
import { EditLifestyleComponent } from './edit-lifestyle/edit-lifestyle.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { AddInvestigationreportComponent } from './add-investigationreport/add-investigationreport.component';
import { EditInvestigationreportComponent } from './edit-investigationreport/edit-investigationreport.component';
import { PreviewInvestigationreportComponent } from './preview-investigationreport/preview-investigationreport.component';
import { MedicineformComponent } from './medicineform/medicineform.component';
import { PreviewMedicineComponent } from './preview-medicine/preview-medicine.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { AddBloodtestComponent } from './add-bloodtest/add-bloodtest.component';
import { EditBloodtestComponent } from './edit-bloodtest/edit-bloodtest.component';
import { PreviewBloodtestComponent } from './preview-bloodtest/preview-bloodtest.component';
import { LvmotionComponent } from './lvmotion/lvmotion.component';
import { MasterComponent } from './master/master.component';
import { ClinicPageComponent } from './clinic-page/clinic-page.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { ForceclosureComponent } from './forceclosure/forceclosure.component';
import { TransferComponent } from './transfer/transfer.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
// import { NgxGalleryOptions, NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgImageSliderModule } from 'ng-image-slider';
import { CriticalImagesComponent } from './critical-images/critical-images.component';
import { SupplementoryReportComponent } from './supplementory-report/supplementory-report.component';
import { OpenForceClosedComponent } from './open-force-closed/open-force-closed.component';
import { DicomImageViewerComponent } from './dicom-image-viewer/dicom-image-viewer.component';
import { CasesToBeClosedComponent } from './cases-to-be-closed/cases-to-be-closed.component';
import { LocationComponent } from './location/location.component';
import { MasterAorticValveComponent } from './master-aortic-valve/master-aortic-valve.component';
import { IvcComponent } from './ivc/ivc.component';
import { VenousComponent } from './venous/venous.component';
import { CasesToBeOpenedComponent } from './cases-to-be-opened/cases-to-be-opened.component';
import { NgxPaginateModule } from 'ngx-paginate';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReferenceComponent } from './reference/reference.component';
import { ExpertsOpinionComponent } from './experts-opinion/experts-opinion.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { ImpressionComponent } from './impression/impression.component'
const x = [
  { 
    path: '', component: LoginComponent 
   },

 
]

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    FooterComponent,
    ProfileComponent,
    SidenavComponent,
    PatientFormComponent,
    AddclinicdoctorComponent,
    ShowallclinicsComponent,
    ShowalldoctorsComponent,
    ShowallpatientsComponent,
    ViewpatientdetailsComponent,
    ViewdoctorpatientsComponent,
    EditclinicComponent,
    EditdoctorComponent,
    VieweditpatientdetailsComponent,
    ClinicdashboardComponent,
    ClnicDashboardTabComponent,
    MastertableComponent,
    LeftventriclesComponent,
    //AddleftventricleComponent,
    DicomviewerComponent,
    AddmastertableComponent,
    EditmastertableComponent,
    DoctordashboardComponent,
    DicomuploadComponent,
    RegisterPatientComponent,
    RegisterKinComponent,
    ComplainsComponent,
    PreviewRegPatientComponent,
    PreviewRegKinComponent,
    EditKinComponent,
    EditPatientMasterComponent,
    DoctorprofileComponent,
    ObservationsComponent,
    //CommentsComponent,
    CaseCompletedComponent,    
    MasterLvComponent,
    MasterLaComponent,
    MasterRvComponent,
    MasterPvComponent,
    MasterRaComponent,
    MasterMvComponent,
    MasterTvComponent,
    MasterPaComponent,
    MasterAortaComponent,
    MasterPcComponent,
    PreviewObservationsComponent,
    ReportComponent,
    ReportPreviewComponent,
    ReferralImageComponent,
    MeasurementsComponent,
    GeneralAddclinicdoctorComponent,
    GeneralAddmasterComponent,
    GeneralEditdoctorComponent,
    GeneralEditclinicComponent,
    GeneralClinicpreviewallComponent,
    GeneralDoctorpreviewallComponent,
    GenerateEditmasterComponent,
    GeneratePreviewallmasterComponent,
    AddOtherdetailsComponent,
    PreviewallOtherdetailsComponent,
    EditOtherdetailsComponent,
    AddFamilyhistoryComponent,
    EditFamilyhistoryComponent,
    PreviewallFamilyhistoryComponent,
    AddLifestyleComponent,
    PreviewLifestyleComponent,
    EditLifestyleComponent,
    ContactUsComponent,
    PrescriptionComponent,
    AddInvestigationreportComponent,
    EditInvestigationreportComponent,
    PreviewInvestigationreportComponent,
    MedicineformComponent,
    PreviewMedicineComponent,
    EditMedicineComponent,
    HomemenuComponent,
    AddBloodtestComponent,
    EditBloodtestComponent,
    PreviewBloodtestComponent,
    LvmotionComponent,
    MasterComponent,
    ClinicPageComponent,
    DoctorPageComponent,
    ForceclosureComponent,
    TransferComponent,
    ImageViewerComponent,
    CriticalImagesComponent,
    SupplementoryReportComponent,
    OpenForceClosedComponent,
    DicomImageViewerComponent,
    CasesToBeClosedComponent,
    LocationComponent,
    MasterAorticValveComponent,
    IvcComponent,
    VenousComponent,
    CasesToBeOpenedComponent,
    DeletePatientComponent,
    ReferenceComponent,
    ExpertsOpinionComponent,
    GallaryComponent,
    MedicineDetailsComponent,
    ImpressionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DicomViewerModule,
    //RouterModule.forRoot(x),
    RouterModule.forRoot(x, {useHash: true}),
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
    GalleryModule,
LightboxModule,
ImageViewerModule,
// NgxGalleryImage,
// NgxGalleryOptions
NgImageSliderModule,
NgxPaginateModule,
 BsDatepickerModule.forRoot(),
 DatepickerModule.forRoot(),
 BrowserAnimationsModule,
//  NgbModule,
 NgxSpinnerModule,
 ModalModule.forRoot() 
//     DatepickerModule.forRoot()
// AngularPaginatorModule
// AgmCoreModule.forRoot({
//   apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
// })

    ],
      providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
