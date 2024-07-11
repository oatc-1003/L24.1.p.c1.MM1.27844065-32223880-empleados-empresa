export default class GrupoEmpleados{
    constructor(){
    this.SIGLA_MASCULINO="M"
    this.SIGLA_FEMENINO="F"
    this.contHombres=0;
    this.contMujeres=0;
    this.contEmpleados=0;

    }

    procesarEmpleado(empleado){
        this.contEmpleados++

        if(empleado.sexo.toUpperCase()===this.SIGLA_MASCULINO){
            this.contHombres++
        }
        if(empleado.sexo.toUpperCase()===this.SIGLA_FEMENINO){
            this.contMujeres++
        }
        

    }


    porcentajeMujeres(){
        return (this.contMujeres/this.contEmpleados) * 100
    }


}