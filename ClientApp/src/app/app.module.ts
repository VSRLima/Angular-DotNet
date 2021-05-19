import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewsModule } from './views/views.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ViewsModule,
    CalendarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
