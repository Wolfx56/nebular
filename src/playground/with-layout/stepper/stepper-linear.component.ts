import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-stepper-linear',
  styleUrls: ['stepper-playground.component.scss'],
  templateUrl: './stepper-linear.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class StepperLinearComponent {
  linearMode = true;

  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }
}
