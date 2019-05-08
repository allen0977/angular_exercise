import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockSearchComponent implements OnInit {
  @Output()
  emitstockSymbol = new EventEmitter<string>();
  @Input()
  defaultStockSymbol: string;

  constructor() {}

  ngOnInit() {}

  onStockSymbolChange(stockSymbol: string) {
    this.emitstockSymbol.emit(stockSymbol);
  }
}
