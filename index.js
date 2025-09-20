// --- index.js ---
// Este script maneja la lógica de la página principal (index.html).

// Se espera a que todo el contenido del DOM (la estructura de la página) esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // Se obtiene el botón "Historia clínica" por su ID.
    const historiaClinicaBtn = document.getElementById('historiaClinicaBtn');

    // Se añade un "escuchador de eventos" para el clic en el botón.
    historiaClinicaBtn.addEventListener('click', () => {
      // Se verifica si existe un dato en localStorage. 'nombrePaciente' se usa como indicador
      // de que hay una sesión de paciente activa.
      if (localStorage.getItem('nombrePaciente')) {
        // Si hay datos, se redirige al usuario a la página de resultados (tercero.html).
        // ¡ERROR CORREGIDO! Antes redirigía a segundo.html, lo cual era incorrecto según el flujo de la app.
        window.location.href = 'tercero.html';
      } else {
        // Si no hay datos, se muestra una alerta al usuario informándole.
        alert('No hay información de historia clínica almacenada.');
      }
    });

});
