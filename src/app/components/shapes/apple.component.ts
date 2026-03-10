import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'apple-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="apple-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="20" rx="10" ry="8"/><ellipse cx="12" cy="12" rx="3" ry="2"/><rect x="15" y="7" width="2" height="5" fill="#7c3f00"/><path d="M16 7 Q18 5 20 7" stroke="#228B22" stroke-width="1.5" fill="none"/></svg>`
})
export class AppleComponent {
  @Input() color: string = '#fb7185';
}
