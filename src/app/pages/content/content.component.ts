import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = "https://forbes.com.br/wp-content/uploads/2020/08/Neg%C3%B3cios-CarrosdeLuxo-180820-Divulga%C3%A7%C3%A3o9-1.jpg";
  @Input()
  contentTitle: string = "Meus Carros";
  @Input()
  contentDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu sed ipsum luctus egestas. Duis pharetra erat et facilisis fermentum. Fusce tempor nec sem nec aliquet. Morbi rhoncus massa id urna bibendum scelerisque.";

  constructor() { }

  ngOnInit(): void {
  }

}
