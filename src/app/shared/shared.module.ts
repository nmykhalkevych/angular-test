import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [HeaderComponent, FormsModule, TranslateModule, HttpClientModule, MaterialModule],
})
export class SharedModule {}
