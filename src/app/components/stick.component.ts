import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'stick',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="stick" [ngStyle]="{'background': color}"></div>`,
  styleUrls: ['./stick.component.scss']
})
export class StickComponent {
  @Input() color: string = '#fbbf24';
}
