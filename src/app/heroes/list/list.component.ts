import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroNames: string[] = [
    "Spiderman",
    "Batman",
    "Hulk"
  ]

  public removeHeroName?: string;
  public statusRemoveHero: boolean = false;

  removeLastHero(): void {

    this.removeHeroName = this.heroNames.pop();

    if (this.removeHeroName) {
      this.statusRemoveHero = true;
    } else {
      this.statusRemoveHero = false;
    }
  }

}
