import baseUrl from "./baseUrl.js";

export class AuthService {
    constructor() {
        this.baseUrl = baseUrl
        this.fetchOptions = {
            credentials: 'include', // Vital para enviar y recibir la cookie de sesión (connect.sid)
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    // 1. Iniciar Sesión (Login)
    async login(email, password) {
        try {


            const response = await fetch(`${this.baseUrl}api/auth/signin`, {
                ...this.fetchOptions,
                method: 'POST',
                body: JSON.stringify({ email, password }),
                credentials: true
            });


            //Valdiar respuesta exitosa
            if (response.ok) {
                return await response.json();
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
            console.error('AuthService.login:', error);
            throw error;
        }
    }

    // 2. Verificar Perfil Actual (Para comprobar sesión activa en index.html)
    async getPerfil() {
        try {
            const response = await fetch(`${this.baseUrl}api/auth/me`, this.fetchOptions);

            if (!response.ok) {
                throw new Error('No autenticado');
            }

            const data = await response.json();
            return data.user || data; // Depende de cómo devuelva el objeto tu backend
        } catch (error) {
            console.error('AuthService.getPerfil:', error);
            throw error;
        }
    }

    // 3. Cerrar Sesión (Logout)
    async logout() {
        try {
            const response = await fetch(`${this.baseUrl}api/auth/logout`, {
                ...this.fetchOptions,
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Error al cerrar sesión');
            }

            return await response.json();
        } catch (error) {
            console.error('AuthService.logout:', error);
            throw error;
        }
    }
}