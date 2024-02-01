import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'caroline_seda';

  textContent:string = "En Carolina Seda, estamos comprometidos con tu crecimiento, tanto profesional como personal y queremos que alcances tus metas en el mundo. Nos enorgullece ofrecer una plataforma de aprendizaje integral. Queremos estar aun mas cerca de ti, compartir experiencias, noticias y recursos exclusivos que te impulsen. Como? A traves de nuestras redes sociales!. Por ello, te animamos a seguirnos. Es una forma genial y gratuita de ayudar a nuestro crecimiento. Nos ayuda mucho, mas de lo que pueda parecer, y esto se traduce en, sobre todo, mejores ofertas para la comunidad. Te lo agradecemos mucho! Tu exito es nuestra prioridad, y queremos celebrar cada logro contigo. Construyamos juntos un futuro lleno de oportunidades!"
}
