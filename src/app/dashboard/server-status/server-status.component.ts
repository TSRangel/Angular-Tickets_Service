import { Component, DestroyRef, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online'  | 'offline' | 'unknown'>('offline');
  private destroyRef?: DestroyRef;


  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus.set('offline');
      } else if (random < 0.9) {
        this.currentStatus.set('online');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000)

    this.destroyRef?.onDestroy(() => clearInterval(interval));
  }
}
