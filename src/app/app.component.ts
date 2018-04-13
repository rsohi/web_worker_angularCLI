import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cpuIntensiveOperation(count) {
    let val = 0;
    for(let i =0; i < count; i++) {
     val =  i++
    }
    console.log(val);
  }
}
