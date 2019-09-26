import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPanelComponent } from './info-panel.component';
import { InfoGroupModule } from '../info-group/info-group.module';

@NgModule({
  declarations: [InfoPanelComponent],
  imports: [
    CommonModule,
    InfoGroupModule,
  ],
  exports: [InfoPanelComponent],
})
export class InfoPanelModule { }
