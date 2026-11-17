// src/login.js
import { AuthService } from "../services/authService.js";
import { mostrarModalRespuesta } from "../views/mostrarModal.js";
import { mostrarError } from "../config/helpersInterfaz.js"


const authService = new AuthService();
const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await authService.login(email, password);
        // Si la respuesta es exitosa, Express ya guardó la cookie connect.sid

        if (res.user && res.user.tipo_usuario === 'ADMIN') {
            const esProduccion = process.env.NODE_ENV === 'production'
            window.location.href = esProduccion ? '/panel.html' : '/panel.html';
        } else {
            mostrarError('Acceso no autorizado para este usuario.');
        }
    } catch (error) {
        mostrarError(error.message);
    }
});