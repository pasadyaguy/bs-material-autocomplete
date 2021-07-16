# Angular Material Autocomplete

## Description

A reactive form single control angular material autocomplete component.

## Usage

```
npm install @smithbrianscott/bs-material-autocomplete
```

Add `BsMaterialAutocompleteModule` to your `@NgModule` imports.

```typescript
import { NgModule } from '@angular/core';

import { BsMaterialAutocompleteModule } from '@smithbrianscott/bs-material-autocomplete';

@NgModule({
    imports: [ 
        BsMaterialAutocompleteModule
    ],
})
export class FeatureModule {}
```

Add the autocomplete control using the selector `<bs-material-autocomplete>`.
You must use the following interface. You can create this in your project.
```typescript
export class SearchInfo {
 id: number;
 searchKeywords: string;
 displayValue: string;
 data: any;
}
```
- id - Primary key value from your dataset.
- searchKeywords - String of searchable value for the autocomplete search. i.e. 'john,doe,john doe,johndoe@gmail.com,2384756'
- displayValue - Displayed value after selecting an item. i.e. 'John Doe'
- data - Not required. Can bind your original object data value for use when item selected.

### TS Component
```typescript
export class MyAppComponent implements OnInit {
 myForm: FormGroup;
 searchItems: SearchInfo[] = [];
 
 constructor(private fb: FormBuilder) {}
 
 ngOnInit() {
  this.myForm = this.fb.group({
    personID: [null],
    person: [null, [Validators.required]] // Set required on this control if required
  });
 }
}
```
### HTML Component
```html
<bs-material-autocomplete
  [placeholder]="'Autocomplete Placeholder'"
  [form]="myForm"
  [idValueControlName]="'personID'"
  [controlName]="'person'"
  [items]="searchItems">
</bs-material-autocomplete>
```

## API
