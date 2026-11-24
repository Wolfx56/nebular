import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-progress-bar-interactive',
  templateUrl: './progress-bar-interactive.component.html',
  styles: [
    `
      .container {
        display: flex;
        align-items: center;
      }

      nb-progress-bar {
        flex: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProgressBarInteractiveComponent {
  value = 25;

  setValue(newValue) {
    this.value = Math.min(Math.max(newValue, 0), 100);
  }

  get status() {
    if (this.value <= 25) {
      return 'danger';
    } else if (this.value <= 50) {
      return 'warning';
    } else if (this.value <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }
}
