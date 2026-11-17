
import baseUrl from "./baseUrl.js"

// src/services/AdminService.js
export class IntervencionService {
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

    //Obtener intervenciones
    async getIntervenciones() {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/intervenciones`, this.fetchOptions);
            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al obtener las intervenciones');

            return data;
        } catch (error) {
            console.error('IntervencioonesService.getIntervenciones:', error);
            throw error;
        }
    }

    //Obtener intervenciones por ID
    async getIntervencionById(id) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/obtener-intervencion/${id}`, this.fetchOptions);
            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al obtener la intervencion');

            return data;
        } catch (error) {
            console.error('IntervencionService.getIntervencionesById:', error);
            throw error;
        }
    }

    //Obtener intervenciones por ID
    async getContarIntervencionesNuevas() {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/contar-intervenciones-nuevas`, this.fetchOptions);
            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al obtener las intervenciones');

            return data.count;
        } catch (error) {
            console.error('IntervencionService.getContarIntervencionesNuevas', error);
            throw error;
        }
    }

    //Obtener intervenciones por ID
    async patchIntervencionesVistas(id) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/marcar-intervenciones-vistas/${id}`, {
                ...this.fetchOptions,
                method: 'PATCH',
            });
            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al marcar las vistas');

            return data;
        } catch (error) {
            console.error('IntervencionService.patchIntervencionesVistas', error);
            throw error;
        }
    }
}