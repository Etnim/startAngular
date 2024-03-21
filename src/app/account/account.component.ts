import { Component } from '@angular/core';


interface Account{
  name: string;
  balance: number;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})

export class AccountComponent {

}
