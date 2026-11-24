import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <nb-card size="small">
      <nb-card-body>
        <nb-form-field>
          <nb-icon nbPrefix icon="at-outline" pack="eva"></nb-icon>
          <input type="text" nbInput />
        </nb-form-field>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FormFieldInputComponent {}
