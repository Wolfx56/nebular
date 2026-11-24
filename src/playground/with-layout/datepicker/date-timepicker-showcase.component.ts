/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-date-timepicker-showcase',
  template: `
    <nb-card size="large">
      <nb-card-body>
        <input nbInput placeholder="Pick Date" [nbDatepicker]="dateTimePicker" />
        <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>
      </nb-card-body>
    </nb-card>
  `,
  styleUrls: ['./datepicker-example.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DateTimepickerShowcaseComponent {}
