import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  // Formulario reactivo para el ejemplo completo
  formCompleto!: FormGroup;

  // Formulario reactivo para el ejemplo práctico
  formProducto!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;
  isRequired: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar formulario completo
    this.formCompleto = this.fb.group({
      inputCompleto: ['', [Validators.minLength(3), Validators.maxLength(50)]]
    });

    // Inicializar formulario de producto
    this.formProducto = this.fb.group({
      codigoProducto: [''],
      precio: [''],
      nombreProducto: ['']
    });
  }

  // Métodos para manejar eventos
  onValueChange(value: string): void {
    console.log('Valor cambiado usando valueChange:', value);
  }

  onChange(event: Event): void {
    console.log('Evento change:', event);
    console.log('Valor del evento usando change:', (event.target as HTMLInputElement)?.value);
  }

  onEnter(event: KeyboardEvent): void {
    const valor = this.formCompleto.get('inputCompleto')?.value;
    console.log('Enter presionado:', event);
    alert('Enter presionado Valor: ' + valor);
  }

  onFocus(event: FocusEvent): void {
    console.log('Input enfocado (onFocus):', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Input desenfocado (onBlur):', event);
  }

  // Getters para acceder fácilmente a los valores
  get valorInputCompleto(): string {
    return this.formCompleto.get('inputCompleto')?.value || 'Ninguno';
  }

  get valorCodigoProducto(): string {
    return this.formProducto.get('codigoProducto')?.value || 'vacío';
  }

  get valorPrecio(): string {
    return this.formProducto.get('precio')?.value || 'vacío';
  }

  get valorNombreProducto(): string {
    return this.formProducto.get('nombreProducto')?.value || 'vacío';
  }
}
