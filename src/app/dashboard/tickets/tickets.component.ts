import { Component } from '@angular/core';
import { v4 } from 'uuid';

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './ticket/ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string, ticketText: string}) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.ticketText,
      id: v4().toString(),
      status: 'open'
    }
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if(ticket.id === id) {
        return {...ticket, status: 'closed'}
      }
      return ticket;
    });
  }
}
