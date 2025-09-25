class Configuracion {
    private static instancia: Configuracion;
    private tipo:string | undefined
    private valor:string | undefined

    private constructor() {}

    public static obtenerInstancia(): Configuracion {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }

    establecerConfiguracion = (tipo: string, valor: string ) => {
        this.tipo = tipo
        this.valor = valor
    }

    obtenerConfiguracion = (tipo:string) => {
        console.log(`Esta en ${tipo} : ${this.valor}`)
    }
}

// Uso
const config1 = Configuracion.obtenerInstancia();

const config2 = Configuracion.obtenerInstancia();

config1.establecerConfiguracion("modo", "produccion")

config2.obtenerConfiguracion("modo")