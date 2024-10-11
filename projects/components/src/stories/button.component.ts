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
  [ngClass]="[class, 'mat-elevation-z0']"
  (click)="onClick.emit($event)"
  [color]="color"
  [disabled]="disabled"
  [type]="type"
>
<mat-icon *ngIf="icon && iconPosition === 'prefix'">{{ icon }}</mat-icon>
<span>{{ label }}</span>
<mat-icon *ngIf="icon && iconPosition === 'suffix'">{{ icon }}</mat-icon>
</button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  @Input()
  class?: string = '';

  /** Is this the principal call to action on the page? */
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  disabled: boolean = false;

  @Input()
  icon?: string;

  @Input()
  iconPosition: 'prefix' | 'suffix' = 'prefix';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  type: 'button' | 'submit' = 'button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();
}
