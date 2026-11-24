import { Component, ViewContainerRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nb-windows-container',
  template: `<ng-container #viewContainerRef></ng-container>`,
  styleUrls: ['./windows-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class NbWindowsContainerComponent {
  // TODO static must be false as of Angular 9.0.0, issues/1514
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
}
