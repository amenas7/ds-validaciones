import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { SwitchComponent } from './components/switch/switch.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { IconComponent } from './components/icon/icon.component';
import { LegendComponent } from './components/legend/legend.component';
import { TagComponent } from './components/tag/tag.component';
import { TableServerComponent } from './components/table-server/table-server.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';

const routes: Routes = [
  { path: '', redirectTo: '/boton', pathMatch: 'full' },
  { path: 'boton', component: BotonComponent },
  { path: 'input', component: InputComponent },
  { path: 'textarea', component: TextareaComponent },
  { path: 'select', component: SelectComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'icon', component: IconComponent },
  { path: 'legend', component: LegendComponent },
  { path: 'tag', component: TagComponent },
  { path: 'table-server', component: TableServerComponent },
  // { path: 'table-client', component: TableClientComponent },
  { path: 'message-box', component: MessageBoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
