import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lemon-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="lemon-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="20" rx="9" ry="6"/><ellipse cx="16" cy="20" rx="7" ry="4" fill="#fff" fill-opacity="0.2"/></svg>`
})
export class LemonComponent {
  @Input() color: string = '#fde047';
}
