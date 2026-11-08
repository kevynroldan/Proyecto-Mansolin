/* Referencias a los elementos del HTML */

// Elementos del encabezado

const logoEncabezado = document.getElementById("logo-encabezado");
const botonMenu = document.getElementById("btn-menu");
const tituloEncabezado = document.getElementById("titulo-encabezado");

// Elementos del menú lateral

const menuLateral = document.getElementById("menu-lateral");
const botonCerrarMenu = document.getElementById("btn-cerrar-menu");

const nombreUsuarioMenu = document.getElementById("nombre-usuario-menu");
const correoUsuarioMenu = document.getElementById("correo-usuario-menu");
const fechaEntradaMenu = document.getElementById("fecha-entrada-menu");
const horaActualMenu = document.getElementById("hora-actual-menu");
const ultimoInicioMenu = document.getElementById("ultimo-inicio-menu");
const rolUsuarioMenu = document.getElementById("rol-usuario-menu");

const opcionInicioMenu = document.getElementById("menu-inicio");
const opcionCerrarSesion = document.getElementById("menu-cerrar-sesion");

// Tarjeta de acceso

const tarjetaAcceso = document.querySelector(".tarjeta-acceso");

// Inicio de sesión y panel principal

const formularioInicio = document.getElementById("formulario-inicio");
const campoUsuario = document.getElementById("usuario");
const campoContrasena = document.getElementById("contrasena");
const pantallaPanel = document.getElementById("pantalla-panel");

// Botones de las opciones de acceso

const botonInicio = document.getElementById("btn-inicio");
const botonRegistro = document.getElementById("btn-registro");
const botonConsulta = document.getElementById("btn-consulta");

// Pantallas de las opciones de acceso

const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaRegistro = document.getElementById("pantalla-registro");
const pantallaConsulta = document.getElementById("pantalla-consulta");

// Selector del tipo de usuario

const botonTipoUsuario = document.getElementById("btn-tipo-usuario");
const selectorTipoUsuario = document.getElementById("selector-tipo-usuario");
const tipoUsuario = document.getElementById("tipo-usuario");

// Recuperación de contraseña

const botonRecuperar = document.getElementById("btn-recuperar");
const pantallaRecuperar = document.getElementById("pantalla-recuperar");
const botonVolverInicio = document.getElementById("btn-volver-inicio");
const formularioRecuperar = document.getElementById("formulario-recuperar");

// Registro de usuarios

const formularioRegistro = document.getElementById("formulario-registro");
const contrasenaRegistro = document.getElementById("contrasena-registro");
const repetirContrasenaRegistro = formularioRegistro.querySelectorAll('input[type="password"]')[1];

// Consulta de órdenes de trabajo

const formularioConsulta = document.getElementById("formulario-consulta");

// Pantalla de creación de órdenes

const pantallaCrearOrden = document.getElementById(
    "pantalla-crear-orden"
);

const formularioOrden = document.getElementById(
    "formulario-orden"
);

const botonCrearOrden = document.getElementById(
    "btn-crear-orden"
);

const opcionCrearOrdenMenu = document.getElementById(
    "menu-crear-orden"
);

const botonCancelarOrden = document.getElementById(
    "btn-cancelar-orden"
);

const fechaOrden = document.getElementById(
    "fecha-orden"
);

const mensajeFormularioOrden = document.getElementById(
    "mensaje-formulario-orden"
);

// Pantalla de búsqueda de órdenes

const pantallaBuscarOrden = document.getElementById(
    "pantalla-buscar-orden"
);

const formularioBuscarOrden = document.getElementById(
    "formulario-buscar-orden"
);

const botonBuscarOrden = document.getElementById(
    "btn-buscar-orden"
);

const opcionBuscarOrdenMenu = document.getElementById(
    "menu-buscar-orden"
);

const botonCancelarBusquedaOrden = document.getElementById(
    "btn-cancelar-busqueda-orden"
);

const mensajeBusquedaOrden = document.getElementById(
    "mensaje-busqueda-orden"
);

const dialogoOrdenesCliente = document.getElementById(
    "dialogo-ordenes-cliente"
);

const criterioBuscarOrden = document.getElementById(
    "criterio-buscar-orden"
);

const botonLimpiarBusquedaOrden = document.getElementById(
    "btn-limpiar-busqueda-orden"
);

const botonEjecutarBusquedaOrden = document.getElementById(
    "btn-ejecutar-busqueda-orden"
);

const cuerpoResultadosOrden = document.getElementById(
    "cuerpo-resultados-orden"
);

const plantillaResultadoOrden = document.getElementById(
    "plantilla-resultado-orden"
);

// Pantalla de creación de facturas

const pantallaCrearFactura = document.getElementById(
    "pantalla-crear-factura"
);

const formularioFactura = document.getElementById(
    "formulario-factura"
);

const botonCrearFactura = document.getElementById(
    "btn-crear-factura"
);

const opcionCrearFacturaMenu = document.getElementById(
    "menu-crear-factura"
);

const botonCancelarFactura = document.getElementById(
    "btn-cancelar-factura"
);

const fechaFactura = document.getElementById(
    "fecha-factura"
);

const cuerpoItemsFactura = document.getElementById(
    "cuerpo-items-factura"
);

const plantillaItemFactura = document.getElementById(
    "plantilla-item-factura"
);

const mensajeFormularioFactura = document.getElementById(
    "mensaje-formulario-factura"
);

const origenFactura = document.getElementById(
    "origen-factura"
);

const dialogoReemplazarFactura = document.getElementById(
    "dialogo-reemplazar-factura"
);

// Pantalla de búsqueda de facturas

const pantallaBuscarFactura = document.getElementById(
    "pantalla-buscar-factura"
);

const formularioBuscarFactura = document.getElementById(
    "formulario-buscar-factura"
);

const botonBuscarFactura = document.getElementById(
    "btn-buscar-factura"
);

const opcionBuscarFacturaMenu = document.getElementById(
    "menu-buscar-factura"
);

const criterioBuscarFactura = document.getElementById(
    "criterio-buscar-factura"
);

const botonLimpiarBusquedaFactura = document.getElementById(
    "btn-limpiar-busqueda-factura"
);

const botonEjecutarBusquedaFactura = document.getElementById(
    "btn-ejecutar-busqueda-factura"
);

const botonCancelarBusquedaFactura = document.getElementById(
    "btn-cancelar-busqueda-factura"
);

const mensajeBusquedaFactura = document.getElementById(
    "mensaje-busqueda-factura"
);

const cuerpoResultadosFactura = document.getElementById(
    "cuerpo-resultados-factura"
);

const plantillaResultadoFactura = document.getElementById(
    "plantilla-resultado-factura"
);

// Pantalla de creación de cotizaciones

const pantallaCrearCotizacion = document.getElementById(
    "pantalla-crear-cotizacion"
);

const formularioCotizacion = document.getElementById(
    "formulario-cotizacion"
);

const botonCrearCotizacion = document.getElementById(
    "btn-crear-cotizacion"
);

const opcionCrearCotizacionMenu = document.getElementById(
    "menu-crear-cotizacion"
);

