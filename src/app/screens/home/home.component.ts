import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Message } from 'src/app/models/message.model';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'site-frontend';
  messages: Message[] = [];
  open: boolean = true;
  message: string;

  constructor(private messageService: MessageService, private authService: AuthService) { }
  ngOnInit() {
    this.authService.autoLogin();
    this.findAll();
  }

  calcDiffFromActualDate(date: Date) {
    return moment(date).fromNow();
  }

  send() {
    this.messageService.save(this.message).subscribe(id => this.findAll());

  }

  findAll() {
    this.messageService.findAll().subscribe(x => this.messages = x);
  }

  delete(id: number) {
    this.messageService.delete(id).subscribe(() => this.findAll());
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
