import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wizardsRouting } from './wizards.routing';
import {WizardsComponent} from "./wizards.component";
import {uapiModule} from "../../shared/uapi.module";
import {uapiWizardsModule} from "../../shared/forms/wizards/uapi-wizards.module";
import {BasicWizardWidgetComponent} from "./basic-wizard-widget/basic-wizard-widget.component";
import {FuelUxWizardWidgetComponent} from "./fuel-ux-wizard-widget/fuel-ux-wizard-widget.component";

@NgModule({
  imports: [
    CommonModule,
    wizardsRouting,
    uapiModule,
    uapiWizardsModule
  ],
  declarations: [WizardsComponent, BasicWizardWidgetComponent, FuelUxWizardWidgetComponent]
})
export class WizardsModule { }
