import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
<button
  mat-flat-button
  (click)="onClick.emit($event)"
  [color]="color"
  [disabled]="disabled"
  [type]="type"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  disabled?: boolean;

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   *
   */
  @Input()
  type: 'button' | 'submit' = 'button';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();
}
