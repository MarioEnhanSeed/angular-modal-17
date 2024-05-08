import { Injectable, TemplateRef } from '@angular/core';
import { ModalConfig } from '../../../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  public open(modalConfig: ModalConfig): ModalRef {
    console.log('open called');
    return new ModalRef();
  }
}

export class ModalRef {
  public close(): void {
    console.log('close called');
  }
}
