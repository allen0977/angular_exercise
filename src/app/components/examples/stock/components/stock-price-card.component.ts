import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockMarketState } from './../models/stock.model';

@Component({
  selector: 'app-stock-price-card',
  templateUrl: './stock-price-card.component.html',
  styleUrls: ['./stock-price-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockPriceCardComponent implements OnInit {
  currency = 'USD';
  @Input()
  stockData$: Observable<StockMarketState>;

  ngOnInit() {}
}
