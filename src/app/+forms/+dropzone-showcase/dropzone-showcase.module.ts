import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dropzoneShowcaseRouting } from './dropzone-showcase.routing';
import {uapiModule} from "../../shared/uapi.module";
import {DropzoneModule} from "../../shared/forms/dropzone/dropzone.module";
import {DropzoneShowcaseComponent} from "./dropzone-showcase.component";

@NgModule({
  imports: [
    CommonModule,
    dropzoneShowcaseRouting,
    uapiModule,
    DropzoneModule
  ],
  declarations: [DropzoneShowcaseComponent]
})
export class DropzoneShowcaseModule { }
