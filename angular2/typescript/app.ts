class Usuario {

    name : string
    lastName : string
    edad : number

    constructor(name, lastName, edad){
        this.name = name
        this.lastName = lastName
        this.edad = edad
    }

    saludar(){
        console.log("Hola " + this.name + " " + this.lastName + ", tienes " + this.edad + " años." )
    }

}

let user1 : Usuario = new Usuario('Juan Manuel', "Salazar Manuel", 56)

user1.saludar()