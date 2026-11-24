/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-layout-header-test',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <a class="navbar-brand" href="#">ngx-admin</a>
      </nb-layout-header>
    </nb-layout>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LayoutHeaderTestComponent {}
