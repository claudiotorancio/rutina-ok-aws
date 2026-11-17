import baseUrl from "./baseUrl.js"

// src/services/AdminService.js
export class TecnicoService {
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

    // --- TÉCNICOS ---
    async getTecnicos() {
        try {

            const response = await fetch(`${this.baseUrl}api/admin/tecnicos`, this.fetchOptions);
            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al obtener técnicos');
            return data.tecnicos;
        } catch (error) {
            console.error('AdminService.getTecnicos:', error);
            throw error;
        }
    }

    //Actualizar tecnicos
    async actualizarTecnico(id, tecnicoData) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/tecnicos/${id}`, {
                ...this.fetchOptions,
                method: 'PUT',
                body: JSON.stringify(tecnicoData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al actualizar técnico');
            return data.tecnico;
        } catch (error) {
            console.error('AdminService.actualizarTecnico:', error);
            throw error;
        }
    }

    //Cambiar estado de tecnico
    async toggleEstadoTecnico(id) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/tecnicos/${id}/desactivar`, {
                ...this.fetchOptions,
                method: 'PATCH',
                body: JSON.stringify()
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al actualizar técnico');
            return data.tecnico;
        } catch (error) {
            console.error('TecnicoService.toogleEstadoTecnico:', error);
            throw error;
        }
    }

    //Registrar un tecnico nuevo
    async registrarTecnico(tecnicoNuevo) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/registrar-tecnico`, {
                ...this.fetchOptions,
                method: 'POST',
                body: JSON.stringify(tecnicoNuevo)
            });
            //Valdiar respuesta exitosa
            if (response.ok) {
                const data = await response.json();
                return data.nuevoTecnicoCMMS;
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
            console.error('TecnicoService.registrarTecnico:', error);
            throw error;
        }
    }
}