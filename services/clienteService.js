
import baseUrl from "./baseUrl.js"

// src/services/AdminService.js
export class ClienteService {
    constructor() {
        this.baseUrl = baseUrl;
        // Configuración para enviar cookies de sesión (Passport)
        this.fetchOptions = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    // --- CLIENTES ---
    async getClientes() {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/clientes`, this.fetchOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al obtener clientes');
            return data.clientes;
        } catch (error) {
            console.error('AdminService.getClientes:', error);
            throw error;
        }
    }

    async crearCliente(clienteData) {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/clientes`, {
                ...this.fetchOptions,
                method: 'POST',
                body: JSON.stringify(clienteData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al crear cliente');
            return data.cliente;
        } catch (error) {
            console.error('AdminService.crearCliente:', error);
            throw error;
        }
    }
};