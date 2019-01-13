import { Injectable, Inject } from '@angular/core';
import * as stackDriver from 'stackdriver-errors-js';

@Injectable({
  providedIn: 'root'
})
export class Stackdriver {

    errorReporter: stackDriver.StackdriverErrorReporter;
    started: boolean = false;

    constructor(@Inject('stackDriverKey') stackDriverKey: String, @Inject('stackDriverProjectId') stackDriverProjectId: String) {
          window.addEventListener('DOMContentLoaded', () => {
              this.errorReporter = new stackDriver.StackdriverErrorReporter();
              this.errorReporter.start({
                  key: stackDriverKey,
                  projectId: stackDriverProjectId
              });
              this.started = true;
          });
      }

      report(error) {
          if (!this.started) {
               return;
          }
          this.errorReporter.report(error);
      }


}
