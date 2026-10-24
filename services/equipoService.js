
import baseUrl from "./baseUrl.js"

// src/services/AdminService.js
export class EquipoService {
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

    // --- EQUIPOS ---
    async getEquipos() {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/equipos`, this.fetchOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al obtener equipos');
            return data.equipos;
        } catch (error) {
            console.error('AdminService.getEquipos:', error);
            throw error;
        }
    }

    async crearEquipo(equipoData) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin//equipos`, {
                ...this.fetchOptions,
                method: 'POST',
                body: JSON.stringify(equipoData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al crear equipo');
            return data.equipo;
        } catch (error) {
            console.error('AdminService.crearEquipo:', error);
            throw error;
        }
    }
};