const botonCancelarCotizacion = document.getElementById(
    "btn-cancelar-cotizacion"
);

const fechaCotizacion = document.getElementById(
    "fecha-cotizacion"
);

const cuerpoItemsCotizacion = document.getElementById(
    "cuerpo-items-cotizacion"
);

const mensajeFormularioCotizacion = document.getElementById(
    "mensaje-formulario-cotizacion"
);

const origenCotizacion = document.getElementById(
    "origen-cotizacion"
);

// Pantalla de búsqueda de cotizaciones

const pantallaBuscarCotizacion = document.getElementById(
    "pantalla-buscar-cotizacion"
);

const formularioBuscarCotizacion = document.getElementById(
    "formulario-buscar-cotizacion"
);

const botonBuscarCotizacion = document.getElementById(
    "btn-buscar-cotizacion"
);

const opcionBuscarCotizacionMenu = document.getElementById(
    "menu-buscar-cotizacion"
);

const criterioBuscarCotizacion = document.getElementById(
    "criterio-buscar-cotizacion"
);

const botonLimpiarBusquedaCotizacion = document.getElementById(
    "btn-limpiar-busqueda-cotizacion"
);

const botonEjecutarBusquedaCotizacion = document.getElementById(
    "btn-ejecutar-busqueda-cotizacion"
);

const botonCancelarBusquedaCotizacion = document.getElementById(
    "btn-cancelar-busqueda-cotizacion"
);

const mensajeBusquedaCotizacion = document.getElementById(
    "mensaje-busqueda-cotizacion"
);

const cuerpoResultadosCotizacion = document.getElementById(
    "cuerpo-resultados-cotizacion"
);

const plantillaResultadoCotizacion = document.getElementById(
    "plantilla-resultado-cotizacion"
);

// Relación entre cada pantalla interna y su opción del menú

const pantallasInternas = new Map([
    [pantallaPanel, opcionInicioMenu],
    [pantallaCrearOrden, opcionCrearOrdenMenu],
    [pantallaBuscarOrden, opcionBuscarOrdenMenu],
    [pantallaCrearFactura, opcionCrearFacturaMenu],
    [pantallaBuscarFactura, opcionBuscarFacturaMenu],
    [pantallaCrearCotizacion, opcionCrearCotizacionMenu],
    [pantallaBuscarCotizacion, opcionBuscarCotizacionMenu]
]);

/* Datos de demostración y estado de la sesión */

// Valores de ejemplo: se sustituirán cuando conectemos el servidor

const usuarioDemostracion = {
    nombre: "Usuario ejemplo",
    correo: "ejemplo@gmail.com",
    ultimoInicio: "01/11/2026 - 16:44:14"
};

// Estado de la sesión demostrativa

let sesionActiva = false;
let fechaInicioSesion = null;
let intervaloReloj = null;

/* Órdenes de demostración */

// Datos ficticios. Todavía no proceden de una base de datos.

const ordenesDemostracion = [
    {
        numero: "24",
        fecha: "2026-08-31",
        clienteId: "cliente-1",
        cliente: "Luis Ángel López",
        telefono: "3113082950",
        documento: "25652256",
        herramientas: [
            "Taladro Bosch",
            "Pulidora Makita",
            "Soldador inverter"
        ]
    },
    {
        numero: "25",
        fecha: "2026-09-02",
        clienteId: "cliente-1",
        cliente: "Luis Ángel López",
        telefono: "3113082950",
        documento: "25652256",
        herramientas: [
            "Compresor Stanley"
        ]
    },
    {
        numero: "26",
        fecha: "2026-09-03",
        clienteId: "cliente-2",
        cliente: "María José Pérez",
        telefono: "3004567890",
        documento: "1032456789",
        herramientas: [
            "Taladro DeWalt",
            "Sierra circular Bosch"
        ]
    }
];

// Resultados visibles y coincidencias conservadas durante la sesión.

let resultadosBusquedaOrden = [...ordenesDemostracion];

const coincidenciasBusquedaOrden = new Set();

let busquedaOrdenRealizada = false;

// Identificador único para los ítems de documentos //

let secuenciaItemDocumento = 0;

/* Facturas de demostración */

// Solo para probar la pantalla.
// No son facturas guardadas ni emitidas por el sistema.

const facturasDemostracion = ordenesDemostracion.map(
    (orden, indice) => ({
        numero: String(454 + indice),
        numeroOrden: orden.numero,
        fecha: orden.fecha,
        cliente: orden.cliente,
        telefono: orden.telefono,
        nit: orden.documento,
        items: orden.herramientas.length
    })
);

let resultadosBusquedaFactura = [...facturasDemostracion];

const coincidenciasBusquedaFactura = new Set();

let ultimoNumeroFacturaValido = "";

const mensajeNumeroFacturaInvalido =
    "El número de factura solo admite números del 0 al 9, " +
    "sin espacios ni signos.";

/* Cotizaciones de demostración */

// Datos ficticios para probar la búsqueda.
// No son documentos guardados ni consecutivos reales.

const cotizacionesDemostracion = ordenesDemostracion.map(
    (orden, indice) => ({
        numero: String(101 + indice),
        numeroOrden: orden.numero,
        fecha: orden.fecha,
        cliente: orden.cliente,
        telefono: orden.telefono,
        nit: orden.documento,
        items: orden.herramientas.length
    })
);

let resultadosBusquedaCotizacion = [...cotizacionesDemostracion];

const coincidenciasBusquedaCotizacion = new Set();

let ultimoNumeroCotizacionValido = "";

const mensajeNumeroCotizacionInvalido =
    "El número de cotización solo admite números del 0 al 9, " +
    "sin espacios ni signos.";

/* Funciones de navegación */

// Mostrar una opción de acceso y marcar su botón

function cambiarPantallaAcceso(pantallaSeleccionada, botonSeleccionado) {
    // Mostrar únicamente la pantalla seleccionada

    pantallaInicio.hidden = pantallaSeleccionada !== pantallaInicio;
    pantallaRegistro.hidden = pantallaSeleccionada !== pantallaRegistro;
    pantallaConsulta.hidden = pantallaSeleccionada !== pantallaConsulta;

    // Marcar únicamente el botón seleccionado

    botonInicio.classList.toggle("activo", botonSeleccionado === botonInicio);
    botonRegistro.classList.toggle("activo", botonSeleccionado === botonRegistro);
    botonConsulta.classList.toggle("activo", botonSeleccionado === botonConsulta);
}

// Mostrar la pantalla de recuperación de contraseña

function mostrarRecuperacion() {
    tarjetaAcceso.hidden = true;
    pantallaRecuperar.hidden = false;
}

// Volver a la tarjeta de inicio de sesión

function volverAlInicio() {
    pantallaRecuperar.hidden = true;
    tarjetaAcceso.hidden = false;

    cambiarPantallaAcceso(pantallaInicio, botonInicio);
}

// Mostrar el panel principal en modo de demostración

