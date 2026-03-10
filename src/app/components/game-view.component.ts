import { FormsModule } from '@angular/forms';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';

// ...existing imports...
const ICON_THEMES = [
  { name: 'dot', class: 'dot', color: '#60a5fa' },
  { name: 'flower', class: 'flower', color: '#f472b6' },
  { name: 'box', class: 'box', color: '#fbbf24' },
  { name: 'fruit', class: 'fruit', color: '#4ade80' },
  { name: 'star', class: 'star', color: '#facc15' },
  { name: 'heart', class: 'heart', color: '#fb7185' },
  { name: 'cloud', class: 'cloud', color: '#bae6fd' },
  { name: 'leaf', class: 'leaf', color: '#22c55e' }
];

function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

@Component({
  selector: 'game-view',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameViewComponent {
  manualInput: number | null = null;

  onManualSubmit(event: Event) {
    event.preventDefault();
    if (this.manualInput !== null && this.game.userAnswer() === null) {
      this.submitAnswer(Number(this.manualInput));
      this.manualInput = null;
    }
  }
  readonly game = inject(GameService);
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  leftArray(): Array<number> {
    return Array.from({ length: this.game.left() }, (_, i) => i);
  }
  rightArray(): Array<number> {
    return Array.from({ length: this.game.right() }, (_, i) => i);
  }
  totalArray(): Array<number> {
    return Array.from({ length: this.game.left() + this.game.right() }, (_, i) => i);
  }

  get iconTheme() {
    // Jeden motyw na rundę
    const idx = Math.floor(seededRandom(this.game.round()) * ICON_THEMES.length);
    return ICON_THEMES[idx];
  }

  iconClass(): string {
    return this.iconTheme.class;
  }

  iconColor(): string {
    return this.iconTheme.color;
  }

  constructor() {
    this.route.queryParams.subscribe(params => {
      if (params['mode']) {
        this.game.setMode(params['mode']);
      }
      this.game.startRound();
    });
  }

  submitAnswer(ans: number) {
    this.game.submitAnswer(ans);
  }

  nextRound() {
    this.game.nextRound();
  }

  restart() {
    this.game.restart();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
