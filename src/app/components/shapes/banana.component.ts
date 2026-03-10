import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'banana-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="banana-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><path d="M8 24 Q16 30 24 16 Q20 10 8 24" fill="#facc15" stroke="#b45309" stroke-width="1.5"/></svg>`
})
export class BananaComponent {
  @Input() color: string = '#facc15';
}
