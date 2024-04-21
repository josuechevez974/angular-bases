import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = 'Iroman';
  public edad: number = 45

  get capitalizedName(): string {
    return this.nombre.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - edad: ${this.edad}`;
  }

  changeHeroName(): void {
    this.nombre = 'Spiderman';
  }

  changeHeroAge(): void {
    this.edad++;
  }

  resetForm():void {
    this.nombre = 'Iroman';
    this.edad = 45;
  }
}
