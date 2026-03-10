import { Component, Input } from '@angular/core';

@Component({
  selector: 'square-shape',
  standalone: true,
  template: `
    <svg width="32" height="32" viewBox="0 0 32 32">
      <rect x="6" y="6" width="20" height="20" rx="4" [attr.fill]="color" stroke="#fff" stroke-width="2"/>
    </svg>
  `
})
export class SquareComponent {
  @Input() color: string = '#34d399';
}
