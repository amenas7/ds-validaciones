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

  // Formulario reactivo para el ejemplo práctico
  formReserva!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;
  isRequired: boolean = false;

  // Fechas para ejemplos
  today = new Date();
  tomorrow: Date;
  yesterday: Date;
  maxDate30Days: Date;
  minDateReserva: Date;
  maxDateReserva: Date;

  constructor(private fb: FormBuilder) {
    // Inicializar fechas
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.today.getDate() + 1);

    this.yesterday = new Date();
    this.yesterday.setDate(this.today.getDate() - 1);

    this.maxDate30Days = new Date();
    this.maxDate30Days.setDate(this.today.getDate() + 30);

    this.minDateReserva = new Date();
    this.minDateReserva.setDate(this.today.getDate() + 1);

    this.maxDateReserva = new Date();
    this.maxDateReserva.setMonth(this.today.getMonth() + 3);
  }

  ngOnInit(): void {
    // Inicializar formulario completo
    this.formCompleto = this.fb.group({
      calendarCompleto: [null, Validators.required]
    });

    // Inicializar formulario de reserva
    this.formReserva = this.fb.group({
      fechaEntrada: [null, Validators.required],
      fechaSalida: [null, Validators.required],
      fechaNacimiento: [null]
    });
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

  // Getters para acceder fácilmente a los valores
  get valorCalendarCompleto(): any {
    const value = this.formCompleto.get('calendarCompleto')?.value;
    return value ? value : 'Ninguna';
  }

  get valorFechaEntrada(): any {
    const value = this.formReserva.get('fechaEntrada')?.value;
    return value ? value : 'No seleccionada';
  }

  get valorFechaSalida(): any {
    const value = this.formReserva.get('fechaSalida')?.value;
    return value ? value : 'No seleccionada';
  }

  get valorFechaNacimiento(): any {
    const value = this.formReserva.get('fechaNacimiento')?.value;
    return value ? value : 'No seleccionada';
  }

  get valoresReserva(): any {
    return this.formReserva.value;
  }
}
