import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextEntriesComponent} from './containers/text-entries/text-entries.component';
import { EntriesListComponent } from './components/entries-list/entries-list.component';
import { SendTextComponent } from './components/send-text/send-text.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TextEntriesComponent,
    EntriesListComponent,
    SendTextComponent
  ]
})
export class TextEntriesModule { }
