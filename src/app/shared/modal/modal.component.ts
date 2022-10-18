import { ModalService } from './../../services/modal.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {
  @Input() modalID = '' ;

  constructor(public modal : ModalService) {
   }

  ngOnInit(): void {
  }

  closeModel(): void {
    this.modal.toggleModal(this.modalID);
  }

}
