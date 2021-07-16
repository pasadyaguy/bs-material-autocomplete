import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BsMaterialAutocompleteComponent } from './bs-material-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BsMaterialAutocompleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [BsMaterialAutocompleteComponent]
})
export class BsMaterialAutocompleteModule { }
