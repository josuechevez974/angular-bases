import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  // Exponer los componentes del modulo
  exports: [
    ListComponent,
    HeroComponent,
  ],
  // Declarar componentes del modulo
  declarations: [
    ListComponent,
    HeroComponent
  ],
  // Dependencias de los modulos
  imports: [
    CommonModule
  ]
})

export class HeroesModule { }