import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solicitud } from '../solicitud.model';
import { SolicitudService } from '../solicitud.service';
import { DonacionService } from 'src/app/shared/donacion/donacion.service';
import { Donacion } from 'src/app/shared/donacion/donacion.model';
import { estadoSolicitud } from '../estado-solicitud.model';
import { EstadoSolicitudService } from '../estado-solicitud.service';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.css']
})
export class FormSolicitudComponent implements OnInit {

  form: FormGroup;


  @Input() set producto(producto: any) {
    this.form?.patchValue(producto);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
  estadoSolicitudid: estadoSolicitud [];

 
 // onSubmit: any;
  constructor(
    private solicitudService: SolicitudService,
    private formBuilder:FormBuilder,
    private router:Router,
    private estadoSolicitudService:EstadoSolicitudService,
    private donacionService:DonacionService
    ) { }

    getAllEstadoSolicitudes(){
      this.estadoSolicitudService.getAllEstadoSolicitudes().subscribe((data:any)=>{
        this.estadoSolicitudid=data["body"];
        console.log(this.estadoSolicitudid);
      })
    }
  
  
    ngOnInit(): void {
      this.getAllEstadoSolicitudes();

      this.form = this.formBuilder.group({

        nombre_solicitud: [
          '',
          [//FALTA VER
            Validators.required,
            Validators.minLength(2),
        //FALTA VER    Validators.maxLength(100),
          ],
        ],
        estado_solicitud: '',
        estadoSolicitud: [
          '',
          [
            Validators.required,
          ],
        ],
        distrito: [
          ''
        ],
      });
    }
    
    save(){
      this.onSubmit.emit(this.form.value);
    }

}


