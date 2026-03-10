import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'cloud-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="cloud-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="22" rx="12" ry="6"/><ellipse cx="10" cy="18" rx="6" ry="4"/><ellipse cx="22" cy="18" rx="6" ry="4"/></svg>`
})
export class CloudComponent {
  @Input() color: string = '#bae6fd';
}
