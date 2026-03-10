import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu.component';
import { GameViewComponent } from './components/game-view.component';

export const routes: Routes = [
	{ path: '', component: MainMenuComponent },
	{ path: 'game', component: GameViewComponent },
	{ path: '**', redirectTo: '' }
];
