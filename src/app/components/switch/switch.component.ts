import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent implements OnInit {
  // Formulario reactivo para el ejemplo completo
  formCompleto!: FormGroup;

  // Formulario reactivo para el ejemplo práctico
  formConfiguracion!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;
  isRequired: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar formulario completo
    this.formCompleto = this.fb.group({
      switchCompleto: [false, Validators.requiredTrue]
    });

    // Inicializar formulario de configuración
    this.formConfiguracion = this.fb.group({
      notificaciones: [true],
      modoOscuro: [false],
      emailsMarketing: [false],
      sincronizacionAutomatica: [true]
    });
  }

  // Métodos para manejar eventos
  onValueChange(value: boolean): void {
    console.log('Valor cambiado usando valueChange:', value);
  }

  onChange(value: boolean): void {
    console.log('Valor cambiado usando change:', value);
  }

  onFocus(event: FocusEvent): void {
    console.log('Switch enfocado:', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Switch desenfocado:', event);
  }

  // Getters para acceder fácilmente a los valores
  get valorSwitchCompleto(): boolean {
    return this.formCompleto.get('switchCompleto')?.value || false;
  }

  get valorNotificaciones(): boolean {
    return this.formConfiguracion.get('notificaciones')?.value || false;
  }

  get valorModoOscuro(): boolean {
    return this.formConfiguracion.get('modoOscuro')?.value || false;
  }

  get valorEmailsMarketing(): boolean {
    return this.formConfiguracion.get('emailsMarketing')?.value || false;
  }

  get valorSincronizacion(): boolean {
    return this.formConfiguracion.get('sincronizacionAutomatica')?.value || false;
  }

  get valoresConfiguracion(): any {
    return this.formConfiguracion.value;
  }

  // Contar switches activados
  get cantidadActivados(): number {
    const valores = this.formConfiguracion.value;
    return Object.values(valores).filter(v => v === true).length;
  }
}
