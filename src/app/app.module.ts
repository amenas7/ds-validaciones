import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Sanna UI
import { SannaUiModule } from 'sanna-ui';
import { MenuComponent } from './shared';




import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { SwitchComponent } from './components/switch/switch.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { IconComponent } from './components/icon/icon.component';
import { LegendComponent } from './components/legend/legend.component';
import { TagComponent } from './components/tag/tag.component';
import { TableServerComponent } from './components/table-server/table-server.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputComponent,
    BotonComponent,
    SelectComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    CalendarComponent,
    IconComponent,
    LegendComponent,
    TagComponent,
    TableServerComponent,
    MessageBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SannaUiModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
