import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { valoracion } from 'src/app/interfaces/valoracion.interface';
@Component({
  selector: 'app-val',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  @Input() valora!: valoracion
  @Output() deleteval = new EventEmitter<valoracion>();
  @Output() updateval = new EventEmitter<valoracion>();
  constructor() { }

  ngOnInit(): void {
  }
  delete():void{
    this.deleteval.emit(this.valora)
    location.reload();
  }
  update(newName: string, newEmail: string){
    this.valora.username = newName;
    this.valora._id = newEmail;
    this.updateval.emit(this.valora);
    location.reload();
  }
}