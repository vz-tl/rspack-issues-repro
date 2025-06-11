import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rsapp';
  mode = environment.production ? 'production' : 'development';
}
