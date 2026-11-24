/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-select-showcase',
  templateUrl: './select-showcase.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SelectShowcaseComponent {
  selectedItem = '2';
}
