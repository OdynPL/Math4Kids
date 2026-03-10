import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'heart-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="heart-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><path d="M16 29s-13-8.35-13-17A7 7 0 0 1 16 7a7 7 0 0 1 13 5c0 8.65-13 17-13 17z"/></svg>`
})
export class HeartComponent {
  @Input() color: string = '#f87171';
}
