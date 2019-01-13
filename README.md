# ng-stackdriver
Angular service wrapper for https://github.com/GoogleCloudPlatform/stackdriver-errors-js

This was tested in Angular 6.

## Usage
Include the following in the app.module.ts providers: 
```javascript
  Stackdriver,
  { provide: 'stackDriverKey', useValue: '<Your key>' },
  { provide: 'stackDriverProjectId', useValue: '<Your project Id>' }
```
Example app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Stackdriver } from 'ng-stackdriver';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        Stackdriver,
        { provide: 'stackDriverKey', useValue: environment.stackdriver.key},
        { provide: 'stackDriverProjectId', useValue: environment.stackdriver.projectId }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Then inject stackdriver in the constructor of the module where it should be used

```javascript
constructor(private stackdriver: Stackdriver)
```

Use ```stackdriver.report('<your error')``` to report error to stackdriver.
Error can be an exception or a string.
