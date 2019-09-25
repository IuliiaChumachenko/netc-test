import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { DropdownModule } from '../dropdown/dropdown.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
