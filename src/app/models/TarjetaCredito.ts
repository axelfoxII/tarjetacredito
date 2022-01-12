export class TarjetaCredito{
    id?:string;
    titular:string;
    numTarjeta:string;
    fechaExp:string;
    cvv:number;
    fechaCreacion: Date;
    FechaActualizacion: Date;


    constructor(titular: string,numTarjeta: string, fechaExp: string, cvv:number){

        this.titular = titular;
        this.numTarjeta = numTarjeta;
        this.fechaExp = fechaExp;
        this.cvv = cvv;
        this.fechaCreacion = new Date();
        this.FechaActualizacion = new Date();

    }
}