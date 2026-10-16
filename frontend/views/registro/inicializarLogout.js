import { AuthService } from "../../services/authService.js"

const authService = new AuthService();

export const inicializarLogout = () => {
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', async (e) => {
            e.preventDefault();

            // Opcional: feedback visual de carga en el botón
            btnLogout.disabled = true;
            btnLogout.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Saliendo...`;

            try {
                await authService.logout(); // Destruye la sesión en Express
            } catch (error) {
                console.error('Error al notificar logout al servidor:', error);
            } finally {
                // Independientemente de si el backend respondió o no, limpiamos y redirigimos

                window.location.href = '/';
            }
        });
    }
}