
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {
  mode = signal<'add' | 'sub' | 'mul' | 'div' | 'mix' | null>(null);

  constructor(private router: Router) {}

  startGame() {
    if (this.mode()) {
      this.router.navigate(['/game'], { queryParams: { mode: this.mode() } });
    }
  }

  setMode(mode: 'add' | 'sub' | 'mul' | 'div' | 'mix') {
    this.mode.set(mode);
  }
}
