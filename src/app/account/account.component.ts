import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BalanceComponent} from "../balance/balance.component";
import {Account} from "../interfaces";


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BalanceComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})

export class AccountComponent {

 initialAccount: Account = {
   name: 'Initial',
   balance: 100
 };
}
