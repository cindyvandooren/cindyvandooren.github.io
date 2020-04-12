import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {EducationComponent} from './components/education/education.component';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {WorkComponent} from './components/work/work.component';
import {LandingComponent} from './landing.component';

const landingRoutes = [{
  path: '',
  redirectTo: 'landing/introduction',
  pathMatch: 'full'
}, {
  path: 'landing',
  component: LandingComponent,
  children: [{
    path: 'introduction',
    component: IntroductionComponent
  }, {
    path: 'work',
    component: WorkComponent
  }, {
    path: 'education',
    component: EducationComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }]
}]

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    IntroductionComponent,
    WorkComponent,
    EducationComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(landingRoutes)
  ]
})
export class LandingModule { }
