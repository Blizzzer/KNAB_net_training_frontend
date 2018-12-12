import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {TextEntryModel} from '../models/text_entry.model';
import {BoardModel} from '../../boards/models/board.model';

@Injectable({
  providedIn: 'root'
})
export class TextEntriesService {

  constructor(private http: HttpClient) {
  }

  fetchTextEntries(boardId: number): Promise<TextEntryModel[]> {
    return this.http.get(serverAddress + '/text')
      .toPromise()
      .then((list: TextEntryModel[]) => list.filter((entry: TextEntryModel) => entry.board_id === boardId));
  }

  fetchBoard(boardId: number): Promise<BoardModel> {
    return this.http.get(serverAddress + '/board')
      .toPromise()
      .then((list: BoardModel[]) => list.find((board: BoardModel) => board.id === boardId));
  }

  postTextEntry(textEntry: TextEntryModel) {
    return this.http.post<TextEntryModel>(serverAddress + '/text', textEntry).toPromise();
  }
}
