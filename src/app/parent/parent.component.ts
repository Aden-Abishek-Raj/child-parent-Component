import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  message: any = [];
  public childData: any[] = [];

  addNewChildMsg(newItem: string) {
    this.message.push(newItem);
  }

  sentParentData(msg: string) {
    this.childData.push(msg);
  }

  ngOnInit() {}
}
