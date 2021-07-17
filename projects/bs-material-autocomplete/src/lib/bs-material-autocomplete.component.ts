import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BsSearchInfo } from './bs-search-info';

@Component({
  selector: 'bs-material-autocomplete',
  templateUrl: 'bs-material-autocomplete.component.html',
  styles: [],
})
export class BsMaterialAutocompleteComponent implements OnInit {
  @Input() placeholder: string = 'Search';
  @Input() controlName: string = 'controlName';
  @Input() idValueControlName: string = 'id';
  @Input() form: FormGroup;
  @Input() items: BsSearchInfo[] = [];
  @Input() invalidSelectionErrorMessage: string = 'Invalid selection, please search again.';
  @Input() requiredErrorMessage: string = 'Required';

  itemsFiltered: Observable<BsSearchInfo[]>;

  @Output() onSelected: EventEmitter<BsSearchInfo> = new EventEmitter<BsSearchInfo>();

  constructor() {}

  public get searchControl(): FormControl {
    return this.form.get(this.controlName) as FormControl;
  }

  get isRequired(): boolean {
    if (this.form != null) {
      const control = this.form.get(this.controlName);
      if (control && control.validator) {
        const validator = control.validator({} as AbstractControl);
        if (validator && validator.required) {
          return true;
        }
      }
    }
    return false;
  }

  existsValidation(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {  
      if (c.value === null || c.pristine || c.value === '') {
        return null;
      } else if (c.dirty) {
        return (this.items.find(x => x.searchKeywords === c.value.searchKeywords)) ? null : { 'invalidselection': true };
      }
      return null;
    }
  }

  ngOnInit(): void {
    if (this.form.get(this.controlName).validator) {
      this.form.get(this.controlName).setValidators([this.form.get(this.controlName).validator, this.existsValidation()]);
    }
    else {
      this.form.get(this.controlName).setValidators([this.existsValidation()]);
    }
    this.initSearchForm();
  }

  displayFn(item: BsSearchInfo): string {
    return item && item.displayValue ? item.displayValue : '';
  }

  initSearchForm() {
    const control = this.form.get(this.controlName);
    this.itemsFiltered = control.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onSelect(event: MatOptionSelectionChange) {
    this.form.patchValue({
      [this.controlName]: event.source.value,
      [this.idValueControlName]: event.source.value.Id,
    });
    this.onSelected.emit(event.source.value);
    this.form.updateValueAndValidity();
  }

  onCleared() {
    this.form.patchValue({
      [this.idValueControlName]: null
    });
    this.form.get(this.controlName).reset();
    this.form.updateValueAndValidity();
  }

  private _filter(value: string): BsSearchInfo[] {
    if ((typeof value) === "string") {
      const filterValue = value.toLowerCase();
      return this.items.filter(option => option.searchKeywords.toLowerCase().includes(filterValue)).slice(0, 20);
    }
    else {
      return [];
    }

  }
}
