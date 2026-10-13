
import baseUrl from "./baseUrl.js"

// src/services/AdminService.js
export class AdminService {
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

    // --- ÓRDENES DE TRABAJO ---
    async getOrdenes() {
        try {
            const response = await fetch(`${this.baseUrl}api/admin/listar-ordenes`, this.fetchOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al obtener órdenes');
            return data.ordenes;
        } catch (error) {
            console.error('AdminService.getOrdenes:', error);
            throw error;
        }
    }

    async asignarOrden(ordenData) {
        try {
            const response = await fetch(`${this.baseUrl}api/orden/asignar`, {
                ...this.fetchOptions,
                method: 'POST',
                body: JSON.stringify(ordenData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Error al asignar orden');
            return data.orden;
        } catch (error) {
            console.error('AdminService.asignarOrden:', error);
            throw error;
        }
    }
}