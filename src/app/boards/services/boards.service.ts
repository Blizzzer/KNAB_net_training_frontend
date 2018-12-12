import { Injectable } from '@angular/core';
import {BoardModel} from '../models/board.model';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor(private http: HttpClient) { }

  fetchBoardsList(): Promise<BoardModel[]> {
    return this.http.get(serverAddress + '/board')
      .toPromise()
      .then((list: BoardModel[]) => list);
  }
}
