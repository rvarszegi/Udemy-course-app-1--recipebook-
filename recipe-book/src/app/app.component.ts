import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFfeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFfeature = feature;
  }
}
