import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngd-example-404',
  template: ` Example not found. `,
  styleUrls: ['./example-404.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class NgdExample404Component {
  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('default');
  }
}
