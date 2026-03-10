import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'watermelon-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="watermelon-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="24" rx="10" ry="6"/><ellipse cx="16" cy="24" rx="8" ry="4" fill="#fff" fill-opacity="0.2"/><ellipse cx="16" cy="24" rx="6" ry="2" fill="#22c55e" fill-opacity="0.5"/></svg>`
})
export class WatermelonComponent {
  @Input() color: string = '#fb7185';
}
