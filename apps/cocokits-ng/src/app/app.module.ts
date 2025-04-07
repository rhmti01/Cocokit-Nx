import { NgModule } from '@angular/core';
import { ThemeConfigToken } from '@cocokits/angular-components';
  import { framesXThemeConfig } from '@cocokits/theme-frames-x';

  @NgModule({
    imports: [],
    declarations: [],
    providers: [
      {
        provide: ThemeConfigToken,
        useValue: framesXThemeConfig
      }, 
    ]
  })
  export class AppModule {}