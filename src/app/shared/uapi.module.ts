import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {
  ModalModule, ButtonsModule, TooltipModule, DropdownModule, ProgressbarModule, AlertModule, TabsModule,
  AccordionModule, CarouselModule
} from 'ng2-bootstrap'

import {PopoverModule} from "ng2-popover";

import {uapiLayoutModule} from './layout'

import {I18nModule} from "./i18n/i18n.module";
import {UserModule} from "./user/user.module";
import {VoiceControlModule} from "./voice-control/voice-control.module";

import {uapiWidgetsModule} from "./widgets/uapi-widgets.module";

import {UtilsModule} from "./utils/utils.module";
// import {ChatModule} from "./chat/chat.module";
import {StatsModule} from "./stats/stats.module";
import {InlineGraphsModule} from "./graphs/inline/inline-graphs.module";
import {uapiFormsLiteModule} from "./forms/uapi-forms-lite.module";
import {SmartProgressbarModule} from "./ui/smart-progressbar/smart-progressbar.module";


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, RouterModule,



  ],
  declarations: [

  ],
  exports: [
    CommonModule, FormsModule, HttpModule, RouterModule,

    ModalModule,
    ButtonsModule,

    AlertModule,
    TabsModule,
    TooltipModule,
    DropdownModule,
    ProgressbarModule,


    PopoverModule,

    uapiLayoutModule,

    I18nModule,

    UtilsModule,

    uapiFormsLiteModule,

    SmartProgressbarModule,

    InlineGraphsModule,

    uapiWidgetsModule,

    // ChatModule,

    StatsModule,

    VoiceControlModule,

  ]
})
export class uapiModule {}
