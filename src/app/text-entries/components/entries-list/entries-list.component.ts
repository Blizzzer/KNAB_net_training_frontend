import {Component, Input, OnInit} from '@angular/core';
import {TextEntryModel} from '../../models/text_entry.model';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.css']
})
export class EntriesListComponent implements OnInit {
  @Input() list: TextEntryModel[];
  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
