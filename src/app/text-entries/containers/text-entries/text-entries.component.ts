import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private service: TextEntriesService) { }

  ngOnInit() {
    this.boardId = Number(this.route.snapshot.params.id)
    this.service.fetchTextEntries(this.boardId).then((list: TextEntryModel[]) => this.list = list);
    this.service.fetchBoard(this.boardId).then((board: BoardModel) => this.board = board);
  }

}
