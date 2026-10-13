// src/login.js
import { AuthService } from "../services/authService.js";
import { mostrarModalRespuesta } from "../views/mostrarModal.js";


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
            window.location.href = '/panel-admin'; // Redirige al Dashboard
        } else {
            alert('Acceso no autorizado para este usuario.');
        }
    } catch (error) {
        mostrarModalRespuesta(error.message);
    }
});