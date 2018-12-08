import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {BoardsComponent} from './boards/boards.component';
import {HttpClientModule} from '@angular/common/http';
import {BoardItemComponent} from './boards/board-item/board-item.component';
import {TextEntriesComponent} from './text-entries/text-entries.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'boards',
      },
      {
        path: 'boards',
        component: BoardsComponent
      },
      {
        path: 'text_entries/:id',
        component: TextEntriesComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardItemComponent,
    TextEntriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
