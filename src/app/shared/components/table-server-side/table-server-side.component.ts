import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Equip {
  description: string;
  id: number;
  brand: string;
  model: string;
  serie: string;
}

const ELEMENT_DATA: Equip[] = [
  { id: 1, description: 'Monitor de signos vitales', brand: 'Philips', model: 'IntelliVue MX800', serie: 'MX800-001' },
  { id: 2, description: 'Electrocardiógrafo', brand: 'GE Healthcare', model: 'MAC 2000', serie: 'MAC2000-045' },
  { id: 3, description: 'Ventilador mecánico', brand: 'Dräger', model: 'Evita Infinity V500', serie: 'V500-123' },
  { id: 4, description: 'Bomba de infusión', brand: 'B. Braun', model: 'Infusomat Space', serie: 'IS-45678' },
  { id: 5, description: 'Desfibrilador', brand: 'Zoll', model: 'R Series', serie: 'RS-9876' },
  { id: 6, description: 'Incubadora neonatal', brand: 'GE Healthcare', model: 'Giraffe Omnibed', serie: 'GO-5542' },
  { id: 7, description: 'Rayos X portátil', brand: 'Siemens', model: 'Mobilett Mira Max', serie: 'MM-8765' },
  { id: 8, description: 'Ecógrafo', brand: 'Samsung', model: 'HS70A', serie: 'HS70A-342' },
  { id: 9, description: 'Autoclave', brand: 'Tuttnauer', model: 'Elara 11', serie: 'EL-2345' },
  { id: 10, description: 'Colposcopio', brand: 'Leica Microsystems', model: 'M320 F12', serie: 'M320-7890' },
];

@Component({
  selector: 'app-table-server-side',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-server-side.component.html',
  styleUrl: './table-server-side.component.scss'
})
export class TableServerSideComponent {
  displayedColumns: string[] = ['position', 'description', 'brand', 'model', 'serie'];
  dataSource = ELEMENT_DATA;
}
