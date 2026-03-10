import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'cherry-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="cherry-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><circle cx="12" cy="22" r="5"/><circle cx="20" cy="22" r="5"/><path d="M16 10 Q18 16 12 17" stroke="#228B22" stroke-width="1.5" fill="none"/><path d="M16 10 Q14 16 20 17" stroke="#228B22" stroke-width="1.5" fill="none"/><rect x="15" y="7" width="2" height="5" fill="#7c3f00"/></svg>`
})
export class CherryComponent {
  @Input() color: string = '#f87171';
}
