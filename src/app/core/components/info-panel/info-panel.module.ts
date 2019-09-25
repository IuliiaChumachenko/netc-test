import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPanelComponent } from './info-panel.component';
import { InfoItemModule } from '../info-item/info-item.module';

@NgModule({
  declarations: [InfoPanelComponent],
  imports: [
    CommonModule,
    InfoItemModule,
  ],
  exports: [InfoPanelComponent],
})
export class InfoPanelModule { }
