/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DynamicToAddComponent } from './components/dynamic.components';

@Component({
  selector: 'nb-popover-custom-component',
  templateUrl: './popover-custom-component.component.html',
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 3rem;
      }

      ::ng-deep nb-popover {
        padding: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PopoverCustomComponentComponent {
  customComponent = DynamicToAddComponent;
}
