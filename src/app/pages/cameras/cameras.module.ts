import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CamerasComponent,
  },
];
@NgModule({
  declarations: [CamerasComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CamerasModule {}
