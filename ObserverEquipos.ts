interface IObserver {
    actualizar(equipo: Equipo): void;
}


class Soporte implements IObserver {
    actualizar(equipo: Equipo): void {
        console.log(`Notificación: El equipo ${equipo.nombre} (${equipo.tipo}) cambió su estado a: ${equipo.estado}`);
    }
}

class Equipo {
    private observadores: IObserver[] = [];
    nombre: string;
    tipo: string;
    estado: string;

    constructor(nombre: string, tipo: string, estado: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }

    agregarObservador(observer: IObserver): void {
        this.observadores.push(observer);
    }

    eliminarObservador(observer: IObserver): void {
        const index = this.observadores.indexOf(observer);
        if (index > -1) {
            this.observadores.splice(index, 1);
        }
    }

    notificarObservadores(): void {
        for (const observador of this.observadores) {
            observador.actualizar(this);
        }
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
}

const soporte = new Soporte()

const equipo = new Equipo("Notebook HP","Portatil","Disponible")

equipo.agregarObservador(soporte)

equipo.cambiarEstado("En reparacion")


