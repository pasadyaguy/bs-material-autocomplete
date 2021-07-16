# Angular Material Autocomplete

## Description

A reactive form single control angular material autocomplete component.
![bs-material-autocomplete](https://user-images.githubusercontent.com/19986009/126011568-caaa5b74-e46f-46b5-b56c-5fbdc2f1cf97.gif)


## Usage

```
npm install @smithbrianscott/bs-material-autocomplete
```

Add the styles you prefer from the @angular/material npm package to that angular.json file.

```json
"styles": {
  "node_module/@angular/material/prebuilt-themes/indigo-pink.css"
}
```

Also add the styles for the material icons. (You can also import this in your CSS)

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Add `BsMaterialAutocompleteModule` to your `@NgModule` imports.

```typescript
import { NgModule } from "@angular/core";

import { BsMaterialAutocompleteModule } from "@smithbrianscott/bs-material-autocomplete";

@NgModule({
  imports: [BsMaterialAutocompleteModule],
})
export class FeatureModule {}
```

Add the autocomplete control using the selector `<bs-material-autocomplete>`.

You must use the following interface. You import this from the library. `import { BsSearchInfo } from '@smithbrianscott/bs-material-autocomplete/lib/search-info';`

```typescript
export class BsSearchInfo {
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
  searchItems: BsSearchInfo[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      personID: [null],
      person: [null, [Validators.required]], // Set required on this control if required
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
  [items]="searchItems"
>
</bs-material-autocomplete>
```

## API

| Name                                              | Required | Default     | Description                                                              |
| ------------------------------------------------- | -------- | ----------- | ------------------------------------------------------------------------ |
| @Input() placeholder: string;                     | Required | Search      | Placeholder value                                                        |
| @Input() controlName: string;                     | Required | controlName | Form control name value from your form control for the selected object   |
| @Input() idValueControlName: string;              | Optional | id          | Form control name value from your form control for the selected ID value |
| @Input() form: FormGroup;                         | Required |             | The FormGroup instance that contains the controlName                     |
| @Input() items: BsSearchInfo[];                   | Required | []          | The list of items to search using autocomplete                           |
| @Output() onSelected: EventEmitter<BsSearchInfo>; | Optional |             | An output event of the item selected                                     |
