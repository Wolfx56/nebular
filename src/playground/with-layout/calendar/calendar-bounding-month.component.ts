/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-calendar-bounding-month',
  template: `
    <nb-card>
      <nb-card-header>
        <h1 class="h5">Selected date: {{ date | date }}</h1>
      </nb-card-header>
      <nb-card-body>
        <nb-calendar [(date)]="date" [boundingMonth]="false"></nb-calendar>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CalendarBoundingMonthComponent {
  date = new Date();
}
