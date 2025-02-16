import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  pictureCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu sed ipsum luctus egestas. Duis pharetra erat et facilisis fermentum. Fusce tempor nec sem nec aliquet. Morbi rhoncus massa id urna bibendum scelerisque.";

  constructor() { }

  ngOnInit(): void {
  }

}
