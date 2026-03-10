import { FormsModule } from '@angular/forms';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { StickComponent } from './stick.component';

// Ścieżki do dźwięków
const CORRECT_SOUND = 'assets/sounds/correct.mp3';
const WRONG_SOUND = 'assets/sounds/wrong.mp3';


// Cukierkowa paleta kolorów zapałek
const STICK_COLORS = [
  '#fbbf24', // żółty
  '#60a5fa', // niebieski
  '#f472b6', // różowy
  '#34d399', // zielony
  '#f87171', // czerwony
  '#a78bfa', // fioletowy
  '#facc15', // pastelowy żółty
  '#38bdf8', // jasny niebieski
  '#fb7185', // cukierkowy róż
  '#4ade80', // miętowy
];

function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

@Component({
  selector: 'game-view',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, StickComponent],
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameViewComponent {
  manualInput: number | null = null;

  soundOn = true;
  private correctAudio = new Audio(CORRECT_SOUND);
  private wrongAudio = new Audio(WRONG_SOUND);

  private SOUND_KEY = 'math4kids-sound-on';

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



  // Jeden kolor zapałek na rundę
  get stickColor(): string {
    // Kolor deterministyczny na podstawie numeru rundy
    const seed = this.game.round() * 9999 + 42;
    const colorIdx = Math.floor(seededRandom(seed) * STICK_COLORS.length);
    return STICK_COLORS[colorIdx];
  }

  leftArray(): Array<{ color: string, idx: number }> {
    return Array.from({ length: this.game.left() }, (_, idx) => ({ color: this.stickColor, idx }));
  }
  rightArray(): Array<{ color: string, idx: number }> {
    return Array.from({ length: this.game.right() }, (_, idx) => ({ color: this.stickColor, idx }));
  }
  totalArray(): Array<{ color: string, idx: number }> {
    return Array.from({ length: this.game.left() + this.game.right() }, (_, idx) => ({ color: this.stickColor, idx }));
  }

  constructor() {
    // Przywróć ustawienie dźwięku z localStorage
    const stored = localStorage.getItem(this.SOUND_KEY);
    if (stored !== null) {
      this.soundOn = stored === 'true';
    }
    this.route.queryParams.subscribe(params => {
      if (params['mode']) {
        this.game.setMode(params['mode']);
      }
      this.game.startRound();
    });
  }

  submitAnswer(ans: number) {
    const prevFeedback = this.game.feedback();
    this.game.submitAnswer(ans);
    // Zagraj dźwięk po ustawieniu feedback
    setTimeout(() => {
      if (!this.soundOn) return;
      const feedback = this.game.feedback();
      if (feedback === 'Brawo!') {
        this.correctAudio.currentTime = 0;
        this.correctAudio.play();
      } else if (feedback) {
        this.wrongAudio.currentTime = 0;
        this.wrongAudio.play();
      }
    }, 0);
  }

  toggleSound() {
    this.soundOn = !this.soundOn;
    localStorage.setItem(this.SOUND_KEY, String(this.soundOn));
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
