import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <nb-card>
      <nb-card-body>
        <nb-checkbox indeterminate #checkbox>Indeterminate</nb-checkbox>

        <button *ngIf="!checkbox.indeterminate" nbButton size="small" (click)="checkbox.indeterminate = true">
          Set indeterminate
        </button>
      </nb-card-body>
    </nb-card>
  `,
  styles: [
    `
      button {
        display: block;
        margin-top: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CheckboxIndeterminateComponent {}
