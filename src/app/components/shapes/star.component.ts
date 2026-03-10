import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'star-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="star-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><polygon points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12"/></svg>`
})
export class StarComponent {
  @Input() color: string = '#fbbf24';
}
