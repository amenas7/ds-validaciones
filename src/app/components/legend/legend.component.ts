import { Component } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrl: './legend.component.scss'
})
export class LegendComponent {
  // Leyendas para diferentes casos de uso
  leyendasVentas = [
    { color: '#28a745', label: 'Completadas', tooltip: '1,234 ventas completadas - $543,210 en ingresos', porcentaje: '78%' },
    { color: '#ffc107', label: 'Pendientes', tooltip: '156 ventas pendientes de confirmación - $67,890 esperados', porcentaje: '12%' },
    { color: '#17a2b8', label: 'En revisión', tooltip: '89 ventas en proceso de revisión - $34,560 en validación', porcentaje: '7%' },
    { color: '#dc3545', label: 'Canceladas', tooltip: '45 ventas canceladas por el cliente - $23,100 perdidos', porcentaje: '3%' }
  ];

  leyendasProductos = [
    { color: '#6f42c1', label: 'Electrónicos', tooltip: 'Productos electrónicos: laptops, smartphones, tablets' },
    { color: '#e83e8c', label: 'Ropa', tooltip: 'Ropa y accesorios de moda para todas las edades' },
    { color: '#20c997', label: 'Hogar', tooltip: 'Productos para el hogar y decoración' },
    { color: '#fd7e14', label: 'Educación', tooltip: 'Libros, material educativo y entretenimiento' }
  ];

  leyendasEstadisticas = [
    { color: '#007bff', label: 'Usuarios activos', tooltip: 'Usuarios que han iniciado sesión en los últimos 30 días' },
    { color: '#6610f2', label: 'Nuevos usuarios', tooltip: 'Usuarios registrados en el mes actual' },
    { color: '#e83e8c', label: 'Usuarios inactivos', tooltip: 'Usuarios sin actividad en más de 90 días' }
  ];

  leyendasColores = [
    { color: '#28a745', label: 'Verde' },
    { color: '#ffc107', label: 'Amarillo' },
    { color: '#dc3545', label: 'Rojo' },
    { color: '#007bff', label: 'Azul' },
    { color: '#6f42c1', label: 'Morado' },
    { color: '#17a2b8', label: 'Cian' }
  ];
}
