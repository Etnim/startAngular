import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})

export class BalanceComponent {

  @Input() balance: number = 0;
  @Output() withdraw: EventEmitter<number> = new EventEmitter<number>();
  @Output() deposit: EventEmitter<number> = new EventEmitter<number>();
}
