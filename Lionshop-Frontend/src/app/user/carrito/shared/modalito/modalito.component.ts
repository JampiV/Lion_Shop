import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modalito',
  templateUrl: './modalito.component.html',
  styleUrls: ['./modalito.component.css']
})
export class ModalitoComponent implements OnInit {
  @ViewChild('modal_1') modal_1: TemplateRef<any>;
    @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    backdrop: any
  display: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.openModal()
     }, 1500);
  }
  openModal(){
    this.display='block';
 }

 onCloseHandled(){
  this.display='none';
}

}
