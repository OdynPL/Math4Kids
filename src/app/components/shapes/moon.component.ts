import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'moon-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="moon-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><path d="M24 16A12 12 0 0 1 8 4a12 12 0 1 0 16 16A12 12 0 0 1 24 16z"/></svg>`
})
export class MoonComponent {
  @Input() color: string = '#facc15';
}
