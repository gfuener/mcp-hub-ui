import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Server } from '../../models/server';

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-card.component.html',
  styleUrl: './server-card.component.scss'
})
export class ServerCardComponent {
  @Input() server!: Server;
}
