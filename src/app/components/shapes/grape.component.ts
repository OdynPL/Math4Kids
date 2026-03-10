import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'grape-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="grape-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="24" r="5"/><circle cx="11" cy="19" r="4"/><circle cx="21" cy="19" r="4"/><circle cx="16" cy="14" r="3"/><rect x="15" y="7" width="2" height="5" fill="#7c3f00"/></svg>`
})
export class GrapeComponent {
  @Input() color: string = '#a78bfa';
}
