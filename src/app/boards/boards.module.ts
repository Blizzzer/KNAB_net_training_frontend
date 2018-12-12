import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardsComponent} from './boards/boards.component';
import {BoardItemComponent} from './board-item/board-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardsComponent,
    BoardItemComponent,
  ]
})
export class BoardsModule {
}
