/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'npg-select-autocomplete-showcase',
  templateUrl: './select-autocomplete-showcase.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SelectAutocompleteShowcaseComponent {
  withAutocomplete = true;
  multiple = false;
  selectedItem = '2';
  filterValue = '';

  isEqual(a?, b?, c?): boolean {
    if (!a) {
      return true;
    }

    a = a?.toString().toLowerCase() ?? '';
    a = new RegExp(
      a
        .split('')
        .map((letter) => letter + '.*')
        .join(''),
    );
    b = b?.toString().toLowerCase() ?? '';
    c = c?.toString().toLowerCase() ?? '';

    if (b && a.test(b)) {
      return true;
    }

    if (c && a.test(c)) {
      return true;
    }

    return false;
  }
}
