import { Component, Input } from '@angular/core';

@Component({
  selector: 'ball-shape',
  standalone: true,
  template: `
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="12" [attr.fill]="color" stroke="#fff" stroke-width="2"/>
    </svg>
  `
})
export class BallComponent {
  @Input() color: string = '#60a5fa';
}
