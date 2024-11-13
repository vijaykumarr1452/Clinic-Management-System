import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './auth.guard';
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
import { LeftventriclesComponent } from './leftventricles/leftventricles.component';
//import { AddleftventricleComponent } from './addleftventricle/addleftventricle.component';
import { DicomviewerComponent } from './dicomviewer/dicomviewer.component';
import { MastertableComponent } from './mastertable/mastertable.component';
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
import { GeneralAddclinicdoctorComponent } from './general-addclinicdoctor/general-addclinicdoctor.component';
import { GeneralAddmasterComponent } from './general-addmaster/general-addmaster.component';
import { GeneralEditclinicComponent } from './general-editclinic/general-editclinic.component';
import { GeneralEditdoctorComponent } from './general-editdoctor/general-editdoctor.component';
import { GeneralClinicpreviewallComponent } from './general-clinicpreviewall/general-clinicpreviewall.component';
import { GeneralDoctorpreviewallComponent } from './general-doctorpreviewall/general-doctorpreviewall.component';
import { GenerateEditmasterComponent } from './generate-editmaster/generate-editmaster.component';
import { GeneratePreviewallmasterComponent } from './generate-previewallmaster/generate-previewallmaster.component';
import { PreviewallOtherdetailsComponent } from './previewall-otherdetails/previewall-otherdetails.component';
import { AddOtherdetailsComponent } from './add-otherdetails/add-otherdetails.component';
import { EditOtherdetailsComponent } from './edit-otherdetails/edit-otherdetails.component';
import { PreviewallFamilyhistoryComponent } from './previewall-familyhistory/previewall-familyhistory.component';
import { AddFamilyhistoryComponent } from './add-familyhistory/add-familyhistory.component';
import { EditFamilyhistoryComponent } from './edit-familyhistory/edit-familyhistory.component';
import { AddLifestyleComponent } from './add-lifestyle/add-lifestyle.component';
import { EditLifestyleComponent } from './edit-lifestyle/edit-lifestyle.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PreviewLifestyleComponent } from './preview-lifestyle/preview-lifestyle.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PreviewInvestigationreportComponent } from './preview-investigationreport/preview-investigationreport.component';
import { AddInvestigationreportComponent } from './add-investigationreport/add-investigationreport.component';
import { EditInvestigationreportComponent } from './edit-investigationreport/edit-investigationreport.component';
import { MedicineformComponent} from './medicineform/medicineform.component';
import { PreviewMedicineComponent} from './preview-medicine/preview-medicine.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { AddBloodtestComponent } from './add-bloodtest/add-bloodtest.component';
import { PreviewBloodtestComponent } from './preview-bloodtest/preview-bloodtest.component';
import { EditBloodtestComponent } from './edit-bloodtest/edit-bloodtest.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { ClinicPageComponent } from './clinic-page/clinic-page.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { DicomImageViewerComponent } from './dicom-image-viewer/dicom-image-viewer.component';
import { GallaryComponent } from './gallary/gallary.component';


