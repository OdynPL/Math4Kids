import { Injectable, signal, computed, effect } from '@angular/core';
import { StateService, GameState } from './state.service';

export type GameMode = 'add' | 'sub' | 'mix';
export interface RoundResult {
  left: number;
  right: number;
  op: '+' | '-';
  answer: number;
  user: number;
  correct: boolean;
}

@Injectable({ providedIn: 'root' })
export class GameService {
  readonly mode = signal<GameMode>('add');
  readonly round = signal(1);
  readonly totalRounds = 10;
  readonly score = signal(0);
  readonly results = signal<RoundResult[]>([]);
  readonly left = signal(0);
  readonly right = signal(0);
  readonly op = signal<'+' | '-'>('+');
  readonly userAnswer = signal<number|null>(null);
  readonly feedback = signal('');
  readonly showSummary = signal(false);

  readonly summary = computed(() => this.results());

  constructor(private stateService: StateService) {
    // Load state from localStorage if available
    this.stateService.load();
    const saved = this.stateService.state();
    if (saved) {
      this.restoreState(saved);
    }
    // Auto-save on any change
    effect(() => {
      this.stateService.save(this.getState());
    });
  }

  getState(): GameState {
    return {
      mode: this.mode(),
      round: this.round(),
      totalRounds: this.totalRounds,
      score: this.score(),
      results: this.results(),
      left: this.left(),
      right: this.right(),
      op: this.op(),
      userAnswer: this.userAnswer(),
      feedback: this.feedback(),
      showSummary: this.showSummary()
    };
  }

  restoreState(state: GameState) {
    this.mode.set(state.mode);
    this.round.set(state.round);
    // totalRounds is constant
    this.score.set(state.score);
    this.results.set(state.results);
    this.left.set(state.left);
    this.right.set(state.right);
    this.op.set(state.op);
    this.userAnswer.set(state.userAnswer);
    this.feedback.set(state.feedback);
    this.showSummary.set(state.showSummary);
  }

  setMode(mode: GameMode) {
    this.mode.set(mode);
  }

  startRound() {
    this.userAnswer.set(null);
    this.feedback.set('');
    if (this.round() > this.totalRounds) {
      this.showSummary.set(true);
      return;
    }
    const op = this.mode() === 'mix' ? (Math.random() > 0.5 ? '+' : '-') : (this.mode() === 'add' ? '+' : '-');
    let left = Math.floor(Math.random() * 6) + 1;
    let right = Math.floor(Math.random() * 6) + 1;
    if (op === '-' && left < right) [left, right] = [right, left];
    this.left.set(left);
    this.right.set(right);
    this.op.set(op);
  }

  submitAnswer(ans: number) {
    if (this.userAnswer() !== null) return;
    this.userAnswer.set(ans);
    const correct = this.op() === '+' ? this.left() + this.right() : this.left() - this.right();
    const isCorrect = ans === correct;
    this.results.update(r => [...r, {
      left: this.left(),
      right: this.right(),
      op: this.op(),
      answer: correct,
      user: ans,
      correct: isCorrect
    }]);
    if (isCorrect) {
      this.score.update(s => s + 1);
      this.feedback.set('Brawo!');
    } else {
      this.feedback.set('Spróbuj następnym razem!');
    }
  }

  nextRound() {
    this.round.update(r => r + 1);
    this.startRound();
  }

  restart() {
    this.round.set(1);
    this.score.set(0);
    this.results.set([]);
    this.showSummary.set(false);
    this.startRound();
  }
}
