import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <span>© 2026 Math4Kids. Wszelkie prawa zastrzeżone.</span>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
