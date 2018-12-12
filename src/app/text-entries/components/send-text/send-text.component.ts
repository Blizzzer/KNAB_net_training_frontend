import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TextEntryModel} from '../../models/text_entry.model';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrls: ['./send-text.component.css']
})
export class SendTextComponent implements OnInit {
  @Output() send: EventEmitter<TextEntryModel> = new EventEmitter();
  textEntry = new TextEntryModel();
  constructor() { }

  ngOnInit() {
  }

  sendText() {
    this.send.emit(this.textEntry);
  }

}
