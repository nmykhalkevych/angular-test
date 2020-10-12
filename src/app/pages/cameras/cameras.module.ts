import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination: true
};

const routes: Routes = [
  {
    path: '',
    component: CamerasComponent,
  },
];
@NgModule({
  declarations: [CamerasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class CamerasModule {}
