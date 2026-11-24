/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-popover-template-ref',
  templateUrl: './popover-template-ref.component.html',
  styles: [
    `
      :host {
        display: block;
        margin-bottom: 5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PopoverTemplateRefComponent {}
