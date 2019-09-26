import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoGroupComponent } from './info-group.component';
import { InfoItemModule } from '../info-item/info-item.module';

@NgModule({
  declarations: [InfoGroupComponent],
  imports: [
    CommonModule,
    InfoItemModule,
  ],
  exports: [InfoGroupComponent],
})
export class InfoGroupModule { }
