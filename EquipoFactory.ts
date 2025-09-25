interface IEquipo {
    detalles(): void;
}

class Notebook implements IEquipo {

    constructor(private nombre:string, private ram: string, private procesador:string) {}

    detalles(): void {
        console.log(`Soy Notebook ${this.nombre} con ${this.ram} De ram, y un procesador ${this.procesador}`);
    }
}

class Desktop implements IEquipo {

    constructor(private nombre:string, private ram: string, private procesador:string) {}

    detalles(): void {
        console.log(`Soy Desktop ${this.nombre} con ${this.ram} De ram, y un procesador ${this.procesador}`);
    }
}

class Servidor implements IEquipo {

    constructor(private nombre:string, private ram: string, private procesador:string) {}

    detalles(): void {
        console.log(`Soy Servidor ${this.nombre} con ${this.ram} De ram, y un procesador ${this.procesador}`);
    }
}

class Factory {
    crearEquipo(tipo: string, datos: { nombre:string, ram:string, procesador:string }): IEquipo {
        if (tipo === "Notebook") {
            return new Notebook(datos.nombre, datos.ram, datos.procesador);
        } else if (tipo === "Desktop") {
            return new Desktop(datos.nombre, datos.ram, datos.procesador);
        }
        else if (tipo == "Servidor"){
            return new Servidor(datos.nombre, datos.ram, datos.procesador)
        }
        throw new Error("Tipo de Equipo no soportado");
    }
}

const factory = new Factory()
const server = factory.crearEquipo("Servidor", { nombre: "Dell", ram: "24", procesador: "Intel" })

server.detalles()