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
You must use the following interface
```typescript
export class SearchInfo {
 id: number;
 searchKeywords: string;
 displayValue: string;
}
```
- id - Primary key value from your dataset.
- searchKeywords - String of searchable value for the autocomplete search. i.e. 'john,doe,john doe,johndoe@gmail.com,2384756'
- displayValue - Displayed value after selecting an item. i.e. 'John Doe'
### TS Component
```typescript

```
### HTML Component
```html

```

## API
