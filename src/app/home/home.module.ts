import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  DropDownListAllModule,
  MultiSelectAllModule,
  DropDownListModule,
  MultiSelectModule
} from '@syncfusion/ej2-angular-dropdowns';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import {
  RadioButtonModule,
  CheckBoxModule,
  ButtonModule,
  SwitchModule
} from '@syncfusion/ej2-angular-buttons';
import {
  DiagramAllModule,
  SymbolPaletteAllModule,
  OverviewAllModule
} from '@syncfusion/ej2-angular-diagrams';
import {
  ColorPickerModule,
  UploaderModule,
  TextBoxModule,
  NumericTextBoxModule
} from '@syncfusion/ej2-angular-inputs';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    TreeGridAllModule,
    DropDownListAllModule,
    MultiSelectAllModule,
    DropDownListModule,
    BrowserModule,
    ToastModule,
    RadioButtonModule,
    CheckBoxModule,
    ButtonModule,
    SwitchModule,
    DiagramAllModule,
    SymbolPaletteAllModule,
    OverviewAllModule,
    ButtonModule,
    ColorPickerModule,
    CheckBoxModule,
    ToolbarModule,
    DropDownButtonModule,
    UploaderModule,
    DropDownListAllModule,
    DialogAllModule,
    TextBoxModule,
    RadioButtonModule,
    MultiSelectModule,
    NumericTextBoxModule,
    BrowserModule,




    NumericTextBoxModule, DropDownButtonModule, 
    ToolbarModule, DropDownListModule, ButtonModule, RadioButtonModule, UploaderModule,
    CheckBoxModule, MultiSelectModule, ColorPickerModule, BrowserModule


  ],
  declarations: [HomeComponent],
  providers: [QuoteService]
})
export class HomeModule {}
