/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-popover-placements',
  templateUrl: './popover-placements.component.html',
  styles: [
    `
      :host {
        display: block;
        margin: 4rem 0;
      }

      button {
        margin: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PopoverPlacementsComponent {}
