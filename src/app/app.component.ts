import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Trading App';
  //myuser = 'Hany Shafey';


  loginSuccessful(param) {
    console.log('He loginned Successfully',param);
  }
}
