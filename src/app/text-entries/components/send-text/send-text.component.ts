import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrls: ['./send-text.component.css']
})
export class SendTextComponent implements OnInit {
  @Output() send: EventEmitter<void>;
  constructor() { }

  ngOnInit() {
  }

}
