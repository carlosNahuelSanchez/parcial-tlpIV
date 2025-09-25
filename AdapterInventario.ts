interface IInventarioNuevo {
    agregarEquipo(nombre: string): void;
    listarEquipos(): any[];
}

class InventarioViejo {
    private items: any[] = [];

    addItem(nombre: string) {
        this.items.push({ nombre });
    }

    getItems() {
        return this.items;
    }
}

class AdaptadorInventario implements IInventarioNuevo {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    agregarEquipo(nombre: string): void {
        this.inventarioViejo.addItem(nombre);
    }

    listarEquipos(): any[] {
        const itemsViejos = this.inventarioViejo.getItems();
        return itemsViejos.map(item => ({
            nombre: item.nombre,
            tipo: "Red",
            estado: "disponible"
        }));
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible"); // Error en tiempo de compilacion el nuevo metodo no contiene los parametros que se le envia
console.log(adaptador.listarEquipos());
