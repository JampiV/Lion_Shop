import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donacion } from 'src/app/shared/donacion/donacion.model';
import { DonacionService } from 'src/app/shared/donacion/donacion.service';

@Component({
  selector: 'app-donar-apartado',
  templateUrl: './donar-apartado.component.html',
  styleUrls: ['./donar-apartado.component.css']
})  
export class DonarApartadoComponent implements OnInit {
  
  constructor(public donacionService: DonacionService, private router: Router) {}

  ngOnInit(): void {}

  createDonacionService(donacion:Donacion) {
    this.donacionService.crearDonacion(donacion).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/user']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
}
