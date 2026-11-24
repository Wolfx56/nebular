/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <nb-card>
      <nb-card-body class="example-items-col">
        <input type="text" nbInput fullWidth fieldSize="small" placeholder="Input" />
        <textarea nbInput fullWidth placeholder="Textarea"></textarea>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class InputTypesComponent {}
