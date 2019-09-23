import { NgModule } from '@angular/core';
import {
  DocumentsServiceProxy,
  LanguagesServiceProxy,
  StructureElementsServiceProxy,
  StructuresServiceProxy
} from './event-service-proxy';

@NgModule({
  providers: [
    DocumentsServiceProxy,
    LanguagesServiceProxy,
    StructureElementsServiceProxy,
    StructuresServiceProxy
  ]
})
export class ServiceProxyModule {}
