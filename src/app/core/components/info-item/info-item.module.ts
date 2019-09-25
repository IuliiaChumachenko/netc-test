import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoItemComponent } from './info-item.component';

@NgModule({
  declarations: [InfoItemComponent],
  exports: [
    InfoItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoItemModule { }
