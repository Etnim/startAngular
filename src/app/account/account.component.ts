import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BalanceComponent} from "../balance/balance.component";


interface Account{
  name: string;
  balance: number;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BalanceComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})

export class AccountComponent {
  @Input() balance: number = 0;
  @Output() withdraw: EventEmitter<number> = new EventEmitter<number>();
  @Output() deposit: EventEmitter<number> = new EventEmitter<number>();

  initialAccount: Account = {
    name: 'Savings Account',
    balance: 100
  };
}
