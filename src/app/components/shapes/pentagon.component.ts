import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'pentagon-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="pentagon-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><polygon points="16,2 30,12 24,30 8,30 2,12"/></svg>`
})
export class PentagonComponent {
  @Input() color: string = '#a78bfa';
}
