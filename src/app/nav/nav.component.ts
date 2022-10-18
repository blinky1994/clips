import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public model: ModalService) { }

  ngOnInit(): void {
  }

  openModal(e: Event) {
    e.preventDefault();
    this.model.toggleModal('auth');
  }

}
