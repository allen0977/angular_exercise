import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { ExamplesRoutingModule } from './examples-routing.module';
import { examplesReducer } from './examples.state';
import { effects } from './stock/effects';
import { StockComponentResolver } from './stock/guards/stock-data.resolver';
import { StockService } from './stock/services/stock.service';

@NgModule({
  imports: [
    ExamplesRoutingModule,
    SharedModule,
    StoreModule.forFeature('examples', examplesReducer),
    EffectsModule.forFeature(effects)
  ],
  declarations: [ExamplesRoutingModule.components],
  providers: [StockService, StockComponentResolver]
})
export class ExamplesModule {}
