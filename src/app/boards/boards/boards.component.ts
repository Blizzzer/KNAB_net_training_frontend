import { Component, OnInit } from '@angular/core';
import {BoardsService} from '../services/boards.service';
import {BoardModel} from '../models/board.model';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boardsList: BoardModel[];

  constructor(private service: BoardsService) { }

  ngOnInit() {
    this.service.fetchBoardsList().then((list: BoardModel[]) => this.boardsList = list);
  }

}
