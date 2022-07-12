import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Donacion } from 'src/app/shared/donacion/donacion.model';
import { DonacionService } from 'src/app/shared/donacion/donacion.service';
import { UsuarioService } from 'src/app/shared/usuario.service';



@Component({
  selector: 'app-donaciones-list',
  templateUrl: './donaciones-list.component.html',
  styleUrls: ['./donaciones-list.component.css']
})
export class DonacionesListComponent implements OnInit {
  public prueba: Array<any> = [];

  displayedColumns: string[] = ['idDonacion', 'usuario', 'montoDonar', 'fechaPlantacion', 'acciones'];
  dataSource : MatTableDataSource<Donacion>;


  constructor(private donacionService:DonacionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMisDonaciones();
  }

  getMisDonaciones(){
    this.donacionService.getMisDonaciones(Number(sessionStorage.getItem('key'))).subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data['body']);
      console.log(Number(sessionStorage.getItem('idUsuario')));
    })
  }
  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }

  mover(idDonacion:number){
    window.location.replace(`${idDonacion}/view`);
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la donacion?');
    if (ok) {
      this.donacionService.delete(id).subscribe(() => {
        this.getMisDonaciones();
      });
    }
  }

}