function mostrarPanelPrincipal() {
    cambiarPantallaInterna(pantallaPanel);

    logoEncabezado.hidden = true;
    botonMenu.hidden = false;
    tituloEncabezado.textContent = "MANSYS";

    if (!sesionActiva) {
        sesionActiva = true;
        fechaInicioSesion = new Date();

        prepararDatosMenu();
    }

    campoContrasena.value = "";
}

/* Navegación entre las pantallas internas */

// Mostrar una pantalla interna y marcar su opción del menú

function cambiarPantallaInterna(pantallaSeleccionada) {
    if (!pantallasInternas.has(pantallaSeleccionada)) {
        return;
    }

    tarjetaAcceso.hidden = true;
    pantallaRecuperar.hidden = true;

    if (dialogoOrdenesCliente.open) {
        dialogoOrdenesCliente.close();
    }

    if (dialogoReemplazarFactura.open) {
    dialogoReemplazarFactura.close();
    }

    pantallasInternas.forEach((opcion, pantalla) => {
        const esActual = pantalla === pantallaSeleccionada;

        pantalla.hidden = !esActual;

        if (esActual) {
            opcion.setAttribute("aria-current", "page");
        } else {
            opcion.removeAttribute("aria-current");
        }
    });
}

// Abrir la pantalla desde el panel o desde el menú

