import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iconsRouting } from './icons.routing';
import {FontAwesomeComponent} from "./+font-awesome/font-awesome.component";
import {FlagsComponent} from "./+flags/flags.component";
import {GlyphiconsComponent} from "./+glyphicons/glyphicons.component";
import {uapiModule} from "../../shared/uapi.module";

@NgModule({
  imports: [
    CommonModule,
    iconsRouting,
    uapiModule
  ],
  declarations: [FlagsComponent, FontAwesomeComponent, GlyphiconsComponent]
})
export class IconsModule { }
