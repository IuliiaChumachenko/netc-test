import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [DropdownComponent],
})
export class DropdownModule { }
