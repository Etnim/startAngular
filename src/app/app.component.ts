import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AccountComponent} from "./account/account.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-account-app';
}
