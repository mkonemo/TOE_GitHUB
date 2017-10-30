// importo i moduli base, richiamando in modo esplicito quello per il binding con gli inpue e quello per i form
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero' //importo la classe Hero da hero.ts
import { AppComponent } from './app.component'; //importo la classe AppComponent da component.ts

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
