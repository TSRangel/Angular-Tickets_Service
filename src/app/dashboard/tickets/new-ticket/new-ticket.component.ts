import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>
  add = output<{title: string, ticketText: string}>();

  onSubmit(title: string, text: string) {
    this.add.emit({title: title, ticketText: text})
    this.form?.nativeElement.reset();
  }
}
