import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  listarTarjetas:TarjetaCredito[]=[];

  constructor( private tarjetaSvc:TarjetaService, private tostr:ToastrService ) { }

  ngOnInit(): void {

    this.obtenerTarjeta();

  }


  obtenerTarjeta(){

    this.tarjetaSvc.obtenerTarjeta().subscribe(res=>{
      
      this.listarTarjetas = [];

      res.forEach((element:any)=>{
          
      this.listarTarjetas.push({
        
        id: element.payload.doc.id,
        ...element.payload.doc.data()

      })

      })
    

    })

  }


  eliminarTarjeta(id:any){

      Swal.fire({
        icon:'question',
        title:'Desea eliminar la tarjeta?',
        showCancelButton: true,
        confirmButtonText:'Eliminar'
      }).then((result)=>{
        if (result.isConfirmed) {

          this.tarjetaSvc.eliminarTarjeta(id).then(()=>{

            this.tostr.error('La tarjeta fue eliminada correctamente', 'Registro eliminado');
            
          },err=>{
      
            this.tostr.error('Opss ocurrio un error', 'ERROR');
      
          })
          
        }
      })
  }


  editarTarjeta(tarjeta:TarjetaCredito){

   
   this.tarjetaSvc.addTarjetaEdit(tarjeta);

  }

}
