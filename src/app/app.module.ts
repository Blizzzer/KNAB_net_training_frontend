import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BoardsComponent} from './boards/boards/boards.component';
import {HttpClientModule} from '@angular/common/http';
import {TextEntriesComponent} from './text-entries/text-entries.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {BoardsModule} from './boards/boards.module';

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
    TextEntriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BoardsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
