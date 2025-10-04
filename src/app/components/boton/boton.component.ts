import { Component } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss'
})
export class BotonComponent {
  // Variables para estados
  isDisabled: boolean = false;
  isLoading: boolean = false;
  isFullWidth: boolean = false;


  // Método para manejar el click
  handleClick(): void {
    console.log('Botón clickeado');
    alert('Botón clickeado');
  }

  // Método para simular loading
  simulateLoading(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      alert('Proceso completado');
    }, 1000);
    
  }
}
