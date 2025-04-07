import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, CheckboxComponent } from '@cocokits/angular-components';

@Component({
  imports: [RouterModule , ButtonComponent , CheckboxComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
