
import baseUrl from "./baseUrl.js"

// src/services/AdminService.js
export class OrdenService {
    constructor() {
        this.baseUrl = baseUrl;
        // Configuración común para enviar cookies de sesión (Passport)
        this.fetchOptions = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    // --- ÓRDENES DE TRABAJO ---
    async getOrdenById(id) {
        const response = await fetch(`${this.baseUrl}api/orden/obtener-orden/${id}`, this.fetchOptions);
        const resultado = await response.json();

        if (!response.ok) {
            throw new Error(resultado.message || 'No se pudo cargar el detalle de la orden.');
        }

        return resultado.data;
    }


    async getOrdenes() {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/listar-ordenes`, this.fetchOptions);
            const data = await response.json();
            // console.log(data.ordenes)
            if (!response.ok) throw new Error(data.error || 'Error al obtener órdenes');
            return data.ordenes;
        } catch (error) {
            console.error('AdminService.getOrdenes:', error);
            throw error;
        }
    }

    async asignarOrden(ordenData) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/asignar-orden`, {
                ...this.fetchOptions,
                method: 'POST',
                body: JSON.stringify(ordenData)
            });
            //Valdiar respuesta exitosa
            if (response.ok) {
                const data = await response.json();
                return data.orden;
            }

            //Controlar el error
            let data = {};
            try {
                data = await response.json();
            } catch (jsonError) {
                // Si el error del servidor no incluyó un JSON evito que la app se rompa
                data = {};
            }
            //Guardo los tipos de errores para mostrarlos
            const backendMessage =
                data?.errores?.[0]?.msg ||
                data?.message ||
                data?.error;

            const errorMessage = backendMessage || "Ocurrio un error inesperado";

            throw new Error(errorMessage);

        } catch (error) {
            console.error('AuthService.orden:', error);
            throw error;
        }
    }

    //Reasignar
    async reasignarOrden(idOrden, idTecnico) {
        try {
            const response = await fetch(`${this.baseUrl}api/orden/reasignar-orden/${idOrden}`, {
                ...this.fetchOptions,
                method: 'PUT',
                body: JSON.stringify({ id_tecnico: idTecnico })
            });

            //Valdiar respuesta exitosa
            if (response.ok) {
                const data = await response.json();
                return data.message;
            }

            //Controlar el error
            let data = {};
            try {
                data = await response.json();

            } catch (jsonError) {
                // Si el error del servidor no incluyó un JSON evito que la app se rompa
                data = {};
            }
            //Guardo los tipos de errores para mostrarlos
            const backendMessage =
                data?.errores?.[0]?.msg ||
                data?.message ||
                data?.error;

            const errorMessage = backendMessage || "Ocurrio un error inesperado";

            throw new Error(errorMessage);

        } catch (error) {
            console.error('OrdenService.reasignarOrden:', error);
            throw error;
        }
    };

    //ELIMINAR ORDEN
    async eliminarOrden(id) {
        try {
            const response = await fetch(`${this.baseUrl}api/orden/eliminar-orden/${id}`, {
                ...this.fetchOptions,
                method: 'DELETE',
            });
            //Valdiar respuesta exitosa
            if (response.ok) {
                const data = await response.json();

                return data.message;

            }

            //Controlar el error
            let data = {};
            try {
                data = await response.json();

            } catch (jsonError) {
                // Si el error del servidor no incluyó un JSON evito que la app se rompa
                data = {};
            }
            //Guardo los tipos de errores para mostrarlos
            const backendMessage =
                data?.errores?.[0]?.msg ||
                data?.message ||
                data?.error;

            const errorMessage = backendMessage || "Ocurrio un error inesperado";

            throw new Error(errorMessage);

        } catch (error) {
            console.error('AdminService.eliminarOrden:', error);
            throw error;
        }
    }
};