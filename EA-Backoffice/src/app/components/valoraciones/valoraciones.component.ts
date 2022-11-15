import { Component, OnInit } from '@angular/core';
import { ValoracionService } from '../../services/valoracion.service';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { valoracion } from 'src/app/interfaces/valoracion.interface';


@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.css']
})
export class ValoracionesComponent implements OnInit {
  valoraciones!: valoracion[];
  constructor(private valserv: ValoracionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.valserv.getall()
    .pipe(
      tap((valoracion: valoracion[]) => this.valoraciones = valoracion)
    )
    .subscribe();
  }

  deleteVal(valora: valoracion): void {
    this.valserv.delete(valora._id!).subscribe(
      data =>  { if(data._id == valora._id){
        this.valoraciones = this.valoraciones.filter(vlr=> vlr._id != data._id)
      }}
    );
  }

  updateVal(valora: valoracion): void {
    //let newName = (<HTMLInputElement>document.getElementById("newName")).value;
    //let newEmail = (<HTMLInputElement>document.getElementById("newEmail")).value;
    const editedUser: valoracion = {
    points: valora.points,
    _id: valora._id,
    username: valora.username,
    data: valora.data
    } 
    this.valserv.updateVal(editedUser, valora._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }

  addVal(valora: valoracion): void{
    this.valserv.addVal(valora).subscribe(
      data => {if(data.username == valora.username){
        this.valoraciones.push(data);
      }}
    )
}  
}
