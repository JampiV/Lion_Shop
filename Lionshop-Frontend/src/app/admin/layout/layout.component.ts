import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  irCompras(){
    if(sessionStorage.getItem('key')==null){
      const ok = confirm('Debes iniciar sesión para poder ver tus compras');
    if(ok){
      
      window.location.replace(`../login`)
    }
    }
    else{
      window.location.replace(`../admin/compras`);
    }
   
    

  }

}
