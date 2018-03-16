import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      if(user) {
        let getUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(getUrl);
      } else {
        router.navigateByUrl('/login');
      }
    })
  }
}
