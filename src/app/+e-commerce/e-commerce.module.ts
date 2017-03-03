import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {uapiLayoutModule} from "../shared/layout/layout.module";
import {uapiWidgetsModule} from "../shared/widgets/uapi-widgets.module";
import {StatsModule} from "../shared/stats/stats.module";
import {routing} from "./e-commerce.routing";
import {uapiDatatableModule} from "../shared/ui/datatable/uapi-datatable.module";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {CarouselModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,

    routing,

    uapiLayoutModule,
    uapiWidgetsModule,
    StatsModule,
    uapiDatatableModule,
    CarouselModule,

  ],
  declarations: [
    ShoppingCartComponent,
    OrdersComponent,
    ProductsViewComponent, ProductDetailsComponent
  ]
})
export class ECommerceModule { }
