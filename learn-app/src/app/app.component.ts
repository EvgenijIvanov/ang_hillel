import { Component, OnInit } from '@angular/core';
import { BtnWidget } from './shared/models/';
import { ViewWidget } from './shared/models/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  curentwidget: ViewWidget;
  btnArr: BtnWidget[] = [
    {id: 1, title: 'Виджет 1', body: 'Тело виджета 1'},
    {id: 2, title: 'Виджет 2', body: 'Тело виджета 2'},
    {id: 3, title: 'Виджет 3', body: 'Тело виджета 3'}
  ];

  widget: any[] = [
    {id: 1, titleWidget: 'Заголовок виджета 1', bodyWidget: 'Описание виджета 1', image: 'http://lorempixel.com/300/150/'},
    {id: 2, titleWidget: 'Заголовок виджета 2', bodyWidget: 'Описание виджета 2', image: 'https://loremflickr.com/300/150'},
    {id: 3, titleWidget: 'Заголовок виджета 3', bodyWidget: 'Описание виджета 3', image: 'http://lorempixel.com/300/150/'}
  ];
  constructor() { }

  ngOnInit() {
    this.changeCurrentWidget(1);
  }

  changeCurrentWidget(e) {
    this.widget.forEach(item => {
      if (item.id === e) this.curentwidget = item;
    });
  }
}
