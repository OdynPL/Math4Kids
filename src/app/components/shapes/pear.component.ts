import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'pear-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="pear-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="24" rx="7" ry="8"/><ellipse cx="16" cy="16" rx="4" ry="5"/><rect x="15" y="7" width="2" height="5" fill="#7c3f00"/></svg>`
})
export class PearComponent {
  @Input() color: string = '#a3e635';
}
