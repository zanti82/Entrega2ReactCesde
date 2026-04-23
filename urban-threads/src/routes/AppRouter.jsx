//creamos las rutas en un array con elementos


import Inicio from "../pages/Inicio"
import Contacto from "../pages/Contacto"
import Productos from "../pages/Productos";


// le ponemos export para usarlo
export let router = [
    {
        path: "/", // raiz
        element: <Inicio />
    },
    {
        path: "/productos",
        element: <Productos />
    },

    {
        path: "/contacto", 
        element: <Contacto />
    }




]