// import { Estilos } from "../views/admin/Estilos.js";
// import { SalesAnalytics } from "../views/analisisVentas/SalesAnalytics";
// import { Compras } from "../views/compras/compras-controllers.js";
// import { ListaControllers } from "../views/ListaUsuarios/lista.controllers.js";
// import { ProductForm } from "../views/productos/productForm.js";
// import { controllers } from "../views/productos/productos_controllers.js";
// import { FormResena } from "../views/reseña/formResena.js";
// import { cargarReseñasAdmin } from "../views/reseña/reseñas.js";
// import { RenderStock } from "../views/stock/RenderStock.js";

// Estado para evitar re-pedir datos si ya se cargaron (Cache local opcional)
const loadedTabs = {
    ventas: false,
    ordenes: false,
    stock: false,
    productos: false,
    resenas: false,
    suscriptores: false,
    diseno: false,
};

export function setupNavigation() {
    const navButtons = document.querySelectorAll(".nav-link[data-tab]");

    navButtons.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault();
            const tabTarget = btn.getAttribute("data-tab");

            // 1. Alternar clases de navegación activa en Bootstrap
            navButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            // 2. Ocultar todas las secciones y mostrar la seleccionada
            document.querySelectorAll(".tab-content").forEach((section) => {
                section.classList.add("");
            });

            const activeSection = document.getElementById(`tab-${tabTarget}`);
            if (activeSection) activeSection.classList.remove("d-none");

            // 3. Cargar el contenido dinámico según la pestaña seleccionada
            await cargarContenidoPestana(tabTarget);
        });
    });
}

async function cargarContenidoPestana(tabName) {
    // Opcional: Si querés refrescar siempre los datos, podés quitar la validación de loadedTabs
    switch (tabName) {
        case "ventas":
            await cargarVentas();
            break;
        case "ordenes":
            await cargarOrdenes();
            break;
        case "stock":
            await cargarTablaStock();
            break;
        case "productos":
            await cargarProductos();
            break;
        case "crear-producto":
            await crearProductos();
            break;
        case "resenas":
            await cargarResenasAdmin();
            break;
        case "suscriptores":
            await cargarSuscriptores();
            break;
        case "diseno":
            await cargarConfiguracionDiseno();
            break;
    }
}

async function cargarVentas() {
    const container = document.querySelector("[data-mainContainer]");
    const salesAnalyticsInstance = new SalesAnalytics(container);
    await salesAnalyticsInstance.fetchSalesByPeriod();
}

async function cargarOrdenes() {
    const container = document.querySelector("[data-mainContainer]");
    const comprasInstance = new Compras(container);
    comprasInstance.renderLista();
}

async function cargarTablaStock() {
    const container = document.querySelector("[data-mainContainer]");
    const stockInstance = new RenderStock(container);
    await stockInstance.render();
}

async function cargarProductos() {
    const container = document.querySelector("[data-mainContainer]");
    await controllers.renderProducts(container);
}

async function crearProductos() {
    const container = document.querySelector("[data-mainContainer]");
    const productForm = new ProductForm(container);
    await productForm.render();
}

async function cargarResenasAdmin() {
    const container = document.querySelector("[data-mainContainer]");
    const formResena = new FormResena(container);
    await formResena.render();
    await cargarReseñasAdmin(container);
}

async function cargarSuscriptores() {
    const container = document.querySelector("[data-mainContainer]");
    const listaControllersInstance = new ListaControllers(container);
    await listaControllersInstance.renderLista();
}

async function cargarConfiguracionDiseno() {
    const container = document.querySelector("[data-mainContainer]");
    const estilosInstance = new Estilos(container);
    await estilosInstance.render();
}
