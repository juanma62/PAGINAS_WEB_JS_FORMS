interface Direccion {
    calle: string
    poblacion: string
}

//class Usuario implements Direccion {
class Usuario {

    /* public name : string
    public lastName : string
    public edad : number

    constructor(name, lastName, edad){
        this.name = name
        this.lastName = lastName
        this.edad = edad
    } */
    constructor(public name:string, 
                public lastName:string, 
                public edad: number,
                //public calle: string,
                //public poblacion: string
                public direccion: Direccion
                ){}

    saludar(){
        console.log("Hola " + this.name + " " + this.lastName + ", tienes " + this.edad + " años." )
    }

    crecer(pEdad){
        this.edad = this.edad+2
        this.edad++
    }

}

let user1 : Usuario = new Usuario('Juan Manuel', "Salazar Manuel", 56, {calle: "Del Pez", poblacion:"Móstoles"})

user1.crecer(57)
user1.saludar()