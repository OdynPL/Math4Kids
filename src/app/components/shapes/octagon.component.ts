import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'octagon-shape',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="octagon-shape" [attr.fill]="color" width="32" height="32" viewBox="0 0 32 32"><polygon points="10,2 22,2 30,10 30,22 22,30 10,30 2,22 2,10"/></svg>`
})
export class OctagonComponent {
  @Input() color: string = '#f472b6';
}
