import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TextEntriesService} from '../../services/text-entries.service';
import {TextEntryModel} from '../../models/text_entry.model';
import {BoardModel} from '../../../boards/models/board.model';

@Component({
  selector: 'app-text-entries',
  templateUrl: './text-entries.component.html',
  styleUrls: ['./text-entries.component.css']
})
export class TextEntriesComponent implements OnInit {
  list: TextEntryModel[];
  board: BoardModel;
  boardId: number;

  constructor(private route: ActivatedRoute, private service: TextEntriesService) {
  }

  ngOnInit() {
    this.fetchBoardInfo();
    this.fetchTextEntries();
  }

  sendText(textEntry: TextEntryModel) {
    textEntry.board_id = this.boardId;
    this.service.postTextEntry(textEntry).then(() => this.fetchTextEntries());
  }

  fetchTextEntries() {
    this.service.fetchTextEntries(this.boardId).then((list: TextEntryModel[]) => this.list = list);
  }

  fetchBoardInfo() {
    this.boardId = Number(this.route.snapshot.params.id);
    this.service.fetchBoard(this.boardId).then((board: BoardModel) => this.board = board);
  }

}
