import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzButtonModule, MzCardModule, MzIconMdiModule, MzIconModule } from 'ngx-materialize';
import { CardBtnComponent, CardViewComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    MzCardModule,
    MzIconModule,
    MzIconMdiModule,
    MzButtonModule
  ],
  declarations: [CardBtnComponent, CardViewComponent],
  exports: [
    MzCardModule,
    MzButtonModule,
    MzIconModule,
    MzIconMdiModule,
    CardBtnComponent,
    CardViewComponent
  ]
})
export class SharedModule { }
