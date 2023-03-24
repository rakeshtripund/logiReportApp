import { Component } from '@angular/core';
import { HttpServiceService } from './services/http-service.service';
import { AuthTokenService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='LogiReport'
}
