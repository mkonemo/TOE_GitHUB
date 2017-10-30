import { Component } from '@angular/core';
import { Hero } from './hero'; // importo la classe Hero da hero.ts.
// La classe potrebbe essere definita anche in questo stesso punto

// Definisco l'array HEROES, che contiene elementi di classe Hero.
// Ogni item dell'array verrà richiamato con un nome definito direttamente nel ciclo (hero, pippo, ciro)
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: '' }
];

@Component({
    selector: 'app-root', // questo è il nome con cui verrà richiamato il componente nell'index.html
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';

    // nel componente creo un elemento heroes, che è un'istanza dell'array HEROES. Questa istanza verrà richiamata nell'HTML
    heroes = HEROES;

    // creo l'elemento (o handler) selectedHero, che verrà usato nella funzione assegnata all'evento click
    selectedHero: Hero;

    // creo una funzione che gestisca i dati passati dall'evento onSelect in component.html.
    // Notare che nell'html l'elemento passato si chiama pippo (hero),
    // mentre qui posso assegnare ai dati recuperati un altro nome (ciro o hero).
    onSelect(ciro: Hero): void { // recupero i dati dall'evento, e li assegno a un oggetto di classe Hero, che chiamerò ciro (hero)
        this.selectedHero = ciro; // assegno all'oggetto selectedHero, che è di tipo Hero,
        // i dati che ho richiamato nella variabile ciro (hero). Potrò usare nuovamente selectedHero nell'HTML
    }
}
