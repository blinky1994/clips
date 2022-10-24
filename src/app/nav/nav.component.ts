import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    public model: ModalService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
  }

  openModal(e: Event) {
    e.preventDefault();
    this.model.toggleModal('auth');
  }
}
