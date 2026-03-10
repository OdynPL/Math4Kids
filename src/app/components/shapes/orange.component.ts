import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'orange-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="orange-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="20" r="9"/><ellipse cx="16" cy="20" rx="7" ry="4" fill="#fff" fill-opacity="0.2"/></svg>`
})
export class OrangeComponent {
  @Input() color: string = '#fb923c';
}
