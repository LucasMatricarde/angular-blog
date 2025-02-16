import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  pictureCover: string = "";
  @Input()
  cardTitle: string = "Saiu a nova versao do Angular";
  @Input()
  cardDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu sed ipsum luctus egestas. Duis pharetra erat et facilisis fermentum. Fusce tempor nec sem nec aliquet. Morbi rhoncus massa id urna bibendum scelerisque.";
  constructor() { }

  ngOnInit(): void {
  }

}
