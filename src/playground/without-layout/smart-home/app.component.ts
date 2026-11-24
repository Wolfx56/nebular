/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-app',
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-body>
            <a nbButton routerLink="auth/login">Login</a>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {}