function mostrarPantallaCrearOrden() {
    if (!sesionActiva) {
        return;
    }

    // Usar la fecha local, sin sustituirla al volver a abrir un borrador.

    if (!fechaOrden.value) {
    fechaOrden.value = obtenerFechaLocal();
    }

    cambiarPantallaInterna(pantallaCrearOrden);

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

// Descartar el contenido de la orden y regresar al panel

function cancelarOrden() {
    if (!sesionActiva) {
        return;
    }

    formularioOrden.reset();
    mensajeFormularioOrden.textContent = "";

    mostrarPanelPrincipal();

    botonCrearOrden.focus();
}

/* Navegación de búsqueda de órdenes */

// Abrir la pantalla desde el panel o desde el menú

function mostrarPantallaBuscarOrden() {
    if (!sesionActiva) {
        return;
    }

    cambiarPantallaInterna(pantallaBuscarOrden);

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

// Regresar al panel sin modificar los resultados de búsqueda

function cancelarBusquedaOrden() {
    if (!sesionActiva) {
        return;
    }

    mostrarPanelPrincipal();

    botonBuscarOrden.focus();
}

/* Búsqueda de órdenes de demostración */

// Comparar nombres sin distinguir tildes ni mayúsculas.

function normalizarNombreBusqueda(valor) {
    return valor
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLocaleLowerCase("es")
        .trim()
        .replace(/ +/g, " ");
}

// Comparar documentos sin separadores de presentación.

function normalizarDocumentoBusqueda(valor) {
    return valor.replace(/[.\s-]/gu, "");
}

// Mostrar la X únicamente cuando el campo tiene contenido.

function actualizarBotonLimpiarBusqueda() {
    botonLimpiarBusquedaOrden.hidden =
        criterioBuscarOrden.value.length === 0;
}

// Vaciar el campo sin modificar resultados ni resaltados.

function limpiarCampoBusquedaOrden() {
    criterioBuscarOrden.value = "";
    mensajeBusquedaOrden.textContent = "";

    actualizarBotonLimpiarBusqueda();

    criterioBuscarOrden.focus();
}

// Mostrar las filas utilizando la plantilla del HTML.

function mostrarResultadosBusquedaOrden() {
    const fragmento = document.createDocumentFragment();

    resultadosBusquedaOrden.forEach(orden => {
        const contenido = plantillaResultadoOrden.content
            .cloneNode(true);

        const fila = contenido.querySelector("tr");

        fila.dataset.numeroOrden = orden.numero;

        fila.classList.toggle(
            "es-coincidencia",
            coincidenciasBusquedaOrden.has(orden.numero)
        );

        const [anio, mes, dia] = orden.fecha.split("-");

        const columnas = {
            numero: orden.numero,
            fecha: `${dia}/${mes}/${anio}`,
            cliente: orden.cliente,
            telefono: orden.telefono,
            documento: orden.documento,
            items: orden.herramientas.length
        };

        Object.entries(columnas).forEach(([columna, valor]) => {
            contenido.querySelector(
                `[data-columna="${columna}"]`
            ).textContent = String(valor);
        });

        // Se habilitará al conectar la carga de la orden.

        contenido.querySelector(
            '[data-accion="abrir-orden"]'
        ).disabled = true;

        fragmento.append(contenido);
    });

    cuerpoResultadosOrden.replaceChildren(fragmento);
}

// Buscar por número de orden, documento o nombre completo.

function ejecutarBusquedaOrden(evento) {
    evento.preventDefault();

    if (!sesionActiva) {
        return;
    }

    const criterio = criterioBuscarOrden.value.trim();

    mensajeBusquedaOrden.textContent = "";

    if (criterio === "") {
        resultadosBusquedaOrden = [...ordenesDemostracion];
        busquedaOrdenRealizada = false;

        mostrarResultadosBusquedaOrden();

        mensajeBusquedaOrden.textContent =
            `Se muestran las ${ordenesDemostracion.length} órdenes.`;

        return;
    }

    // El número exacto de orden tiene prioridad sobre el documento.

    const ordenExacta = ordenesDemostracion.find(
        orden => orden.numero === criterio
    );

    let encontradas;

    if (ordenExacta) {
        encontradas = [ordenExacta];
    } else {
        const nombre = normalizarNombreBusqueda(criterio);

        const documento = normalizarDocumentoBusqueda(criterio);

        encontradas = ordenesDemostracion.filter(orden => {
            const coincideNombre =
                normalizarNombreBusqueda(orden.cliente) === nombre;

            const coincideDocumento =
                normalizarDocumentoBusqueda(orden.documento) ===
                documento;

            return coincideNombre || coincideDocumento;
        });
    }

    if (encontradas.length === 0) {
        mensajeBusquedaOrden.textContent =
            "No existe un registro que coincida con la búsqueda.";

        return;
    }

    if (ordenExacta) {
        // Una búsqueda por número muestra únicamente esa orden.

        resultadosBusquedaOrden = [ordenExacta];
    } else {
        // La primera búsqueda sustituye la lista inicial.
        // Las siguientes agregan coincidencias sin duplicarlas.

        if (!busquedaOrdenRealizada) {
            resultadosBusquedaOrden = [];
        }

        const numerosVisibles = new Set(
            resultadosBusquedaOrden.map(orden => orden.numero)
        );

        encontradas.forEach(orden => {
            if (!numerosVisibles.has(orden.numero)) {
                resultadosBusquedaOrden.push(orden);
                numerosVisibles.add(orden.numero);
            }
        });
    }

    encontradas.forEach(orden => {
        coincidenciasBusquedaOrden.add(orden.numero);
    });

    busquedaOrdenRealizada = true;

    mostrarResultadosBusquedaOrden();

    mensajeBusquedaOrden.textContent = encontradas.length === 1
        ? "Se encontró 1 orden."
        : `Se encontraron ${encontradas.length} órdenes.`;
}

// Restablecer los resultados al limpiar el formulario por cierre de sesión.

function restablecerBusquedaOrden() {
    resultadosBusquedaOrden = [...ordenesDemostracion];

    coincidenciasBusquedaOrden.clear();

    busquedaOrdenRealizada = false;

    mensajeBusquedaOrden.textContent = "";
    botonLimpiarBusquedaOrden.hidden = true;

    mostrarResultadosBusquedaOrden();
}

/* Preparación y navegación de facturas */

// Obtener una fecha local con el formato del campo date.

function obtenerFechaLocal() {
    const hoy = new Date();

    const anio = hoy.getFullYear();

    const mes = String(
        hoy.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        hoy.getDate()
    ).padStart(2, "0");

    return `${anio}-${mes}-${dia}`;
}

// Crear una fila compartida con identificadores únicos.

function crearFilaItemDocumento(cuerpoDestino, tipoDocumento) {
    secuenciaItemDocumento++;

    const identificador = secuenciaItemDocumento;

    const contenido = plantillaItemFactura.content.cloneNode(true);

    const fila = contenido.querySelector("tr");

    fila.dataset.itemDocumento = String(identificador);
    fila.dataset.tipoDocumento = tipoDocumento;

    // Conservar el atributo que ya utilizaban las filas de factura.
    if (tipoDocumento === "factura") {
        fila.dataset.itemFactura = String(identificador);
    }

    fila.querySelectorAll("[data-campo-item]").forEach(campo => {
        const tipoCampo = campo.dataset.campoItem;

        const idCampo =
            `${tipoCampo}-item-${identificador}-${tipoDocumento}`;

        const error = fila.querySelector(
            `[data-error-item="${tipoCampo}"]`
        );

        const ayuda = fila.querySelector(
            `[data-texto-ayuda-item="${tipoCampo}"]`
        );

        const boton = fila.querySelector(
            `[data-ayuda-item="${tipoCampo}"]`
        );

        campo.id = idCampo;
        campo.name = `items[${identificador}][${tipoCampo}]`;

        error.id = `error-${idCampo}`;

        const descripciones = [error.id];

        if (ayuda) {
            ayuda.id = `ayuda-${idCampo}`;
            descripciones.push(ayuda.id);
        }

        if (boton && ayuda) {
            boton.dataset.ayudaCampo = idCampo;
            boton.setAttribute("aria-controls", ayuda.id);
        }

        campo.setAttribute(
            "aria-describedby",
            descripciones.join(" ")
        );
    });

    // Se habilitará al conectar la edición del detalle.
    fila.querySelector(
        '[data-accion-item="eliminar"]'
    ).disabled = true;

    cuerpoDestino.append(contenido);

    return fila;
}

// Mantener las llamadas existentes de factura.

function crearFilaItemFactura() {
    return crearFilaItemDocumento(
        cuerpoItemsFactura,
        "factura"
    );
}

// Abrir la factura sin borrar un borrador de la misma sesión.

function mostrarPantallaCrearFactura() {
    if (!sesionActiva) {
        return;
    }

    if (!fechaFactura.value) {
        fechaFactura.value = obtenerFechaLocal();
    }

    if (cuerpoItemsFactura.children.length === 0) {
        crearFilaItemFactura();
    }

    cambiarPantallaInterna(pantallaCrearFactura);

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

// Descartar el contenido del formulario de factura.

function restablecerFactura() {
    if (dialogoReemplazarFactura.open) {
        dialogoReemplazarFactura.close();
    }

    formularioFactura.reset();

    cuerpoItemsFactura.replaceChildren();

    mensajeFormularioFactura.textContent = "";

    origenFactura.textContent = "";
    origenFactura.hidden = true;
}

// Cancelar la factura y regresar al panel.

function cancelarFactura() {
    if (!sesionActiva) {
        return;
    }

    restablecerFactura();

    mostrarPanelPrincipal();

    botonCrearFactura.focus();
}

/* Preparación y navegación de cotizaciones */

// Abrir sin borrar un borrador de la misma sesión.

function mostrarPantallaCrearCotizacion() {
    if (!sesionActiva) {
        return;
    }

    if (!fechaCotizacion.value) {
        fechaCotizacion.value = obtenerFechaLocal();
    }

    if (cuerpoItemsCotizacion.children.length === 0) {
        crearFilaItemDocumento(
            cuerpoItemsCotizacion,
            "cotizacion"
        );
    }

    cambiarPantallaInterna(pantallaCrearCotizacion);

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

// Descartar el contenido y limpiar mensajes del documento.

function restablecerCotizacion() {
    formularioCotizacion.reset();

    formularioCotizacion.querySelectorAll("input").forEach(campo => {
        camposRevisados.delete(campo);
        mostrarErrorFormulario(campo, "");
    });

    cuerpoItemsCotizacion.replaceChildren();

    const errorItems = document.getElementById(
        "error-items-cotizacion"
    );

    errorItems.textContent = "";
    errorItems.hidden = true;

    mensajeFormularioCotizacion.textContent = "";

    origenCotizacion.textContent = "";
    origenCotizacion.hidden = true;
}

// Cancelar y regresar al panel.

function cancelarCotizacion() {
    if (!sesionActiva) {
        return;
    }

    restablecerCotizacion();

    mostrarPanelPrincipal();

    botonCrearCotizacion.focus();
}

/* Navegación y búsqueda de facturas */

// Abrir la pantalla conservando sus resultados durante la sesión.

function mostrarPantallaBuscarFactura() {
    if (!sesionActiva) {
        return;
    }

    cambiarPantallaInterna(pantallaBuscarFactura);

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

// Regresar al panel.

function cancelarBusquedaFactura() {
    if (!sesionActiva) {
        return;
    }

    mostrarPanelPrincipal();

    botonBuscarFactura.focus();
}

// Mostrar la X cuando el campo tenga contenido.

function actualizarBotonLimpiarFactura() {
    botonLimpiarBusquedaFactura.hidden =
        criterioBuscarFactura.value.length === 0;
}

// Impedir la escritura de contenido que no sea numérico.

function comprobarEntradaNumeroFactura(evento) {
    if (
        evento.isComposing ||
        evento.data == null ||
        !evento.cancelable
    ) {
        return;
    }

    if (!/^[0-9]*$/.test(evento.data)) {
        evento.preventDefault();

        mostrarErrorFormulario(
            criterioBuscarFactura,
            mensajeNumeroFacturaInvalido
        );
    }
}

// Rechazar el pegado completo si contiene caracteres no permitidos.

function comprobarPegadoNumeroFactura(evento) {
    if (!evento.clipboardData) {
        return;
    }

    const contenido = evento.clipboardData.getData("text");

    if (!/^[0-9]*$/.test(contenido)) {
        evento.preventDefault();

        mostrarErrorFormulario(
            criterioBuscarFactura,
            mensajeNumeroFacturaInvalido
        );
    }
}

// Cubrir cambios que no pudieron bloquearse antes de insertarse.

function revisarNumeroFactura() {
    const valor = criterioBuscarFactura.value;

    if (!/^[0-9]*$/.test(valor)) {
        criterioBuscarFactura.value = ultimoNumeroFacturaValido;

        mostrarErrorFormulario(
            criterioBuscarFactura,
            mensajeNumeroFacturaInvalido
        );
    } else {
        ultimoNumeroFacturaValido = valor;

        mostrarErrorFormulario(
            criterioBuscarFactura,
            ""
        );
    }

    actualizarBotonLimpiarFactura();
}

// Limpiar el campo sin borrar resultados ni resaltados.

function limpiarCampoBusquedaFactura() {
    criterioBuscarFactura.value = "";
    ultimoNumeroFacturaValido = "";

    mensajeBusquedaFactura.textContent = "";

    mostrarErrorFormulario(criterioBuscarFactura, "");

    actualizarBotonLimpiarFactura();

    criterioBuscarFactura.focus();
}

// Construir las filas a partir de la plantilla HTML.

function mostrarResultadosBusquedaFactura() {
    const fragmento = document.createDocumentFragment();

    resultadosBusquedaFactura.forEach(factura => {
        const contenido = plantillaResultadoFactura.content
            .cloneNode(true);

        const fila = contenido.querySelector("tr");

        fila.dataset.numeroFactura = factura.numero;

        fila.classList.toggle(
            "es-coincidencia",
            coincidenciasBusquedaFactura.has(factura.numero)
        );

        const [anio, mes, dia] = factura.fecha.split("-");

        const columnas = {
            "numero-factura": factura.numero,
            "numero-orden": factura.numeroOrden || "Sin orden asociada",
            fecha: `${dia}/${mes}/${anio}`,
            cliente: factura.cliente,
            telefono: factura.telefono,
            nit: factura.nit,
            items: factura.items
        };

        Object.entries(columnas).forEach(([columna, valor]) => {
            contenido.querySelector(
                `[data-columna="${columna}"]`
            ).textContent = String(valor);
        });

        fragmento.append(contenido);
    });

    cuerpoResultadosFactura.replaceChildren(fragmento);
}

// Buscar únicamente por número exacto de factura.

function ejecutarBusquedaFactura(evento) {
    evento.preventDefault();

    if (!sesionActiva) {
        return;
    }

    const numero = criterioBuscarFactura.value;

    if (!/^[0-9]*$/.test(numero)) {
        mostrarErrorFormulario(
            criterioBuscarFactura,
            mensajeNumeroFacturaInvalido
        );

        criterioBuscarFactura.focus();
        return;
    }

    mostrarErrorFormulario(criterioBuscarFactura, "");

    ultimoNumeroFacturaValido = numero;

    mensajeBusquedaFactura.textContent = "";

    if (numero === "") {
        resultadosBusquedaFactura = [...facturasDemostracion];

        mostrarResultadosBusquedaFactura();

        mensajeBusquedaFactura.textContent =
        "Ingrese el número de factura a consultar.";

        return;
    }

    const factura = facturasDemostracion.find(
        registro => registro.numero === numero
    );

    if (!factura) {
        mensajeBusquedaFactura.textContent =
            "No existe una factura con ese número.";

        return;
    }

    resultadosBusquedaFactura = [factura];

    coincidenciasBusquedaFactura.add(factura.numero);

    mostrarResultadosBusquedaFactura();

    mensajeBusquedaFactura.textContent =
        `Se encontró la factura ${factura.numero}.`;
}

// Limpiar el estado de búsqueda al restablecer el formulario.

function restablecerBusquedaFactura() {
    ultimoNumeroFacturaValido = "";

    resultadosBusquedaFactura = [...facturasDemostracion];

    coincidenciasBusquedaFactura.clear();

    mensajeBusquedaFactura.textContent = "";
    botonLimpiarBusquedaFactura.hidden = true;

    mostrarErrorFormulario(criterioBuscarFactura, "");

    mostrarResultadosBusquedaFactura();
}

/* Navegación y búsqueda de cotizaciones */

// Abrir conservando el campo, los resultados y los resaltados.

function mostrarPantallaBuscarCotizacion() {
    if (!sesionActiva) {
        return;
    }

    cambiarPantallaInterna(pantallaBuscarCotizacion);

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

// Volver al panel sin borrar la búsqueda.

function cancelarBusquedaCotizacion() {
    if (!sesionActiva) {
        return;
    }

    mostrarPanelPrincipal();

    botonBuscarCotizacion.focus();
}

// Mostrar la X solo cuando hay contenido.

function actualizarBotonLimpiarCotizacion() {
    botonLimpiarBusquedaCotizacion.hidden =
        criterioBuscarCotizacion.value.length === 0;
}

// Bloquear la escritura de caracteres no permitidos.

function comprobarEntradaNumeroCotizacion(evento) {
    if (
        evento.isComposing ||
        evento.data == null ||
        !evento.cancelable
    ) {
        return;
    }

    if (!/^[0-9]*$/.test(evento.data)) {
        evento.preventDefault();

        mostrarErrorFormulario(
            criterioBuscarCotizacion,
            mensajeNumeroCotizacionInvalido
        );
    }
}

// Rechazar el pegado completo si contiene letras, espacios o signos.

function comprobarPegadoNumeroCotizacion(evento) {
    if (!evento.clipboardData) {
        return;
    }

    const contenido = evento.clipboardData.getData("text");

    if (!/^[0-9]*$/.test(contenido)) {
        evento.preventDefault();

        mostrarErrorFormulario(
            criterioBuscarCotizacion,
            mensajeNumeroCotizacionInvalido
        );
    }
}

// Revisar entradas que no pudieron bloquearse previamente.

function revisarNumeroCotizacion(evento) {
    if (evento?.isComposing) {
        return;
    }

    const valor = criterioBuscarCotizacion.value;

    if (!/^[0-9]*$/.test(valor)) {
        criterioBuscarCotizacion.value = ultimoNumeroCotizacionValido;

        mostrarErrorFormulario(
            criterioBuscarCotizacion,
            mensajeNumeroCotizacionInvalido
        );
    } else {
        ultimoNumeroCotizacionValido = valor;

        mostrarErrorFormulario(
            criterioBuscarCotizacion,
            ""
        );
    }

    actualizarBotonLimpiarCotizacion();
}

// Limpiar el campo sin modificar resultados ni resaltados.

function limpiarCampoBusquedaCotizacion() {
    criterioBuscarCotizacion.value = "";
    ultimoNumeroCotizacionValido = "";

    mensajeBusquedaCotizacion.textContent = "";

    mostrarErrorFormulario(criterioBuscarCotizacion, "");

    actualizarBotonLimpiarCotizacion();

    criterioBuscarCotizacion.focus();
}

// Construir las filas desde la plantilla HTML.

function mostrarResultadosBusquedaCotizacion() {
    const fragmento = document.createDocumentFragment();

    resultadosBusquedaCotizacion.forEach(cotizacion => {
        const contenido = plantillaResultadoCotizacion.content
            .cloneNode(true);

        const fila = contenido.querySelector("tr");

        fila.dataset.numeroCotizacion = cotizacion.numero;

        fila.classList.toggle(
            "es-coincidencia",
            coincidenciasBusquedaCotizacion.has(cotizacion.numero)
        );

        const [anio, mes, dia] = cotizacion.fecha.split("-");

        const columnas = {
            "numero-cotizacion": cotizacion.numero,
            "numero-orden": cotizacion.numeroOrden || "Sin orden asociada",
            fecha: `${dia}/${mes}/${anio}`,
            cliente: cotizacion.cliente,
            telefono: cotizacion.telefono,
            nit: cotizacion.nit,
            items: cotizacion.items
        };

        Object.entries(columnas).forEach(([columna, valor]) => {
            contenido.querySelector(
                `[data-columna="${columna}"]`
            ).textContent = String(valor);
        });

        // Pendiente de conectar la apertura del documento.
        contenido.querySelector(
            '[data-accion="abrir-cotizacion"]'
        ).disabled = true;

        fragmento.append(contenido);
    });

    cuerpoResultadosCotizacion.replaceChildren(fragmento);
}

// Buscar únicamente por número exacto de cotización.

function ejecutarBusquedaCotizacion(evento) {
    evento.preventDefault();

    if (!sesionActiva) {
        return;
    }

    const numero = criterioBuscarCotizacion.value;

    if (!/^[0-9]*$/.test(numero)) {
        mostrarErrorFormulario(
            criterioBuscarCotizacion,
            mensajeNumeroCotizacionInvalido
        );

        criterioBuscarCotizacion.focus();
        return;
    }

    mostrarErrorFormulario(criterioBuscarCotizacion, "");

    ultimoNumeroCotizacionValido = numero;

    mensajeBusquedaCotizacion.textContent = "";

    if (numero === "") {
        resultadosBusquedaCotizacion = [...cotizacionesDemostracion];

        mostrarResultadosBusquedaCotizacion();

        mensajeBusquedaCotizacion.textContent =
            "Ingrese el número de cotización a consultar.";

        return;
    }

    const cotizacion = cotizacionesDemostracion.find(
        registro => registro.numero === numero
    );

    if (!cotizacion) {
        mensajeBusquedaCotizacion.textContent =
            "No existe una cotización con ese número.";

        return;
    }

    resultadosBusquedaCotizacion = [cotizacion];

    coincidenciasBusquedaCotizacion.add(cotizacion.numero);

    mostrarResultadosBusquedaCotizacion();

    mensajeBusquedaCotizacion.textContent =
        `Se encontró la cotización ${cotizacion.numero}.`;
}

// Restablecer el estado al reiniciar el formulario.

function restablecerBusquedaCotizacion() {
    criterioBuscarCotizacion.value = "";
    ultimoNumeroCotizacionValido = "";

    resultadosBusquedaCotizacion = [...cotizacionesDemostracion];

    coincidenciasBusquedaCotizacion.clear();

    mensajeBusquedaCotizacion.textContent = "";

    mostrarErrorFormulario(criterioBuscarCotizacion, "");

    actualizarBotonLimpiarCotizacion();

    mostrarResultadosBusquedaCotizacion();
}

/* Datos del menú lateral */

// Preparar los datos al comenzar la sesión demostrativa

function prepararDatosMenu() {
    nombreUsuarioMenu.textContent = usuarioDemostracion.nombre;
    correoUsuarioMenu.textContent = usuarioDemostracion.correo;

    fechaEntradaMenu.textContent = fechaInicioSesion.toLocaleDateString(
        "es-CO",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

    fechaEntradaMenu.dateTime = fechaInicioSesion.toISOString();

    ultimoInicioMenu.textContent = usuarioDemostracion.ultimoInicio;

    const perfilSeleccionado =
        tipoUsuario.options[tipoUsuario.selectedIndex];

    rolUsuarioMenu.textContent = perfilSeleccionado.textContent;

    actualizarHoraMenu();
}

// Mostrar la hora actual del dispositivo

function actualizarHoraMenu() {
    const ahora = new Date();

    horaActualMenu.textContent = ahora.toLocaleTimeString(
        "es-CO",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }
    );

    horaActualMenu.dateTime = ahora.toISOString();
}


/* Apertura y cierre del menú lateral */

// Abrir únicamente después de entrar al sistema

function abrirMenu() {
    if (!sesionActiva || menuLateral.open) {
        return;
    }

    actualizarHoraMenu();

    menuLateral.showModal();
    botonMenu.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-abierto");

    intervaloReloj = window.setInterval(actualizarHoraMenu, 1000);

    botonCerrarMenu.focus();
}

// Solicitar el cierre del menú

function cerrarMenu() {
    if (menuLateral.open) {
        menuLateral.close();
    }
}

// Restablecer el estado después de cualquier cierre,
// incluido el cierre mediante la tecla Escape

function finalizarCierreMenu() {
    window.clearInterval(intervaloReloj);
    intervaloReloj = null;

    botonMenu.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-abierto");

    if (sesionActiva) {
        botonMenu.focus();
    }
}


/* Navegación desde el menú lateral */

// Volver al panel sin comenzar otra sesión

function volverAlPanelDesdeMenu() {
    if (!sesionActiva) {
        return;
    }

    mostrarPanelPrincipal();
    cerrarMenu();
}

// Salir de la sesión demostrativa y volver al acceso

function cerrarSesion() {
    if (!sesionActiva) {
        return;
    }

    sesionActiva = false;
    fechaInicioSesion = null;

    cerrarMenu();

    if (dialogoOrdenesCliente.open) {
    dialogoOrdenesCliente.close();
    }

    pantallasInternas.forEach((opcion, pantalla) => {
    pantalla.hidden = true;
    opcion.removeAttribute("aria-current");
    });

    pantallaRecuperar.hidden = true;

    formularioOrden.reset();
    mensajeFormularioOrden.textContent = "";

    formularioBuscarOrden.reset();
    mensajeBusquedaOrden.textContent = "";

    formularioBuscarFactura.reset();
    formularioBuscarCotizacion.reset();

    restablecerFactura();
    restablecerCotizacion();

    tarjetaAcceso.hidden = false;

    logoEncabezado.hidden = false;
    botonMenu.hidden = true;
    tituloEncabezado.textContent = "ManSys";

    formularioInicio.reset();

    selectorTipoUsuario.hidden = true;
    botonTipoUsuario.setAttribute("aria-expanded", "false");

    cambiarPantallaAcceso(pantallaInicio, botonInicio);

    campoUsuario.focus();
}

/* Selector del tipo de usuario */

// Mostrar u ocultar la lista de perfiles

function alternarSelectorTipoUsuario() {
    const mostrarSelector = selectorTipoUsuario.hidden;

    selectorTipoUsuario.hidden = !mostrarSelector;

    botonTipoUsuario.setAttribute(
        "aria-expanded",
        String(mostrarSelector)
    );

    if (mostrarSelector) {
        tipoUsuario.focus();
    }
}

/* Validación compartida de inicio de sesión y registro */

const perfilesAccesoPermitidos = new Set([
    "administrador",
    "recepcionista",
    "tecnico"
]);

const camposAcceso = [
    tipoUsuario,
    campoUsuario,
    campoContrasena
];

const camposRegistro = Array.from(
    formularioRegistro.querySelectorAll("input, select")
);

const camposRevisados = new Set();

const mensajeRegistro = document.getElementById("mensaje-registro");

// Mostrar errores con o sin botón de ayuda.

function mostrarErrorFormulario(campo, mensaje) {
    const error = document.getElementById(`error-${campo.id}`);
    const ayuda = document.getElementById(`ayuda-${campo.id}`);

    const boton = campo.form?.querySelector(
        `[data-ayuda-campo="${campo.id}"]`
    );

    const hayError = mensaje !== "";

    campo.setCustomValidity(mensaje);

    if (hayError) {
        campo.setAttribute("aria-invalid", "true");
    } else {
        campo.removeAttribute("aria-invalid");
    }

    if (error) {
        error.textContent = mensaje;
        error.hidden = !hayError;
    }

    if (boton) {
        boton.hidden = !hayError;
    }

    if (!hayError) {
        if (ayuda) {
            ayuda.hidden = true;
        }

        if (boton) {
            boton.setAttribute("aria-expanded", "false");
        }
    }
}

// Obtener el mensaje según el campo y su contenido

function obtenerErrorFormulario(campo) {
    if (campo.disabled || campo.readOnly) {
        return "";
    }

    const valor = campo.value;

    // Un número mal escrito no debe confundirse con un campo vacío.

    if (campo.type === "number" && campo.validity.badInput) {
        return "Escribe un número válido.";
    }

    const estaVacio = campo.type === "password"
        ? valor.length === 0
        : valor.trim().length === 0;

    if (estaVacio) {
        if (!campo.required) {
            return "";
        }

        const etiqueta =
            campo.labels?.[0]?.textContent ||
            campo.getAttribute("aria-label") ||
            campo.name ||
            "solicitado";

        const nombreCampo = etiqueta
            .replace(/\*/g, "")
            .replace(/\s+/g, " ")
            .trim();

        return `Es obligatorio completar el campo «${nombreCampo}».`;
    }

    // Respetar los límites declarados en los campos numéricos.

    if (campo.type === "number") {
        if (campo.validity.rangeUnderflow) {
            return `El valor mínimo permitido es ${campo.min}.`;
        }

        if (campo.validity.rangeOverflow) {
            return `El valor máximo permitido es ${campo.max}.`;
        }

        if (campo.validity.stepMismatch) {
            return `Usa un valor compatible con el incremento ${campo.step}.`;
        }
    }

    switch (campo.id) {
        case "tipo-usuario":
        case "perfil-registro":
            return perfilesAccesoPermitidos.has(valor)
                ? ""
                : "Selecciona uno de los perfiles disponibles.";

        case "usuario":
            return (
                /^[\p{L}\p{M}\p{N}._-]+$/u.test(valor) &&
                /[\p{L}\p{N}]/u.test(valor)
            )
                ? ""
                : "El usuario tiene un formato incorrecto. Revisa la ayuda.";

        case "nombres-registro":
        case "apellidos-registro": {
            const nombre = valor.normalize("NFC").trim();

            return /^\p{L}+(?: +\p{L}+)*$/u.test(nombre)
                ? ""
                : "Usa únicamente letras y espacios, sin números ni signos.";
        }

        case "documento-registro":
            return /^[0-9]+$/.test(valor)
                ? ""
                : "Escribe la cédula solo con números, sin puntos ni espacios.";

        case "celular-registro":
            return /^\+?[0-9]+$/.test(valor)
                ? ""
                : "Usa números y, opcionalmente, un + al principio.";

        case "correo-registro":
            return (
                campo.validity.typeMismatch ||
                /\s/u.test(valor)
            )
                ? "Escribe una dirección de correo con formato válido."
                : "";

        case "contrasena-registro": {
            const longitud = Array.from(valor).length;

            return longitud >= 15 && longitud <= 128
                ? ""
                : "La contraseña debe tener entre 15 y 128 caracteres.";
        }

        case "repita-contrasena-registro":
            return valor === contrasenaRegistro.value
                ? ""
                : "Las contraseñas no coinciden.";

        default:
            return "";
    }
}

// Validar y presentar el resultado de un campo

function validarCampoFormulario(campo) {
    const mensaje = obtenerErrorFormulario(campo);

    mostrarErrorFormulario(campo, mensaje);

    return mensaje === "";
}

// Revisar todos los campos y devolver el primero incorrecto

function validarFormulario(campos) {
    let primerCampoInvalido = null;

    campos.forEach(campo => {
        camposRevisados.add(campo);

        const valido = validarCampoFormulario(campo);

        if (!valido && primerCampoInvalido === null) {
            primerCampoInvalido = campo;
        }
    });

    return primerCampoInvalido;
}

// Conectar la misma interacción a cada formulario

function prepararValidacionFormulario(formulario, campos) {
    campos.forEach(campo => {
        campo.addEventListener("blur", () => {
            camposRevisados.add(campo);
            validarCampoFormulario(campo);
        });

        const eventoCambio = campo.tagName === "SELECT"
            ? "change"
            : "input";

        campo.addEventListener(eventoCambio, evento => {
            if (evento.isComposing) {
                return;
            }

            if (formulario === formularioRegistro) {
                mensajeRegistro.hidden = true;
            }

            if (camposRevisados.has(campo)) {
                validarCampoFormulario(campo);
            }

            if (
                campo === contrasenaRegistro &&
                camposRevisados.has(repetirContrasenaRegistro)
            ) {
                validarCampoFormulario(repetirContrasenaRegistro);
            }
        });
    });

    formulario
        .querySelectorAll("[data-ayuda-campo]")
        .forEach(boton => {
            boton.addEventListener("click", () => {
                const ayuda = document.getElementById(
                    boton.getAttribute("aria-controls")
                );

                ayuda.hidden = !ayuda.hidden;

                boton.setAttribute(
                    "aria-expanded",
                    String(!ayuda.hidden)
                );
            });
        });

    formulario.addEventListener("reset", () => {
        campos.forEach(campo => {
            camposRevisados.delete(campo);
            mostrarErrorFormulario(campo, "");
        });

        if (formulario === formularioRegistro) {
            mensajeRegistro.hidden = true;
        }
    });
}

// Navegación de búsqueda de cotizaciones

botonBuscarCotizacion.addEventListener(
    "click",
    mostrarPantallaBuscarCotizacion
);

opcionBuscarCotizacionMenu.addEventListener(
    "click",
    mostrarPantallaBuscarCotizacion
);

botonCancelarBusquedaCotizacion.addEventListener(
    "click",
    cancelarBusquedaCotizacion
);

// Control del número de cotización

criterioBuscarCotizacion.addEventListener(
    "beforeinput",
    comprobarEntradaNumeroCotizacion
);

criterioBuscarCotizacion.addEventListener(
    "paste",
    comprobarPegadoNumeroCotizacion
);

criterioBuscarCotizacion.addEventListener(
    "input",
    revisarNumeroCotizacion
);

criterioBuscarCotizacion.addEventListener(
    "compositionend",
    revisarNumeroCotizacion
);

botonLimpiarBusquedaCotizacion.addEventListener(
    "click",
    limpiarCampoBusquedaCotizacion
);

formularioBuscarCotizacion.addEventListener(
    "submit",
    ejecutarBusquedaCotizacion
);

formularioBuscarCotizacion.addEventListener(
    "reset",
    restablecerBusquedaCotizacion
);

/* Eventos de la interfaz */

// Apertura y cierre del menú lateral

botonMenu.addEventListener("click", abrirMenu);
botonCerrarMenu.addEventListener("click", cerrarMenu);
menuLateral.addEventListener("close", finalizarCierreMenu);

// Navegación desde el menú lateral

opcionInicioMenu.addEventListener("click", volverAlPanelDesdeMenu);
opcionCerrarSesion.addEventListener("click", cerrarSesion);

// Navegación de creación de órdenes

botonCrearOrden.addEventListener(
    "click",
    mostrarPantallaCrearOrden
);

opcionCrearOrdenMenu.addEventListener(
    "click",
    mostrarPantallaCrearOrden
);

botonCancelarOrden.addEventListener(
    "click",
    cancelarOrden
);

// Navegación de búsqueda de órdenes

botonBuscarOrden.addEventListener(
    "click",
    mostrarPantallaBuscarOrden
);

opcionBuscarOrdenMenu.addEventListener(
    "click",
    mostrarPantallaBuscarOrden
);

botonCancelarBusquedaOrden.addEventListener(
    "click",
    cancelarBusquedaOrden
);

// Navegación de creación de facturas

botonCrearFactura.addEventListener(
    "click",
    mostrarPantallaCrearFactura
);

opcionCrearFacturaMenu.addEventListener(
    "click",
    mostrarPantallaCrearFactura
);

botonCancelarFactura.addEventListener(
    "click",
    cancelarFactura
);

// Navegación de creación de cotizaciones

botonCrearCotizacion.addEventListener(
    "click",
    mostrarPantallaCrearCotizacion
);

opcionCrearCotizacionMenu.addEventListener(
    "click",
    mostrarPantallaCrearCotizacion
);

botonCancelarCotizacion.addEventListener(
    "click",
    cancelarCotizacion
);

// Evitar un envío nativo mientras conectamos el guardado.

formularioCotizacion.addEventListener("submit", evento => {
    evento.preventDefault();
});

// Navegación de búsqueda de facturas

botonBuscarFactura.addEventListener(
    "click",
    mostrarPantallaBuscarFactura
);

opcionBuscarFacturaMenu.addEventListener(
    "click",
    mostrarPantallaBuscarFactura
);

botonCancelarBusquedaFactura.addEventListener(
    "click",
    cancelarBusquedaFactura
);

// Control del número de factura

criterioBuscarFactura.addEventListener(
    "beforeinput",
    comprobarEntradaNumeroFactura
);

criterioBuscarFactura.addEventListener(
    "paste",
    comprobarPegadoNumeroFactura
);

criterioBuscarFactura.addEventListener(
    "input",
    revisarNumeroFactura
);

criterioBuscarFactura.addEventListener(
    "compositionend",
    revisarNumeroFactura
);

botonLimpiarBusquedaFactura.addEventListener(
    "click",
    limpiarCampoBusquedaFactura
);

formularioBuscarFactura.addEventListener(
    "submit",
    ejecutarBusquedaFactura
);

formularioBuscarFactura.addEventListener(
    "reset",
    restablecerBusquedaFactura
);

// Campo y ejecución de búsqueda

criterioBuscarOrden.addEventListener(
    "input",
    actualizarBotonLimpiarBusqueda
);

botonLimpiarBusquedaOrden.addEventListener(
    "click",
    limpiarCampoBusquedaOrden
);

formularioBuscarOrden.addEventListener(
    "submit",
    ejecutarBusquedaOrden
);

formularioBuscarOrden.addEventListener(
    "reset",
    restablecerBusquedaOrden
);

// Opciones de acceso

botonInicio.addEventListener("click", () => {
    cambiarPantallaAcceso(pantallaInicio, botonInicio);
});

botonRegistro.addEventListener("click", () => {
    cambiarPantallaAcceso(pantallaRegistro, botonRegistro);
});

botonConsulta.addEventListener("click", () => {
    cambiarPantallaAcceso(pantallaConsulta, botonConsulta);
});

// Selector del tipo de usuario

botonTipoUsuario.addEventListener("click", alternarSelectorTipoUsuario);

// Preparar la interacción compartida de los dos formularios

prepararValidacionFormulario(
    formularioInicio,
    camposAcceso
);

prepararValidacionFormulario(
    formularioRegistro,
    camposRegistro
);

// Inicio de sesión: demostración sin autenticación

formularioInicio.addEventListener("submit", evento => {
    evento.preventDefault();

    const primerCampoInvalido = validarFormulario(camposAcceso);

    if (primerCampoInvalido === null) {
        mostrarPanelPrincipal();
        return;
    }

    if (primerCampoInvalido === tipoUsuario) {
        selectorTipoUsuario.hidden = false;

        botonTipoUsuario.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    primerCampoInvalido.focus();
});

// Recuperación de contraseña

botonRecuperar.addEventListener("click", mostrarRecuperacion);
botonVolverInicio.addEventListener("click", volverAlInicio);

formularioRecuperar.addEventListener("submit", (evento) => {
    evento.preventDefault();

    alert(
        "La recuperación de contraseña aún no está disponible. " +
        "Falta conectar el servidor para enviar el enlace por correo."
    );
});

// Registro de empleados: demostración sin creación de cuentas

formularioRegistro.addEventListener("submit", evento => {
    evento.preventDefault();

    mensajeRegistro.hidden = true;

    const primerCampoInvalido = validarFormulario(camposRegistro);

    if (primerCampoInvalido !== null) {
        primerCampoInvalido.focus();
        return;
    }

    mensajeRegistro.hidden = false;
});
// Consulta de órdenes de trabajo

formularioConsulta.addEventListener("submit", (evento) => {
    evento.preventDefault();

    alert(
        "La consulta de órdenes aún no está disponible. " +
        "Falta conectar el servidor y la base de datos para consultar el estado de tu equipo."
    );
});

/* Inicialización */

// Preparar la búsqueda de cotizaciones

botonCancelarBusquedaCotizacion.disabled = false;
botonEjecutarBusquedaCotizacion.disabled = false;

actualizarBotonLimpiarCotizacion();
mostrarResultadosBusquedaCotizacion();

// Habilitar la salida de la pantalla de órdenes

botonCancelarOrden.disabled = false;
botonCancelarBusquedaOrden.disabled = false;
botonCancelarFactura.disabled = false;
botonCancelarCotizacion.disabled = false;

// Preparar la búsqueda de facturas

botonCancelarBusquedaFactura.disabled = false;
botonEjecutarBusquedaFactura.disabled = false;

actualizarBotonLimpiarFactura();
mostrarResultadosBusquedaFactura();

// Preparar el buscador y sus registros de demostración

botonEjecutarBusquedaOrden.disabled = false;

actualizarBotonLimpiarBusqueda();
mostrarResultadosBusquedaOrden();

// Mostrar el inicio de sesión al cargar la página

cambiarPantallaAcceso(pantallaInicio, botonInicio);
