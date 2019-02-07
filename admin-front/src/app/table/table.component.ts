import {Component, Input, OnInit} from '@angular/core';
import {Table} from "../modules/table/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() title: string = 'Example table';
  @Input() description: string = '';
  @Input() fields: string[] = [];
  @Input() table: Table;

  constructor() { }

  ngOnInit() {
  }

}
