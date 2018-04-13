import { Component } from '@angular/core';
import { FlyWorkerService } from "./services/fly-worker.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private flyWorkerService : FlyWorkerService
  ) {

  }
  title = 'app';

  cpuIntensiveOperation(count) : any {
    let val = 0;
    for(let i =0; i < count; i++) {
     val =  i++
    }
    return val;
  }
  
  loggerFunction(count) {
    this.flyWorkerService.createWorker(this.cpuIntensiveOperation, [count]);
    this.flyWorkerService.postMessageToWorker("Start Worker");
    this.flyWorkerService.worker.addEventListener("message",(e) => {
      console.log(e.data);
    });
    
  }

}
