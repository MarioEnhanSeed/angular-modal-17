import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ModalRef,
  ModalService,
} from './shared/components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>;
  @ViewChild('template1') public template1?: TemplateRef<any>;
  @ViewChild('template2') public template2?: TemplateRef<any>;

  public selectedTemplate?: TemplateRef<any>;

  title = 'angular-modal-17';
  firstName = 'Mario Henrique';
  surname = 'Cezar';
  age = 40;

  public modalRef!: ModalRef;

  constructor(
    private modalService: ModalService,
    private cd: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.selectedTemplate = this.template1;
    this.cd.detectChanges();
  }

  public show() {
    this.selectedTemplate = this.template2;
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
