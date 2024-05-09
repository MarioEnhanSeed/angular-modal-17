import { Component, HostBinding } from '@angular/core';
import { ModalConfig } from '../../../interfaces/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',

})
export class ModalComponent {
  public config!: ModalConfig;
}
