import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TranslateModule, HttpClientModule, MaterialModule],
  exports: [HeaderComponent, HttpClientModule, MaterialModule],
})
export class SharedModule {}
