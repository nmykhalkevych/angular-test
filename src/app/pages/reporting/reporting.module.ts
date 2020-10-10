import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ReportingComponent,
  },
];
@NgModule({
  declarations: [ReportingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ReportingModule {}
