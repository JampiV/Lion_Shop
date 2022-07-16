import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Solicitud } from 'src/app/user/shared/solicitud.model';
import { SolicitudService } from 'src/app/user/shared/solicitud.service';



@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudListComponent implements OnInit {

  displayedColumns: string[] = ['idSolicitud', 'idDonacion', 'nombre_solicitud', 'distrito', 'estadoSolicitud', 'acciones'];
  dataSource : MatTableDataSource<Solicitud>;


  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.getAllSolicitudes();
  }

  getAllSolicitudes(){
    this.solicitudService.getAllSolicitudes().subscribe((data:any)=>{
          this.dataSource=new MatTableDataSource(data['body']);
          //console.log(data['body'])
        });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la solicitud?');
    if (ok) {
      this.solicitudService.delete(id).subscribe(() => {
        this.getAllSolicitudes();
      });
    }
  }

}
