import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@nx-angular-standalone/shared-ui';

@Component({
  selector: 'lib-orders',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
