import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  // Formulario reactivo para el ejemplo completo
  formCompleto!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;

  private _isRequired: boolean = false;
  get isRequired(): boolean {
    return this._isRequired;
  }
  set isRequired(value: boolean) {
    this._isRequired = value;
    this.updateValidators();
  }

  // Fechas para ejemplos
  today = new Date();
  tomorrow: Date;
  yesterday: Date;
  maxDate30Days: Date;

  constructor(private fb: FormBuilder) {
    // Inicializar fechas
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.today.getDate() + 1);

    this.yesterday = new Date();
    this.yesterday.setDate(this.today.getDate() - 1);

    this.maxDate30Days = new Date();
    this.maxDate30Days.setDate(this.today.getDate() + 30);
  }

  ngOnInit(): void {
    // Inicializar formulario completo (sin required por defecto)
    this.formCompleto = this.fb.group({
      calendarCompleto: [null]
    });
  }

  // Método para actualizar validadores cuando cambia isRequired
  private updateValidators(): void {
    const control = this.formCompleto.get('calendarCompleto');
    if (this._isRequired) {
      control?.setValidators([Validators.required]);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity({ emitEvent: false });
  }

  // Getter para calcular el status dinámicamente
  get calendarStatus(): 'default' | 'success' | 'error' {
    const control = this.formCompleto.get('calendarCompleto');
    if (control?.invalid && control?.touched) {
      return 'error';
    }
    if (control?.valid && control?.value) {
      return 'success';
    }
    return 'default';
  }

  // Métodos para manejar eventos
  onDateSelect(event: any): void {
    console.log('Fecha seleccionada:', event);
  }

  onViewChange(event: any): void {
    console.log('Vista cambiada:', event);
  }

  onMonthChange(date: Date): void {
    console.log('Mes cambiado:', date);
  }

  onYearChange(year: number): void {
    console.log('Año cambiado:', year);
  }

  onFocus(event: FocusEvent): void {
    console.log('Calendar enfocado:', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Calendar desenfocado:', event);
  }

  onValueChange(value: any): void {
    console.log('Valor cambiado:', value);
  }

  // Getter para acceder fácilmente al valor
  get valorCalendarCompleto(): any {
    const value = this.formCompleto.get('calendarCompleto')?.value;
    return value ? value : 'Ninguna';
  }
}
