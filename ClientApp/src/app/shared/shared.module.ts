import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';




@NgModule({
  declarations: [
    AlertModalComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    ModalModule.forRoot()
  ],
  exports: [
   AlertModalComponent,
   CalendarComponent
  ],
  entryComponents: [
    AlertModalComponent
  ]
})
export class SharedModule { }
