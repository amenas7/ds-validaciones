import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent implements OnInit {
  // Formulario reactivo para el ejemplo completo
  formCompleto!: FormGroup;

  // Formulario reactivo para el ejemplo práctico
  formComentarios!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;
  isRequired: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar formulario completo
    this.formCompleto = this.fb.group({
      textareaCompleto: ['', [Validators.minLength(10), Validators.maxLength(500)]]
    });

    // Inicializar formulario de comentarios
    this.formComentarios = this.fb.group({
      codigoLote: [''],
      observaciones: [''],
      valorNumerico: ['']
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

  onFocus(event: FocusEvent): void {
    console.log('Textarea enfocado:', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Textarea desenfocado:', event);
  }

  // Getters para acceder fácilmente a los valores
  get valorTextareaCompleto(): string {
    return this.formCompleto.get('textareaCompleto')?.value || 'Ninguno';
  }

  get valorCodigoLote(): string {
    return this.formComentarios.get('codigoLote')?.value || 'vacío';
  }

  get valorObservaciones(): string {
    return this.formComentarios.get('observaciones')?.value || 'vacío';
  }

  get valorNumerico(): string {
    return this.formComentarios.get('valorNumerico')?.value || 'vacío';
  }
}
