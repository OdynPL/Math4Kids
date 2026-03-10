import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'triangle-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="triangle-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><polygon points="16,4 28,28 4,28"/></svg>`
})
export class TriangleComponent {
  @Input() color: string = '#fbbf24';
}
