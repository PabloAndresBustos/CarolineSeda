import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() title:string = ""
  @Input() imagen:string = ""
  @Input() imagenTop:string = ""
  @Input() text:string = ""
  @Input() show:boolean = true
  @Input() showButton:boolean = false

}
