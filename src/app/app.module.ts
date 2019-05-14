import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTicketComponent } from './containers/add-ticket/add-ticket.component';
import { SearchComponent } from './containers/search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { EditTicketComponent } from './containers/edit-ticket/edit-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    HeaderComponent,
    AddTicketComponent,
    SearchComponent,
    EditTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
