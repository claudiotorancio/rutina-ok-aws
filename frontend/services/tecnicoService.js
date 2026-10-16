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
}