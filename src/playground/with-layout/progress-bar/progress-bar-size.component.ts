import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-progress-bar-size',
  templateUrl: './progress-bar-size.component.html',
  styles: [
    `
      nb-progress-bar ~ nb-progress-bar {
        margin-top: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProgressBarSizeComponent {}