const routes: Routes = [
  { 
    path: '', component: LoginComponent 
   },

  { path: 'login',
   component: LoginComponent ,
   data: { title: 'Login Page' } 
  },
  { 
    path: 'registration',component: RegistrationComponent 
  },
  { 
    path: 'home',component: HomeComponent 
  },
  { 
    path: 'dashboard',component: DashboardComponent , canActivate:[AuthGuard]
  },
  { 
    path: 'profile',component: ProfileComponent , canActivate:[AuthGuard]
  },
  { 
    path: 'doctorprofile',component: DoctorprofileComponent , canActivate:[AuthGuard]
  },
  { 
    path: 'patientform',component: PatientFormComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'addclinicdoctor',component: AddclinicdoctorComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'showallclinics',component: ShowallclinicsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'showalldoctors',component: ShowalldoctorsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'showallpatients',component: ShowallpatientsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'viewpatientdetails/:id',component: ViewpatientdetailsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'viewdoctorpatients',component: ViewdoctorpatientsComponent , canActivate:[AuthGuard]
  },
  { 
    path: 'editclinic/:id',component: EditclinicComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editdoctor/:id',component: EditdoctorComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'vieweditpatientdetails/:id',component: VieweditpatientdetailsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'leftventricles',component: LeftventriclesComponent  , canActivate:[AuthGuard]
  },
  // { 
  //   path: 'addleftventricle',component: AddleftventricleComponent  , canActivate:[AuthGuard]
  // },
  { 
    path: 'mastertable/:type',component: MastertableComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'addmastertable/:type',component: AddmastertableComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editmastertable/:id',component: EditmastertableComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'doctordashboard',component: DoctordashboardComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'dicomviewer',component: DicomviewerComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'dicomupload',component: DicomuploadComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'registerpatient',component: RegisterPatientComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'registerkin',component: RegisterKinComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'complains',component: ComplainsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewregpatient',component: PreviewRegPatientComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewregkin',component: PreviewRegKinComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editpatientmaster/:id',component: EditPatientMasterComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editkin/:id',component: EditKinComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'observations/:id',component: ObservationsComponent  , canActivate:[AuthGuard]
  },
  // { 
  //   path: 'comments',component: CommentsComponent  , canActivate:[AuthGuard]
  // },
  { 
    path: 'casescompleted',component: CaseCompletedComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterlv',component: MasterLvComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterrv',component: MasterRvComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterla',component: MasterLaComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterra',component: MasterRaComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'mastermv',component: MasterMvComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'master',component: MasterTvComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterla',component: MasterLaComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterpa',component: MasterPaComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterpv',component: MasterPvComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masteraorta',component: MasterAortaComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'masterpc',component: MasterPcComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewobservation',component: PreviewObservationsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'report',component: ReportComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'report-preview/:id',component: ReportPreviewComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-addclinicdoctor',component: GeneralAddclinicdoctorComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-addmaster/:type',component: GeneralAddmasterComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-editmaster/:id',component: GenerateEditmasterComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-previewmasterall/:type',component: GeneratePreviewallmasterComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-editclinic/:id',component: GeneralEditclinicComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-editdoctor/:id',component: GeneralEditdoctorComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-previewclinicall',component: GeneralClinicpreviewallComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'general-previewdoctorall',component: GeneralDoctorpreviewallComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewallotherdetails',component: PreviewallOtherdetailsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'addotherdetails',component: AddOtherdetailsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editotherdetails/:id',component: EditOtherdetailsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewallfamilyhistory',component: PreviewallFamilyhistoryComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'addfamilyhistory',component: AddFamilyhistoryComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editfamilyhistory/:id',component: EditFamilyhistoryComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewalllifestyle',component: PreviewLifestyleComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'addlifestyle',component: AddLifestyleComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editlifestyle/:id',component: EditLifestyleComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewinvestigationreport',component: PreviewInvestigationreportComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'addinvestigationreport',component: AddInvestigationreportComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editinvestigationreport/:id',component: EditInvestigationreportComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'prescription/:id',component: PrescriptionComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'medicineform',component: MedicineformComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'editmedicine/:id',component: EditMedicineComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'previewmedicine',component: PreviewMedicineComponent  , canActivate:[AuthGuard]
  },

  { 
    path: 'contactus',component: ContactUsComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'addbloodtest',component: AddBloodtestComponent , canActivate:[AuthGuard]
  },
  { 
    path: 'previewbloodtest',component: PreviewBloodtestComponent , canActivate:[AuthGuard]
  },
  { 
    path: 'editbloodtest/:id',component: EditBloodtestComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'clinic-page',
    component: ClinicPageComponent , canActivate:[AuthGuard],
    children: [
      { path: '', component:ShowallpatientsComponent },
      { path: 'casesToBeAssigned', component:ShowallpatientsComponent },
      { path: 'dicomupload', component: DicomviewerComponent },
      { path: 'dashboard', component: ClnicDashboardTabComponent }
    ]

  },
  { 
    path: 'clinicdashboard',
    component: ClinicdashboardComponent , canActivate:[AuthGuard],
    children: [
      { path: '', component:ShowallpatientsComponent },
      { path: 'casesToBeAssigned', component:ShowallpatientsComponent },
      { path: 'upload', component: DicomviewerComponent },
      { path: 'dashboard', component: ClnicDashboardTabComponent }
    ]

  },
  { 
    path: 'doctor-page',
    component: DoctorPageComponent , canActivate:[AuthGuard],
    children: [
      { path: '', component:ViewdoctorpatientsComponent },
      { path: 'dashboard', component:ViewdoctorpatientsComponent }
    ]

  },
  { 
    path: 'doctordashboard',
    component: DoctordashboardComponent , canActivate:[AuthGuard],
    children: [
      { path: '', component:ViewdoctorpatientsComponent },
      { path: 'dashboard', component:ViewdoctorpatientsComponent }
    ]

  },
  { 
    path: 'dashboard',
    component: DashboardComponent , canActivate:[AuthGuard],
    children: [
      { path: '', component:ShowallclinicsComponent },
       { path: 'allclinics', component:ShowallclinicsComponent },
       { path: 'alldoctors', component: ShowalldoctorsComponent },
      // { path: 'transfers', component: ClnicDashboardTabComponent }
    ]

  },
  { 
    path: 'image/:id',component: DicomImageViewerComponent  , canActivate:[AuthGuard]
  },
  { 
    path: 'gallary/:id',component: GallaryComponent  , canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
