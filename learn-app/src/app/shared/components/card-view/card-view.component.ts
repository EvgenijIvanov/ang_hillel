import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.sass']
})
export class CardViewComponent implements OnInit {
  @Input() titleWidget: string;
  @Input() bodyWidget: string;
  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
