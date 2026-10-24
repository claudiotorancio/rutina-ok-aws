
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

    async getIntervenciones() {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/intervenciones`, this.fetchOptions);
            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al obtener las intervenciones');

            return data;
        } catch (error) {
            console.error('AdminService.getIntervenciones:', error);
            throw error;
        }
    }
}