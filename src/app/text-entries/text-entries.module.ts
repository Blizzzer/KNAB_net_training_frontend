import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextEntriesComponent} from './containers/text-entries/text-entries.component';
import { BoardInfoComponent } from './components/board-info/board-info.component';
import { EntriesListComponent } from './components/entries-list/entries-list.component';
import { SendTextComponent } from './components/send-text/send-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextEntriesComponent,
    BoardInfoComponent,
    EntriesListComponent,
    SendTextComponent
  ]
})
export class TextEntriesModule { }
