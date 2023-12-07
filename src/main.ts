import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { TasksComponent } from './app/components/tasks/tasks.component';

const appRoutes: Routes = [{ path: '', component: TasksComponent }];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
