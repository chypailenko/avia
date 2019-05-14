import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TicketsComponent} from './containers/tickets/tickets.component';
import {AddTicketComponent} from './containers/add-ticket/add-ticket.component';
import {SearchComponent} from './containers/search/search.component';
import {EditTicketComponent} from './containers/edit-ticket/edit-ticket.component';

const routes: Routes = [
  { path: '', component: TicketsComponent},
  { path: 'tickets/add', component: AddTicketComponent },
  { path: 'search', component: SearchComponent },
  { path: 'edit/:id', component: EditTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
