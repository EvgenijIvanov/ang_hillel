import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-btn',
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.sass']
})
export class CardBtnComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() id: number;
  @Output() onChangedWidget = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  navigate() {
    this.onChangedWidget.emit(this.id);
  }

}
