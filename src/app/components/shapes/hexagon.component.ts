import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'hexagon-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="hexagon-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><polygon points="8,2 24,2 30,16 24,30 8,30 2,16"/></svg>`
})
export class HexagonComponent {
  @Input() color: string = '#34d399';
}
