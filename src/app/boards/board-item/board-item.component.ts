import {Component, Input, OnInit} from '@angular/core';
import {BoardModel} from '../models/board.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  @Input() board: BoardModel;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onBoardButtonClick() {
    this.router.navigate(['text_entries/' + this.board.id]);
  }

}
