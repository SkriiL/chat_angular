import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-really-modal',
  templateUrl: './really-modal.component.html'
})
export class ReallyModalComponent {
  @Input() buttonClass: string;
  @Input() buttonText: string;
  @Input() text: string;
  @Input() title: string;
  @Input() disabled: boolean;
  @Output() clicked = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  close(modal) {
    this.clicked.emit(false);
    modal.close();
  }

  save(modal) {
    this.clicked.emit(true);
    modal.close();
  }
}
