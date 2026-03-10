import { Component, Input } from '@angular/core';

@Component({
  selector: 'candy-shape',
  standalone: true,
  template: `
    <svg width="32" height="32" viewBox="0 0 32 32">
      <ellipse cx="16" cy="16" rx="10" ry="7" [attr.fill]="color" stroke="#fff" stroke-width="2"/>
      <rect x="2" y="13" width="4" height="6" rx="2" fill="#fbbf24"/>
      <rect x="26" y="13" width="4" height="6" rx="2" fill="#fbbf24"/>
    </svg>
  `
})
export class CandyComponent {
  @Input() color: string = '#f472b6';
}
