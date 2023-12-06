import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = 'click';
  @Input() colour: string = 'red';
  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit()
  }
}
