import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  title = 'mi-proyecto';

  // Angular entrega el servicio de usuarios automáticamente (inyección de dependencias)
  constructor(private auth: AuthService) {}

  ngAfterViewInit(): void {
    this.inicializarManSys();
  }

  inicializarManSys() {
    const auth = this.auth;
    let usuarioActual: Usuario | null = null;

    // Elementos del encabezado
    const logoEncabezado = document.getElementById("logo-encabezado") as HTMLImageElement;
    const botonMenu = document.getElementById("btn-menu") as HTMLButtonElement;
    const tituloEncabezado = document.getElementById("titulo-encabezado") as HTMLElement;

    // Elementos del menú lateral
    const menuLateral = document.getElementById("menu-lateral") as HTMLDialogElement;
    const botonCerrarMenu = document.getElementById("btn-cerrar-menu") as HTMLButtonElement;

    const nombreUsuarioMenu = document.getElementById("nombre-usuario-menu") as HTMLElement;
    const correoUsuarioMenu = document.getElementById("correo-usuario-menu") as HTMLElement;
    const fechaEntradaMenu = document.getElementById("fecha-entrada-menu") as HTMLTimeElement;
    const horaActualMenu = document.getElementById("hora-actual-menu") as HTMLTimeElement;
    const ultimoInicioMenu = document.getElementById("ultimo-inicio-menu") as HTMLTimeElement;
    const rolUsuarioMenu = document.getElementById("rol-usuario-menu") as HTMLElement;

    const opcionInicioMenu = document.getElementById("menu-inicio") as HTMLButtonElement;
    const opcionCerrarSesion = document.getElementById("menu-cerrar-sesion") as HTMLButtonElement;

    // Tarjeta de acceso
    const tarjetaAcceso = document.querySelector(".tarjeta-acceso") as HTMLElement;

    // Inicio de sesión y panel principal
    const formularioInicio = document.getElementById("formulario-inicio") as HTMLFormElement;
    const campoUsuario = document.getElementById("usuario") as HTMLInputElement;
    const campoContrasena = document.getElementById("contrasena") as HTMLInputElement;
    const pantallaPanel = document.getElementById("pantalla-panel") as HTMLElement;

    // Botones y pantallas de acceso
    const botonInicio = document.getElementById("btn-inicio") as HTMLButtonElement;
    const botonRegistro = document.getElementById("btn-registro") as HTMLButtonElement;
    const botonConsulta = document.getElementById("btn-consulta") as HTMLButtonElement;

    const pantallaInicio = document.getElementById("pantalla-inicio") as HTMLElement;
    const pantallaRegistro = document.getElementById("pantalla-registro") as HTMLElement;
    const pantallaConsulta = document.getElementById("pantalla-consulta") as HTMLElement;

    // Selector del tipo de usuario
    const botonTipoUsuario = document.getElementById("btn-tipo-usuario") as HTMLButtonElement;
    const selectorTipoUsuario = document.getElementById("selector-tipo-usuario") as HTMLElement;
    const tipoUsuario = document.getElementById("tipo-usuario") as HTMLSelectElement;

    // Recuperación y registro
    const botonRecuperar = document.getElementById("btn-recuperar") as HTMLButtonElement;
    const pantallaRecuperar = document.getElementById("pantalla-recuperar") as HTMLElement;
    const botonVolverInicio = document.getElementById("btn-volver-inicio") as HTMLButtonElement;
    const formularioRecuperar = document.getElementById("formulario-recuperar") as HTMLFormElement;

    const formularioRegistro = document.getElementById("formulario-registro") as HTMLFormElement;
    const contrasenaRegistro = document.getElementById("contrasena-registro") as HTMLInputElement;
    const repetirContrasenaRegistro = formularioRegistro.querySelectorAll('input[type="password"]')[1] as HTMLInputElement;
    const formularioConsulta = document.getElementById("formulario-consulta") as HTMLFormElement;

    // Órdenes (Crear y Buscar)
    const pantallaCrearOrden = document.getElementById("pantalla-crear-orden") as HTMLElement;
    const formularioOrden = document.getElementById("formulario-orden") as HTMLFormElement;
    const botonCrearOrden = document.getElementById("btn-crear-orden") as HTMLButtonElement;
    const opcionCrearOrdenMenu = document.getElementById("menu-crear-orden") as HTMLButtonElement;
    const botonCancelarOrden = document.getElementById("btn-cancelar-orden") as HTMLButtonElement;
    const fechaOrden = document.getElementById("fecha-orden") as HTMLInputElement;
    const mensajeFormularioOrden = document.getElementById("mensaje-formulario-orden") as HTMLElement;

    const pantallaBuscarOrden = document.getElementById("pantalla-buscar-orden") as HTMLElement;
    const formularioBuscarOrden = document.getElementById("formulario-buscar-orden") as HTMLFormElement;
    const botonBuscarOrden = document.getElementById("btn-buscar-orden") as HTMLButtonElement;
    const opcionBuscarOrdenMenu = document.getElementById("menu-buscar-orden") as HTMLButtonElement;
    const botonCancelarBusquedaOrden = document.getElementById("btn-cancelar-busqueda-orden") as HTMLButtonElement;
    const mensajeBusquedaOrden = document.getElementById("mensaje-busqueda-orden") as HTMLElement;
    const dialogoOrdenesCliente = document.getElementById("dialogo-ordenes-cliente") as HTMLDialogElement;
    const criterioBuscarOrden = document.getElementById("criterio-buscar-orden") as HTMLInputElement;
    const botonLimpiarBusquedaOrden = document.getElementById("btn-limpiar-busqueda-orden") as HTMLButtonElement;
    const botonEjecutarBusquedaOrden = document.getElementById("btn-ejecutar-busqueda-orden") as HTMLButtonElement;
    const cuerpoResultadosOrden = document.getElementById("cuerpo-resultados-orden") as HTMLElement;
    const plantillaResultadoOrden = document.getElementById("plantilla-resultado-orden") as HTMLTemplateElement;

    // Facturas (Crear y Buscar)
    const pantallaCrearFactura = document.getElementById("pantalla-crear-factura") as HTMLElement;
    const formularioFactura = document.getElementById("formulario-factura") as HTMLFormElement;
    const botonCrearFactura = document.getElementById("btn-crear-factura") as HTMLButtonElement;
    const opcionCrearFacturaMenu = document.getElementById("menu-crear-factura") as HTMLButtonElement;
    const botonCancelarFactura = document.getElementById("btn-cancelar-factura") as HTMLButtonElement;
    const fechaFactura = document.getElementById("fecha-factura") as HTMLInputElement;
    const cuerpoItemsFactura = document.getElementById("cuerpo-items-factura") as HTMLElement;
    const plantillaItemFactura = document.getElementById("plantilla-item-factura") as HTMLTemplateElement;
    const mensajeFormularioFactura = document.getElementById("mensaje-formulario-factura") as HTMLElement;
    const origenFactura = document.getElementById("origen-factura") as HTMLElement;
    const dialogoReemplazarFactura = document.getElementById("dialogo-reemplazar-factura") as HTMLDialogElement;

    const pantallaBuscarFactura = document.getElementById("pantalla-buscar-factura") as HTMLElement;
    const formularioBuscarFactura = document.getElementById("formulario-buscar-factura") as HTMLFormElement;
    const botonBuscarFactura = document.getElementById("btn-buscar-factura") as HTMLButtonElement;
    const opcionBuscarFacturaMenu = document.getElementById("menu-buscar-factura") as HTMLButtonElement;
    const criterioBuscarFactura = document.getElementById("criterio-buscar-factura") as HTMLInputElement;
    const botonLimpiarBusquedaFactura = document.getElementById("btn-limpiar-busqueda-factura") as HTMLButtonElement;
    const botonEjecutarBusquedaFactura = document.getElementById("btn-ejecutar-busqueda-factura") as HTMLButtonElement;
    const botonCancelarBusquedaFactura = document.getElementById("btn-cancelar-busqueda-factura") as HTMLButtonElement;
    const mensajeBusquedaFactura = document.getElementById("mensaje-busqueda-factura") as HTMLElement;
    const cuerpoResultadosFactura = document.getElementById("cuerpo-resultados-factura") as HTMLElement;
    const plantillaResultadoFactura = document.getElementById("plantilla-resultado-factura") as HTMLTemplateElement;

    // Cotizaciones (Crear y Buscar)
    const pantallaCrearCotizacion = document.getElementById("pantalla-crear-cotizacion") as HTMLElement;
    const formularioCotizacion = document.getElementById("formulario-cotizacion") as HTMLFormElement;
    const botonCrearCotizacion = document.getElementById("btn-crear-cotizacion") as HTMLButtonElement;
    const opcionCrearCotizacionMenu = document.getElementById("menu-crear-cotizacion") as HTMLButtonElement;
    const botonCancelarCotizacion = document.getElementById("btn-cancelar-cotizacion") as HTMLButtonElement;
    const fechaCotizacion = document.getElementById("fecha-cotizacion") as HTMLInputElement;
    const cuerpoItemsCotizacion = document.getElementById("cuerpo-items-cotizacion") as HTMLElement;
    const mensajeFormularioCotizacion = document.getElementById("mensaje-formulario-cotizacion") as HTMLElement;
    const origenCotizacion = document.getElementById("origen-cotizacion") as HTMLElement;

    const pantallaBuscarCotizacion = document.getElementById("pantalla-buscar-cotizacion") as HTMLElement;
    const formularioBuscarCotizacion = document.getElementById("formulario-buscar-cotizacion") as HTMLFormElement;
    const botonBuscarCotizacion = document.getElementById("btn-buscar-cotizacion") as HTMLButtonElement;
    const opcionBuscarCotizacionMenu = document.getElementById("menu-buscar-cotizacion") as HTMLButtonElement;
    const criterioBuscarCotizacion = document.getElementById("criterio-buscar-cotizacion") as HTMLInputElement;
    const botonLimpiarBusquedaCotizacion = document.getElementById("btn-limpiar-busqueda-cotizacion") as HTMLButtonElement;
    const botonEjecutarBusquedaCotizacion = document.getElementById("btn-ejecutar-busqueda-cotizacion") as HTMLButtonElement;
    const botonCancelarBusquedaCotizacion = document.getElementById("btn-cancelar-busqueda-cotizacion") as HTMLButtonElement;
    const mensajeBusquedaCotizacion = document.getElementById("mensaje-busqueda-cotizacion") as HTMLElement;
    const cuerpoResultadosCotizacion = document.getElementById("cuerpo-resultados-cotizacion") as HTMLElement;
    const plantillaResultadoCotizacion = document.getElementById("plantilla-resultado-cotizacion") as HTMLTemplateElement;

    const pantallasInternas = new Map<HTMLElement, HTMLButtonElement>([
      [pantallaPanel, opcionInicioMenu],
      [pantallaCrearOrden, opcionCrearOrdenMenu],
      [pantallaBuscarOrden, opcionBuscarOrdenMenu],
      [pantallaCrearFactura, opcionCrearFacturaMenu],
      [pantallaBuscarFactura, opcionBuscarFacturaMenu],
      [pantallaCrearCotizacion, opcionCrearCotizacionMenu],
      [pantallaBuscarCotizacion, opcionBuscarCotizacionMenu]
    ]);

    const usuarioDemostracion = {
      nombre: "Usuario ejemplo",
      correo: "ejemplo@gmail.com",
      ultimoInicio: "01/11/2026 - 16:44:14"
    };

    let sesionActiva = false;
    let fechaInicioSesion: Date | null = null;
    let intervaloReloj: any = null;

    const ordenesDemostracion = [
      {
        numero: "24",
        fecha: "2026-08-31",
        clienteId: "cliente-1",
        cliente: "Luis Ángel López",
        telefono: "3113082950",
        documento: "25652256",
        herramientas: ["Taladro Bosch", "Pulidora Makita", "Soldador inverter"]
      },
      {
        numero: "25",
        fecha: "2026-09-02",
        clienteId: "cliente-1",
        cliente: "Luis Ángel López",
        telefono: "3113082950",
        documento: "25652256",
        herramientas: ["Compresor Stanley"]
      },
      {
        numero: "26",
        fecha: "2026-09-03",
        clienteId: "cliente-2",
        cliente: "María José Pérez",
        telefono: "3004567890",
        documento: "1032456789",
        herramientas: ["Taladro DeWalt", "Sierra circular Bosch"]
      }
    ];

    let resultadosBusquedaOrden = [...ordenesDemostracion];
    const coincidenciasBusquedaOrden = new Set<string>();
    let busquedaOrdenRealizada = false;
    let secuenciaItemDocumento = 0;

    const facturasDemostracion = ordenesDemostracion.map((orden, indice) => ({
      numero: String(454 + indice),
      numeroOrden: orden.numero,
      fecha: orden.fecha,
      cliente: orden.cliente,
      telefono: orden.telefono,
      nit: orden.documento,
      items: orden.herramientas.length
    }));

    let resultadosBusquedaFactura = [...facturasDemostracion];
    const coincidenciasBusquedaFactura = new Set<string>();
    let ultimoNumeroFacturaValido = "";
    const mensajeNumeroFacturaInvalido = "El número de factura solo admite números del 0 al 9, sin espacios ni signos.";

    const cotizacionesDemostracion = ordenesDemostracion.map((orden, indice) => ({
      numero: String(101 + indice),
      numeroOrden: orden.numero,
      fecha: orden.fecha,
      cliente: orden.cliente,
      telefono: orden.telefono,
      nit: orden.documento,
      items: orden.herramientas.length
    }));

    let resultadosBusquedaCotizacion = [...cotizacionesDemostracion];
    const coincidenciasBusquedaCotizacion = new Set<string>();
    let ultimoNumeroCotizacionValido = "";
    const mensajeNumeroCotizacionInvalido = "El número de cotización solo admite números del 0 al 9, sin espacios ni signos.";

    // Funciones de navegación
    function cambiarPantallaAcceso(pantallaSeleccionada: HTMLElement, botonSeleccionado: HTMLButtonElement) {
      pantallaInicio.hidden = pantallaSeleccionada !== pantallaInicio;
      pantallaRegistro.hidden = pantallaSeleccionada !== pantallaRegistro;
      pantallaConsulta.hidden = pantallaSeleccionada !== pantallaConsulta;

      botonInicio.classList.toggle("activo", botonSeleccionado === botonInicio);
      botonRegistro.classList.toggle("activo", botonSeleccionado === botonRegistro);
      botonConsulta.classList.toggle("activo", botonSeleccionado === botonConsulta);
    }

    function mostrarRecuperacion() {
      tarjetaAcceso.hidden = true;
      pantallaRecuperar.hidden = false;
    }

    function volverAlInicio() {
      pantallaRecuperar.hidden = true;
      tarjetaAcceso.hidden = false;
      cambiarPantallaAcceso(pantallaInicio, botonInicio);
    }

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

    function cambiarPantallaInterna(pantallaSeleccionada: HTMLElement) {
      if (!pantallasInternas.has(pantallaSeleccionada)) return;

      tarjetaAcceso.hidden = true;
      pantallaRecuperar.hidden = true;

      if (dialogoOrdenesCliente.open) dialogoOrdenesCliente.close();
      if (dialogoReemplazarFactura.open) dialogoReemplazarFactura.close();

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

    function obtenerFechaLocal() {
      const hoy = new Date();
      const anio = hoy.getFullYear();
      const mes = String(hoy.getMonth() + 1).padStart(2, "0");
      const dia = String(hoy.getDate()).padStart(2, "0");
      return `${anio}-${mes}-${dia}`;
    }

    // Órdenes
    function mostrarPantallaCrearOrden() {
      if (!sesionActiva) return;
      if (!fechaOrden.value) fechaOrden.value = obtenerFechaLocal();
      cambiarPantallaInterna(pantallaCrearOrden);
      cerrarMenu();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function cancelarOrden() {
      if (!sesionActiva) return;
      formularioOrden.reset();
      mensajeFormularioOrden.textContent = "";
      mostrarPanelPrincipal();
      botonCrearOrden.focus();
    }

    function mostrarPantallaBuscarOrden() {
      if (!sesionActiva) return;
      cambiarPantallaInterna(pantallaBuscarOrden);
      cerrarMenu();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function cancelarBusquedaOrden() {
      if (!sesionActiva) return;
      mostrarPanelPrincipal();
      botonBuscarOrden.focus();
    }

    function normalizarNombreBusqueda(valor: string) {
      return valor.normalize("NFD").replace(/\p{M}/gu, "").toLocaleLowerCase("es").trim().replace(/ +/g, " ");
    }

    function normalizarDocumentoBusqueda(valor: string) {
      return valor.replace(/[.\s-]/gu, "");
    }

    function actualizarBotonLimpiarBusqueda() {
      botonLimpiarBusquedaOrden.hidden = criterioBuscarOrden.value.length === 0;
    }

    function limpiarCampoBusquedaOrden() {
      criterioBuscarOrden.value = "";
      mensajeBusquedaOrden.textContent = "";
      actualizarBotonLimpiarBusqueda();
      criterioBuscarOrden.focus();
    }

    function mostrarResultadosBusquedaOrden() {
      const fragmento = document.createDocumentFragment();
      resultadosBusquedaOrden.forEach(orden => {
        const contenido = plantillaResultadoOrden.content.cloneNode(true) as DocumentFragment;
        const fila = contenido.querySelector("tr")!;
        fila.dataset["numeroOrden"] = orden.numero;
        fila.classList.toggle("es-coincidencia", coincidenciasBusquedaOrden.has(orden.numero));

        const [anio, mes, dia] = orden.fecha.split("-");
        const columnas: Record<string, string | number> = {
          numero: orden.numero,
          fecha: `${dia}/${mes}/${anio}`,
          cliente: orden.cliente,
          telefono: orden.telefono,
          documento: orden.documento,
          items: orden.herramientas.length
        };

        Object.entries(columnas).forEach(([columna, valor]) => {
          contenido.querySelector(`[data-columna="${columna}"]`)!.textContent = String(valor);
        });

        (contenido.querySelector('[data-accion="abrir-orden"]') as HTMLButtonElement).disabled = true;
        fragmento.append(contenido);
      });
      cuerpoResultadosOrden.replaceChildren(fragmento);
    }

    function ejecutarBusquedaOrden(evento: Event) {
      evento.preventDefault();
      if (!sesionActiva) return;

      const criterio = criterioBuscarOrden.value.trim();
      mensajeBusquedaOrden.textContent = "";

      if (criterio === "") {
        resultadosBusquedaOrden = [...ordenesDemostracion];
        busquedaOrdenRealizada = false;
        mostrarResultadosBusquedaOrden();
        mensajeBusquedaOrden.textContent = `Se muestran las ${ordenesDemostracion.length} órdenes.`;
        return;
      }

      const ordenExacta = ordenesDemostracion.find(orden => orden.numero === criterio);
      let encontradas;

      if (ordenExacta) {
        encontradas = [ordenExacta];
      } else {
        const nombre = normalizarNombreBusqueda(criterio);
        const documento = normalizarDocumentoBusqueda(criterio);
        encontradas = ordenesDemostracion.filter(orden => {
          const coincideNombre = normalizarNombreBusqueda(orden.cliente) === nombre;
          const coincideDocumento = normalizarDocumentoBusqueda(orden.documento) === documento;
          return coincideNombre || coincideDocumento;
        });
      }

      if (encontradas.length === 0) {
        mensajeBusquedaOrden.textContent = "No existe un registro que coincida con la búsqueda.";
        return;
      }

      if (ordenExacta) {
        resultadosBusquedaOrden = [ordenExacta];
      } else {
        if (!busquedaOrdenRealizada) resultadosBusquedaOrden = [];
        const numerosVisibles = new Set(resultadosBusquedaOrden.map(orden => orden.numero));
        encontradas.forEach(orden => {
          if (!numerosVisibles.has(orden.numero)) {
            resultadosBusquedaOrden.push(orden);
            numerosVisibles.add(orden.numero);
          }
        });
      }

      encontradas.forEach(orden => coincidenciasBusquedaOrden.add(orden.numero));
      busquedaOrdenRealizada = true;
      mostrarResultadosBusquedaOrden();

      mensajeBusquedaOrden.textContent = encontradas.length === 1
        ? "Se encontró 1 orden."
        : `Se encontraron ${encontradas.length} órdenes.`;
    }

    function restablecerBusquedaOrden() {
      resultadosBusquedaOrden = [...ordenesDemostracion];
      coincidenciasBusquedaOrden.clear();
      busquedaOrdenRealizada = false;
      mensajeBusquedaOrden.textContent = "";
      botonLimpiarBusquedaOrden.hidden = true;
      mostrarResultadosBusquedaOrden();
    }

    // Ítems y Facturas
    function crearFilaItemDocumento(cuerpoDestino: HTMLElement, tipoDocumento: string) {
      secuenciaItemDocumento++;
      const identificador = secuenciaItemDocumento;
      const contenido = plantillaItemFactura.content.cloneNode(true) as DocumentFragment;
      const fila = contenido.querySelector("tr")!;

      fila.dataset["itemDocumento"] = String(identificador);
      fila.dataset["tipoDocumento"] = tipoDocumento;
      if (tipoDocumento === "factura") fila.dataset["itemFactura"] = String(identificador);

      fila.querySelectorAll<HTMLElement>("[data-campo-item]").forEach(campo => {
        const tipoCampo = campo.dataset["campoItem"]!;
        const idCampo = `${tipoCampo}-item-${identificador}-${tipoDocumento}`;
        const error = fila.querySelector(`[data-error-item="${tipoCampo}"]`)!;
        const ayuda = fila.querySelector(`[data-texto-ayuda-item="${tipoCampo}"]`);
        const boton = fila.querySelector<HTMLElement>(`[data-ayuda-item="${tipoCampo}"]`);

        campo.id = idCampo;
        (campo as HTMLInputElement).name = `items[${identificador}][${tipoCampo}]`;
        error.id = `error-${idCampo}`;

        const descripciones = [error.id];
        if (ayuda) {
          ayuda.id = `ayuda-${idCampo}`;
          descripciones.push(ayuda.id);
        }
        if (boton && ayuda) {
          boton.dataset["ayudaCampo"] = idCampo;
          boton.setAttribute("aria-controls", ayuda.id);
        }
        campo.setAttribute("aria-describedby", descripciones.join(" "));
      });

      (fila.querySelector('[data-accion-item="eliminar"]') as HTMLButtonElement).disabled = true;
      cuerpoDestino.append(contenido);
      return fila;
    }

    function crearFilaItemFactura() {
      return crearFilaItemDocumento(cuerpoItemsFactura, "factura");
    }

    function mostrarPantallaCrearFactura() {
      if (!sesionActiva) return;
      if (!fechaFactura.value) fechaFactura.value = obtenerFechaLocal();
      if (cuerpoItemsFactura.children.length === 0) crearFilaItemFactura();
      cambiarPantallaInterna(pantallaCrearFactura);
      cerrarMenu();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function restablecerFactura() {
      if (dialogoReemplazarFactura.open) dialogoReemplazarFactura.close();
      formularioFactura.reset();
      cuerpoItemsFactura.replaceChildren();
      mensajeFormularioFactura.textContent = "";
      origenFactura.textContent = "";
      origenFactura.hidden = true;
    }

    function cancelarFactura() {
      if (!sesionActiva) return;
      restablecerFactura();
      mostrarPanelPrincipal();
      botonCrearFactura.focus();
    }

    // Cotizaciones
    function mostrarPantallaCrearCotizacion() {
      if (!sesionActiva) return;
      if (!fechaCotizacion.value) fechaCotizacion.value = obtenerFechaLocal();
      if (cuerpoItemsCotizacion.children.length === 0) {
        crearFilaItemDocumento(cuerpoItemsCotizacion, "cotizacion");
      }
      cambiarPantallaInterna(pantallaCrearCotizacion);
      cerrarMenu();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function restablecerCotizacion() {
      formularioCotizacion.reset();
      formularioCotizacion.querySelectorAll("input").forEach(campo => {
        camposRevisados.delete(campo);
        mostrarErrorFormulario(campo, "");
      });
      cuerpoItemsCotizacion.replaceChildren();
      const errorItems = document.getElementById("error-items-cotizacion")!;
      errorItems.textContent = "";
      errorItems.hidden = true;
      mensajeFormularioCotizacion.textContent = "";
      origenCotizacion.textContent = "";
      origenCotizacion.hidden = true;
    }

    function cancelarCotizacion() {
      if (!sesionActiva) return;
      restablecerCotizacion();
      mostrarPanelPrincipal();
      botonCrearCotizacion.focus();
    }

    // Búsqueda Facturas
    function mostrarPantallaBuscarFactura() {
      if (!sesionActiva) return;
      cambiarPantallaInterna(pantallaBuscarFactura);
      cerrarMenu();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function cancelarBusquedaFactura() {
      if (!sesionActiva) return;
      mostrarPanelPrincipal();
      botonBuscarFactura.focus();
    }

    function actualizarBotonLimpiarFactura() {
      botonLimpiarBusquedaFactura.hidden = criterioBuscarFactura.value.length === 0;
    }

    function comprobarEntradaNumeroFactura(evento: InputEvent) {
      if (evento.isComposing || evento.data == null || !evento.cancelable) return;
      if (!/^[0-9]*$/.test(evento.data)) {
        evento.preventDefault();
        mostrarErrorFormulario(criterioBuscarFactura, mensajeNumeroFacturaInvalido);
      }
    }

    function comprobarPegadoNumeroFactura(evento: ClipboardEvent) {
      if (!evento.clipboardData) return;
      const contenido = evento.clipboardData.getData("text");
      if (!/^[0-9]*$/.test(contenido)) {
        evento.preventDefault();
        mostrarErrorFormulario(criterioBuscarFactura, mensajeNumeroFacturaInvalido);
      }
    }

    function revisarNumeroFactura() {
      const valor = criterioBuscarFactura.value;
      if (!/^[0-9]*$/.test(valor)) {
        criterioBuscarFactura.value = ultimoNumeroFacturaValido;
        mostrarErrorFormulario(criterioBuscarFactura, mensajeNumeroFacturaInvalido);
      } else {
        ultimoNumeroFacturaValido = valor;
        mostrarErrorFormulario(criterioBuscarFactura, "");
      }
      actualizarBotonLimpiarFactura();
    }

    function limpiarCampoBusquedaFactura() {
      criterioBuscarFactura.value = "";
      ultimoNumeroFacturaValido = "";
      mensajeBusquedaFactura.textContent = "";
      mostrarErrorFormulario(criterioBuscarFactura, "");
      actualizarBotonLimpiarFactura();
      criterioBuscarFactura.focus();
    }

    function mostrarResultadosBusquedaFactura() {
      const fragmento = document.createDocumentFragment();
      resultadosBusquedaFactura.forEach(factura => {
        const contenido = plantillaResultadoFactura.content.cloneNode(true) as DocumentFragment;
        const fila = contenido.querySelector("tr")!;
        fila.dataset["numeroFactura"] = factura.numero;
        fila.classList.toggle("es-coincidencia", coincidenciasBusquedaFactura.has(factura.numero));

        const [anio, mes, dia] = factura.fecha.split("-");
        const columnas: Record<string, string | number> = {
          "numero-factura": factura.numero,
          "numero-orden": factura.numeroOrden || "Sin orden asociada",
          fecha: `${dia}/${mes}/${anio}`,
          cliente: factura.cliente,
          telefono: factura.telefono,
          nit: factura.nit,
          items: factura.items
        };

        Object.entries(columnas).forEach(([columna, valor]) => {
          contenido.querySelector(`[data-columna="${columna}"]`)!.textContent = String(valor);
        });
        fragmento.append(contenido);
      });
      cuerpoResultadosFactura.replaceChildren(fragmento);
    }

    function ejecutarBusquedaFactura(evento: Event) {
      evento.preventDefault();
      if (!sesionActiva) return;

      const numero = criterioBuscarFactura.value;
      if (!/^[0-9]*$/.test(numero)) {
        mostrarErrorFormulario(criterioBuscarFactura, mensajeNumeroFacturaInvalido);
        criterioBuscarFactura.focus();
        return;
      }

      mostrarErrorFormulario(criterioBuscarFactura, "");
      ultimoNumeroFacturaValido = numero;
      mensajeBusquedaFactura.textContent = "";

      if (numero === "") {
        resultadosBusquedaFactura = [...facturasDemostracion];
        mostrarResultadosBusquedaFactura();
        mensajeBusquedaFactura.textContent = "Ingrese el número de factura a consultar.";
        return;
      }

      const factura = facturasDemostracion.find(registro => registro.numero === numero);
      if (!factura) {
        mensajeBusquedaFactura.textContent = "No existe una factura con ese número.";
        return;
      }

      resultadosBusquedaFactura = [factura];
      coincidenciasBusquedaFactura.add(factura.numero);
      mostrarResultadosBusquedaFactura();
      mensajeBusquedaFactura.textContent = `Se encontró la factura ${factura.numero}.`;
    }

    function restablecerBusquedaFactura() {
      ultimoNumeroFacturaValido = "";
      resultadosBusquedaFactura = [...facturasDemostracion];
      coincidenciasBusquedaFactura.clear();
      mensajeBusquedaFactura.textContent = "";
      botonLimpiarBusquedaFactura.hidden = true;
      mostrarErrorFormulario(criterioBuscarFactura, "");
      mostrarResultadosBusquedaFactura();
    }

    // Búsqueda Cotizaciones
    function mostrarPantallaBuscarCotizacion() {
      if (!sesionActiva) return;
      cambiarPantallaInterna(pantallaBuscarCotizacion);
      cerrarMenu();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function cancelarBusquedaCotizacion() {
      if (!sesionActiva) return;
      mostrarPanelPrincipal();
      botonBuscarCotizacion.focus();
    }

    function actualizarBotonLimpiarCotizacion() {
      botonLimpiarBusquedaCotizacion.hidden = criterioBuscarCotizacion.value.length === 0;
    }

    function comprobarEntradaNumeroCotizacion(evento: InputEvent) {
      if (evento.isComposing || evento.data == null || !evento.cancelable) return;
      if (!/^[0-9]*$/.test(evento.data)) {
        evento.preventDefault();
        mostrarErrorFormulario(criterioBuscarCotizacion, mensajeNumeroCotizacionInvalido);
      }
    }

    function comprobarPegadoNumeroCotizacion(evento: ClipboardEvent) {
      if (!evento.clipboardData) return;
      const contenido = evento.clipboardData.getData("text");
      if (!/^[0-9]*$/.test(contenido)) {
        evento.preventDefault();
        mostrarErrorFormulario(criterioBuscarCotizacion, mensajeNumeroCotizacionInvalido);
      }
    }

    function revisarNumeroCotizacion(evento?: Event) {
      if ((evento as InputEvent)?.isComposing) return;
      const valor = criterioBuscarCotizacion.value;
      if (!/^[0-9]*$/.test(valor)) {
        criterioBuscarCotizacion.value = ultimoNumeroCotizacionValido;
        mostrarErrorFormulario(criterioBuscarCotizacion, mensajeNumeroCotizacionInvalido);
      } else {
        ultimoNumeroCotizacionValido = valor;
        mostrarErrorFormulario(criterioBuscarCotizacion, "");
      }
      actualizarBotonLimpiarCotizacion();
    }

    function limpiarCampoBusquedaCotizacion() {
      criterioBuscarCotizacion.value = "";
      ultimoNumeroCotizacionValido = "";
      mensajeBusquedaCotizacion.textContent = "";
      mostrarErrorFormulario(criterioBuscarCotizacion, "");
      actualizarBotonLimpiarCotizacion();
      criterioBuscarCotizacion.focus();
    }

    function mostrarResultadosBusquedaCotizacion() {
      const fragmento = document.createDocumentFragment();
      resultadosBusquedaCotizacion.forEach(cotizacion => {
        const contenido = plantillaResultadoCotizacion.content.cloneNode(true) as DocumentFragment;
        const fila = contenido.querySelector("tr")!;
        fila.dataset["numeroCotizacion"] = cotizacion.numero;
        fila.classList.toggle("es-coincidencia", coincidenciasBusquedaCotizacion.has(cotizacion.numero));

        const [anio, mes, dia] = cotizacion.fecha.split("-");
        const columnas: Record<string, string | number> = {
          "numero-cotizacion": cotizacion.numero,
          "numero-orden": cotizacion.numeroOrden || "Sin orden asociada",
          fecha: `${dia}/${mes}/${anio}`,
          cliente: cotizacion.cliente,
          telefono: cotizacion.telefono,
          nit: cotizacion.nit,
          items: cotizacion.items
        };

        Object.entries(columnas).forEach(([columna, valor]) => {
          contenido.querySelector(`[data-columna="${columna}"]`)!.textContent = String(valor);
        });

        (contenido.querySelector('[data-accion="abrir-cotizacion"]') as HTMLButtonElement).disabled = true;
        fragmento.append(contenido);
      });
      cuerpoResultadosCotizacion.replaceChildren(fragmento);
    }

    function ejecutarBusquedaCotizacion(evento: Event) {
      evento.preventDefault();
      if (!sesionActiva) return;

      const numero = criterioBuscarCotizacion.value;
      if (!/^[0-9]*$/.test(numero)) {
        mostrarErrorFormulario(criterioBuscarCotizacion, mensajeNumeroCotizacionInvalido);
        criterioBuscarCotizacion.focus();
        return;
      }

      mostrarErrorFormulario(criterioBuscarCotizacion, "");
      ultimoNumeroCotizacionValido = numero;
      mensajeBusquedaCotizacion.textContent = "";

      if (numero === "") {
        resultadosBusquedaCotizacion = [...cotizacionesDemostracion];
        mostrarResultadosBusquedaCotizacion();
        mensajeBusquedaCotizacion.textContent = "Ingrese el número de cotización a consultar.";
        return;
      }

      const cotizacion = cotizacionesDemostracion.find(registro => registro.numero === numero);
      if (!cotizacion) {
        mensajeBusquedaCotizacion.textContent = "No existe una cotización con ese número.";
        return;
      }

      resultadosBusquedaCotizacion = [cotizacion];
      coincidenciasBusquedaCotizacion.add(cotizacion.numero);
      mostrarResultadosBusquedaCotizacion();
      mensajeBusquedaCotizacion.textContent = `Se encontró la cotización ${cotizacion.numero}.`;
    }

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

    // Datos y control del menú lateral
    function prepararDatosMenu() {
      nombreUsuarioMenu.textContent = usuarioActual
        ? `${usuarioActual.nombres} ${usuarioActual.apellidos}`
        : usuarioDemostracion.nombre;
      correoUsuarioMenu.textContent = usuarioActual ? usuarioActual.correo : usuarioDemostracion.correo;
      fechaEntradaMenu.textContent = fechaInicioSesion!.toLocaleDateString("es-CO", { day: "2-digit", month: "2-digit", year: "numeric" });
      fechaEntradaMenu.dateTime = fechaInicioSesion!.toISOString();
      ultimoInicioMenu.textContent = usuarioDemostracion.ultimoInicio;

      const perfilSeleccionado = tipoUsuario.options[tipoUsuario.selectedIndex];
      rolUsuarioMenu.textContent = perfilSeleccionado ? perfilSeleccionado.textContent : "Administrativo";
      actualizarHoraMenu();
    }

    function actualizarHoraMenu() {
      const ahora = new Date();
      horaActualMenu.textContent = ahora.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
      horaActualMenu.dateTime = ahora.toISOString();
    }

    function abrirMenu() {
      if (!sesionActiva || menuLateral.open) return;
      actualizarHoraMenu();
      menuLateral.showModal();
      botonMenu.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-abierto");
      intervaloReloj = window.setInterval(actualizarHoraMenu, 1000);
      botonCerrarMenu.focus();
    }

    function cerrarMenu() {
      if (menuLateral.open) menuLateral.close();
    }

    function finalizarCierreMenu() {
      window.clearInterval(intervaloReloj);
      intervaloReloj = null;
      botonMenu.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-abierto");
      if (sesionActiva) botonMenu.focus();
    }

    function volverAlPanelDesdeMenu() {
      if (!sesionActiva) return;
      mostrarPanelPrincipal();
      cerrarMenu();
    }

    function cerrarSesion() {
      if (!sesionActiva) return;
      sesionActiva = false;
      usuarioActual = null;
      fechaInicioSesion = null;
      cerrarMenu();

      if (dialogoOrdenesCliente.open) dialogoOrdenesCliente.close();

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

    function alternarSelectorTipoUsuario() {
      const mostrarSelector = selectorTipoUsuario.hidden;
      selectorTipoUsuario.hidden = !mostrarSelector;
      botonTipoUsuario.setAttribute("aria-expanded", String(mostrarSelector));
      if (mostrarSelector) tipoUsuario.focus();
    }

    // Validación compartida
    const perfilesAccesoPermitidos = new Set(["administrador", "recepcionista", "tecnico"]);
    const camposAcceso: (HTMLInputElement | HTMLSelectElement)[] = [tipoUsuario, campoUsuario, campoContrasena];
    const camposRegistro = Array.from(formularioRegistro.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select"));
    const camposRevisados = new Set<HTMLElement>();
    const mensajeRegistro = document.getElementById("mensaje-registro") as HTMLElement;

    function mostrarErrorFormulario(campo: HTMLInputElement | HTMLSelectElement, mensaje: string) {
      const error = document.getElementById(`error-${campo.id}`);
      const ayuda = document.getElementById(`ayuda-${campo.id}`);
      const boton = campo.form?.querySelector<HTMLElement>(`[data-ayuda-campo="${campo.id}"]`);
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
      if (boton) boton.hidden = !hayError;
      if (!hayError) {
        if (ayuda) ayuda.hidden = true;
        if (boton) boton.setAttribute("aria-expanded", "false");
      }
    }

    function obtenerErrorFormulario(campo: HTMLInputElement | HTMLSelectElement): string {
      if (campo.disabled || (campo as HTMLInputElement).readOnly) return "";

      const valor = campo.value;
      if (campo.type === "number" && campo.validity.badInput) return "Escribe un número válido.";

      const estaVacio = campo.type === "password" ? valor.length === 0 : valor.trim().length === 0;
      if (estaVacio) {
        if (!campo.required) return "";
        const etiqueta = campo.labels?.[0]?.textContent || campo.getAttribute("aria-label") || campo.name || "solicitado";
        const nombreCampo = etiqueta.replace(/\*/g, "").replace(/\s+/g, " ").trim();
        return `Es obligatorio completar el campo «${nombreCampo}».`;
      }

      if (campo.type === "number") {
        if (campo.validity.rangeUnderflow) return `El valor mínimo permitido es ${(campo as HTMLInputElement).min}.`;
        if (campo.validity.rangeOverflow) return `El valor máximo permitido es ${(campo as HTMLInputElement).max}.`;
        if (campo.validity.stepMismatch) return `Usa un valor compatible con el incremento ${(campo as HTMLInputElement).step}.`;
      }

      switch (campo.id) {
        case "tipo-usuario":
        case "perfil-registro":
          return perfilesAccesoPermitidos.has(valor) ? "" : "Selecciona uno de los perfiles disponibles.";
        case "usuario":
          return (/^[\p{L}\p{M}\p{N}._-]+$/u.test(valor) && /[\p{L}\p{N}]/u.test(valor))
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
          return /^[0-9]+$/.test(valor) ? "" : "Escribe la cédula solo con números, sin puntos ni espacios.";
        case "celular-registro":
          return /^\+?[0-9]+$/.test(valor) ? "" : "Usa números y, opcionalmente, un + al principio.";
        case "correo-registro":
          return (campo.validity.typeMismatch || /\s/u.test(valor))
            ? "Escribe una dirección de correo con formato válido."
            : "";
        case "contrasena-registro": {
          const longitud = Array.from(valor).length;
          return longitud >= 15 && longitud <= 128 ? "" : "La contraseña debe tener entre 15 y 128 caracteres.";
        }
        case "repita-contrasena-registro":
          return valor === contrasenaRegistro.value ? "" : "Las contraseñas no coinciden.";
        default:
          return "";
      }
    }

    function validarCampoFormulario(campo: HTMLInputElement | HTMLSelectElement) {
      const mensaje = obtenerErrorFormulario(campo);
      mostrarErrorFormulario(campo, mensaje);
      return mensaje === "";
    }

    function validarFormulario(campos: (HTMLInputElement | HTMLSelectElement)[]) {
      let primerCampoInvalido: (HTMLInputElement | HTMLSelectElement) | null = null;
      campos.forEach(campo => {
        camposRevisados.add(campo);
        const valido = validarCampoFormulario(campo);
        if (!valido && primerCampoInvalido === null) {
          primerCampoInvalido = campo;
        }
      });
      return primerCampoInvalido;
    }

    function prepararValidacionFormulario(formulario: HTMLFormElement, campos: (HTMLInputElement | HTMLSelectElement)[]) {
      campos.forEach(campo => {
        campo.addEventListener("blur", () => {
          camposRevisados.add(campo);
          validarCampoFormulario(campo);
        });

        const eventoCambio = campo.tagName === "SELECT" ? "change" : "input";
        campo.addEventListener(eventoCambio, evento => {
          if ((evento as InputEvent).isComposing) return;
          if (formulario === formularioRegistro) mensajeRegistro.hidden = true;
          if (camposRevisados.has(campo)) validarCampoFormulario(campo);
          if (campo === contrasenaRegistro && camposRevisados.has(repetirContrasenaRegistro)) {
            validarCampoFormulario(repetirContrasenaRegistro);
          }
        });
      });

      formulario.querySelectorAll<HTMLElement>("[data-ayuda-campo]").forEach(boton => {
        boton.addEventListener("click", () => {
          const ayuda = document.getElementById(boton.getAttribute("aria-controls")!)!;
          ayuda.hidden = !ayuda.hidden;
          boton.setAttribute("aria-expanded", String(!ayuda.hidden));
        });
      });

      formulario.addEventListener("reset", () => {
        campos.forEach(campo => {
          camposRevisados.delete(campo);
          mostrarErrorFormulario(campo, "");
        });
        if (formulario === formularioRegistro) mensajeRegistro.hidden = true;
      });
    }

    // Eventos de cotizaciones
    botonBuscarCotizacion.addEventListener("click", mostrarPantallaBuscarCotizacion);
    opcionBuscarCotizacionMenu.addEventListener("click", mostrarPantallaBuscarCotizacion);
    botonCancelarBusquedaCotizacion.addEventListener("click", cancelarBusquedaCotizacion);

    criterioBuscarCotizacion.addEventListener("beforeinput", comprobarEntradaNumeroCotizacion);
    criterioBuscarCotizacion.addEventListener("paste", comprobarPegadoNumeroCotizacion);
    criterioBuscarCotizacion.addEventListener("input", revisarNumeroCotizacion);
    criterioBuscarCotizacion.addEventListener("compositionend", revisarNumeroCotizacion);
    botonLimpiarBusquedaCotizacion.addEventListener("click", limpiarCampoBusquedaCotizacion);
    formularioBuscarCotizacion.addEventListener("submit", ejecutarBusquedaCotizacion);
    formularioBuscarCotizacion.addEventListener("reset", restablecerBusquedaCotizacion);

    // Eventos generales
    botonMenu.addEventListener("click", abrirMenu);
    botonCerrarMenu.addEventListener("click", cerrarMenu);
    menuLateral.addEventListener("close", finalizarCierreMenu);

    opcionInicioMenu.addEventListener("click", volverAlPanelDesdeMenu);
    opcionCerrarSesion.addEventListener("click", cerrarSesion);

    botonCrearOrden.addEventListener("click", mostrarPantallaCrearOrden);
    opcionCrearOrdenMenu.addEventListener("click", mostrarPantallaCrearOrden);
    botonCancelarOrden.addEventListener("click", cancelarOrden);

    botonBuscarOrden.addEventListener("click", mostrarPantallaBuscarOrden);
    opcionBuscarOrdenMenu.addEventListener("click", mostrarPantallaBuscarOrden);
    botonCancelarBusquedaOrden.addEventListener("click", cancelarBusquedaOrden);

    botonCrearFactura.addEventListener("click", mostrarPantallaCrearFactura);
    opcionCrearFacturaMenu.addEventListener("click", mostrarPantallaCrearFactura);
    botonCancelarFactura.addEventListener("click", cancelarFactura);

    botonCrearCotizacion.addEventListener("click", mostrarPantallaCrearCotizacion);
    opcionCrearCotizacionMenu.addEventListener("click", mostrarPantallaCrearCotizacion);
    botonCancelarCotizacion.addEventListener("click", cancelarCotizacion);

    formularioCotizacion.addEventListener("submit", evento => evento.preventDefault());

    botonBuscarFactura.addEventListener("click", mostrarPantallaBuscarFactura);
    opcionBuscarFacturaMenu.addEventListener("click", mostrarPantallaBuscarFactura);
    botonCancelarBusquedaFactura.addEventListener("click", cancelarBusquedaFactura);

    criterioBuscarFactura.addEventListener("beforeinput", comprobarEntradaNumeroFactura);
    criterioBuscarFactura.addEventListener("paste", comprobarPegadoNumeroFactura);
    criterioBuscarFactura.addEventListener("input", revisarNumeroFactura);
    criterioBuscarFactura.addEventListener("compositionend", revisarNumeroFactura);
    botonLimpiarBusquedaFactura.addEventListener("click", limpiarCampoBusquedaFactura);
    formularioBuscarFactura.addEventListener("submit", ejecutarBusquedaFactura);
    formularioBuscarFactura.addEventListener("reset", restablecerBusquedaFactura);

    criterioBuscarOrden.addEventListener("input", actualizarBotonLimpiarBusqueda);
    botonLimpiarBusquedaOrden.addEventListener("click", limpiarCampoBusquedaOrden);
    formularioBuscarOrden.addEventListener("submit", ejecutarBusquedaOrden);
    formularioBuscarOrden.addEventListener("reset", restablecerBusquedaOrden);

    botonInicio.addEventListener("click", () => cambiarPantallaAcceso(pantallaInicio, botonInicio));
    botonRegistro.addEventListener("click", () => cambiarPantallaAcceso(pantallaRegistro, botonRegistro));
    botonConsulta.addEventListener("click", () => cambiarPantallaAcceso(pantallaConsulta, botonConsulta));
    botonTipoUsuario.addEventListener("click", alternarSelectorTipoUsuario);

    prepararValidacionFormulario(formularioInicio, camposAcceso);
    prepararValidacionFormulario(formularioRegistro, camposRegistro);

    formularioInicio.addEventListener("submit", evento => {
      evento.preventDefault();
      const primerCampoInvalido = validarFormulario(camposAcceso);
      if (primerCampoInvalido === null) {
        // El formulario está bien escrito: ahora se verifica contra los usuarios registrados
        const encontrado = auth.iniciarSesion(campoUsuario.value.trim(), campoContrasena.value, tipoUsuario.value);
        if (encontrado) {
          usuarioActual = encontrado;
          mostrarPanelPrincipal();
          return;
        }
        mostrarErrorFormulario(campoContrasena, "Cédula, contraseña o perfil incorrectos.");
        campoContrasena.focus();
        return;
      }
      if (primerCampoInvalido === tipoUsuario) {
        selectorTipoUsuario.hidden = false;
        botonTipoUsuario.setAttribute("aria-expanded", "true");
      }
      (primerCampoInvalido as HTMLElement).focus();
    });

    botonRecuperar.addEventListener("click", mostrarRecuperacion);
    botonVolverInicio.addEventListener("click", volverAlInicio);
    formularioRecuperar.addEventListener("submit", evento => {
      evento.preventDefault();
      alert("La recuperación de contraseña aún no está disponible. Falta conectar el servidor para enviar el enlace por correo.");
    });

    formularioRegistro.addEventListener("submit", evento => {
      evento.preventDefault();
      mensajeRegistro.hidden = true;
      const primerCampoInvalido = validarFormulario(camposRegistro);
      if (primerCampoInvalido !== null) {
          (primerCampoInvalido as HTMLElement).focus();
        return;
      }

      const valorDe = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).value;
      const resultado = auth.registrar({
        perfil: valorDe("perfil-registro"),
        nombres: valorDe("nombres-registro").trim(),
        apellidos: valorDe("apellidos-registro").trim(),
        documento: valorDe("documento-registro"),
        celular: valorDe("celular-registro"),
        correo: valorDe("correo-registro").trim(),
        contrasena: valorDe("contrasena-registro")
      });

      if (!resultado.ok) {
        const campoConProblema = document.getElementById(resultado.campo!) as HTMLInputElement;
        mostrarErrorFormulario(campoConProblema, resultado.mensaje);
        campoConProblema.focus();
        return;
      }

      formularioRegistro.reset();
      camposRegistro.forEach(campo => camposRevisados.delete(campo));
      mensajeRegistro.textContent = "Cuenta creada correctamente. Ya puedes iniciar sesión con tu cédula.";
      mensajeRegistro.hidden = false;
    });

    formularioConsulta.addEventListener("submit", evento => {
      evento.preventDefault();
      alert("La consulta de órdenes aún no está disponible. Falta conectar el servidor y la base de datos para consultar el estado de tu equipo.");
    });

    // Inicialización de estados y tablas
    botonCancelarBusquedaCotizacion.disabled = false;
    botonEjecutarBusquedaCotizacion.disabled = false;
    actualizarBotonLimpiarCotizacion();
    mostrarResultadosBusquedaCotizacion();

    botonCancelarOrden.disabled = false;
    botonCancelarBusquedaOrden.disabled = false;
    botonCancelarFactura.disabled = false;
    botonCancelarCotizacion.disabled = false;

    botonCancelarBusquedaFactura.disabled = false;
    botonEjecutarBusquedaFactura.disabled = false;
    actualizarBotonLimpiarFactura();
    mostrarResultadosBusquedaFactura();

    botonEjecutarBusquedaOrden.disabled = false;
    actualizarBotonLimpiarBusqueda();
    mostrarResultadosBusquedaOrden();

    cambiarPantallaAcceso(pantallaInicio, botonInicio);
  }
}