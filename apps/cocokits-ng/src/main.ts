import { bootstrapApplication } from '@angular/platform-browser';
import { provideCocokits } from '@cocokits/angular-components';
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideCocokits(framesXThemeConfig),
  ]
})