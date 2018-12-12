import {Component, Input, OnInit} from '@angular/core';
import {BoardModel} from '../../../boards/models/board.model';

@Component({
  selector: 'app-board-info',
  templateUrl: './board-info.component.html',
  styleUrls: ['./board-info.component.css']
})
export class BoardInfoComponent implements OnInit {
  @Input() board: BoardModel;

  constructor() { }

  ngOnInit() {
  }

}
