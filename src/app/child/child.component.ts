import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  newItem: any;
  @Input() parentData: any[] = [];
  @Output() newItemEvent = new EventEmitter<string>();

  addNewChildMsg(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit() {}
}
