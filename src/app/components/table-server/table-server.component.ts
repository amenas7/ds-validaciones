import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Interfaces importadas de sanna-ui
interface TableColumn {
  key: string;
  label: string;
  width?: string;
  sortable?: boolean;
}

interface TableData {
  [key: string]: any;
}

interface ServerPaginationData {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  currentItemsCount: number;
}

interface ServerPaginationOptions {
  itemsPerPageOptions: number[];
  showItemsPerPageSelector: boolean;
  showPageInfo: boolean;
}

interface ServerTableRequest {
  pageNumber: number;
  rowsPerPage: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

@Component({
  selector: 'app-table-server',
  templateUrl: './table-server.component.html',
  styleUrl: './table-server.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableServerComponent implements OnInit {
  // Formulario de filtros
  filtroForm!: FormGroup;

  // Estado de carga
  isLoading: boolean = false;

  // Fila seleccionada
  selectedRow: TableData | null = null;

  // URL de la API
  private apiUrl = 'http://localhost:3000/api/laboratorio';

  // Opciones de filtros
  estadoOptions = [
    { value: '0', label: 'Pendiente' },
    { value: '1', label: 'En Proceso' },
    { value: '2', label: 'Coordinado' },
    { value: '3', label: 'Completado' }
  ];

  clasificacionOptions = [
    { value: 'R', label: 'Regular' },
    { value: 'D', label: 'Domicilio' },
    { value: 'H', label: 'Hospitalización' },
    { value: 'T', label: 'Telemedicina' }
  ];

  // Columnas de la tabla
  columns: TableColumn[] = [
    {
      key: 'cod_serv_laboratorio',
      label: 'CÓD. SERVICIO',
      width: '120px',
      sortable: true
    },
    {
      key: 'paciente',
      label: 'PACIENTE',
      sortable: true
    },
    {
      key: 'programa',
      label: 'PROGRAMA',
      width: '150px'
    },
    {
      key: 'clasificacion',
      label: 'CLASIFICACIÓN',
      width: '120px'
    },
    {
      key: 'estado',
      label: 'ESTADO',
      width: '100px'
    },
    {
      key: 'des_dis',
      label: 'DISTRITO',
      width: '150px'
    },
    {
      key: 'direccion',
      label: 'DIRECCIÓN',
      width: '250px'
    },
    {
      key: 'fecha_creacion',
      label: 'FECHA CREACIÓN',
      width: '140px',
      sortable: true
    }
  ];

  // Datos actuales de la página
  currentPageData: TableData[] = [];

  // Configuración de paginación
  paginationData: ServerPaginationData = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    currentItemsCount: 0
  };

  paginationOptions: ServerPaginationOptions = {
    itemsPerPageOptions: [10, 30, 50],
    showItemsPerPageSelector: true,
    showPageInfo: true
  };

  // Request actual
  private currentRequest: ServerTableRequest = {
    pageNumber: 1,
    rowsPerPage: 10
  };

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Inicializar formulario de filtros con fechas
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    this.filtroForm = this.fb.group({
      fecha_ini: [oneMonthAgo],
      fecha_fin: [today],
      estado: [''],
      clasificacion: ['']
    });
  }


  // Método llamado por sa-table-server cuando cambia la paginación/ordenamiento
  onLoadData(request: ServerTableRequest): void {
    this.currentRequest = request;
    this.loadData(request);
  }

  // Cargar datos con filtros
  private loadData(request: ServerTableRequest): void {
    this.isLoading = true;

    // Preparar payload para la API
    const payload = {
      fecha_ini: this.filtroForm.get('fecha_ini')?.value,
      fecha_fin: this.filtroForm.get('fecha_fin')?.value,
      estado: this.filtroForm.get('estado')?.value || null,
      cod_clasif: this.filtroForm.get('clasificacion')?.value || null,
      cod_laboratorios: null,
      cod_pruebas: null,
      cod_resp_muestra: null,
      pageNumber: request.pageNumber,
      rowsPerPage: request.rowsPerPage,
      sortBy: request.sortBy,
      sortDirection: request.sortDirection
    };

    console.log('Enviando request a API:', payload);

    // Llamada HTTP a la API
    this.http.post<any>(this.apiUrl, payload).subscribe({
      next: (response) => {
        this.isLoading = false;
        
        console.log('Response de API:', response);

        if (response.success && response.resultData) {
          this.currentPageData = response.resultData;

          // Actualizar información de paginación
          const totalItems = response.resultData.length > 0 ? response.resultData[0].total_registros : 0;
          this.paginationData = {
            currentPage: request.pageNumber,
            itemsPerPage: request.rowsPerPage,
            totalItems: totalItems,
            currentItemsCount: this.currentPageData.length
          };
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar datos:', error);
        this.currentPageData = [];
        this.paginationData = {
          currentPage: 1,
          itemsPerPage: request.rowsPerPage,
          totalItems: 0,
          currentItemsCount: 0
        };
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  // Buscar con filtros
  buscar(): void {
    // Resetear a la primera página
    this.currentRequest.pageNumber = 1;
    this.loadData(this.currentRequest);
  }

  // Limpiar filtros
  limpiarFiltros(): void {
    this.filtroForm.reset();
    this.buscar();
  }

  // Evento de click en fila
  onRowClick(row: TableData): void {
    this.selectedRow = row;
    console.log('Fila seleccionada:', row);
  }

  // Evento de doble click en fila
  onRowDoubleClick(row: TableData): void {
    console.log('Doble click en fila:', row);
    alert(`Ver detalle de: ${row['paciente']}`);
  }

  // Getter para calcular total de páginas
  get totalPages(): number {
    return Math.ceil(this.paginationData.totalItems / this.paginationData.itemsPerPage);
  }
}
