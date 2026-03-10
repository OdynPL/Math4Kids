import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
      <div class="logo-title">
        <img src="assets/logo/logo.svg" alt="Math4Kids Logo" class="logo" />
        <span class="title">Math4Kids</span>
      </div>
      <nav class="main-nav">
        <!-- Możesz dodać tu linki nawigacyjne jeśli będą potrzebne -->
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
