import { Injectable, signal, effect, Signal } from '@angular/core';

export interface GameState {
  mode: 'add' | 'sub' | 'mix';
  round: number;
  totalRounds: number;
  score: number;
  results: any[];
  left: number;
  right: number;
  op: '+' | '-';
  userAnswer: number | null;
  feedback: string;
  showSummary: boolean;
}

const STORAGE_KEY = 'math4kids-game-state';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _state = signal<GameState | null>(null);

  get state(): Signal<GameState | null> {
    return this._state;
  }

  load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        this._state.set(JSON.parse(raw));
      } catch {
        this._state.set(null);
      }
    }
  }

  save(state: GameState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    this._state.set(state);
  }

  clear() {
    localStorage.removeItem(STORAGE_KEY);
    this._state.set(null);
  }
}
