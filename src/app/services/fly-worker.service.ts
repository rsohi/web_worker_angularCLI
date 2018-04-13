import { Injectable } from "@angular/core";

/**
* Injectable Sevice Class can be used to create web worker files on the fly.
*/
@Injectable()
export class FlyWorkerService {
public worker : Worker;

    /**
     * Below method is used to create a  worker file for any CPU intesive function
     * @param body function to be used
     * @param param parameters to be passed to the function as Array
     */
    createWorker(body : Function, param : Array<any>) {
       let params = JSON.stringify(param).slice(1, -1);
       let blob = new Blob([
            `self.addEventListener("message", (e) => {
                if(e.data === "Start Worker") {
                    let returnVal = (${body})(${params});

                    self.postMessage(returnVal);
                }
                if(e.data === "Stop Worker") {
                    self.close();
                }  
             });`]);

       let blobURL = window.URL.createObjectURL(blob);

       this.worker = new Worker(blobURL);
    }

    /**
     * Method to post messages to the worker thread from the UI code
     * @param msg could be "Start Worker" || "Stop Worker" 
     */
    postMessageToWorker(msg) {
       this.worker.postMessage(msg);
    }

    /**
     * Method used to terminate the worker thread form UI Code (aka window) 
     */
    terminateWorker() {
        this.worker.terminate();
    }
}
