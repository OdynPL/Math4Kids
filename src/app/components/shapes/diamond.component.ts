import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'diamond-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="diamond-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><polygon points="16,2 30,16 16,30 2,16"/></svg>`
})
export class DiamondComponent {
  @Input() color: string = '#60a5fa';
}
