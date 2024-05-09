import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalConfig } from '../../../interfaces/interface';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector // Injetor agora é passado pelo construtor
  ) {
    this.componentFactory =
      this.resolver.resolveComponentFactory(ModalComponent);
  }

  public open(modalConfig: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = modalConfig; // Agora aplicando a configuração corretamente
    console.log(componentRef.instance);

    // Não destrua a referência do componente aqui, pois isso fechará o modal imediatamente
    // componentRef.destroy();
    console.log('open called');
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    console.log('close called');
    this.componentRef.destroy();
  }
}
