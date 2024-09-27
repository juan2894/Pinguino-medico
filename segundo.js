function guardarDatos() {
    // Obtener los valores de los campos del formulario
    const nombrePaciente = document.querySelector('input[placeholder="Juan Carlos Rodríguez"]').value;
    const documentoIdentidad = document.querySelector('input[placeholder="90954346"]').value;
    const edad = document.querySelector('input[placeholder="43 años"]').value;
    const sintomaPrincipal = document.querySelector('.v-sintomas').value;
    const antiguedadSintomas = document.querySelector('input[placeholder="una semana"]').value;

    // Guardar los datos en localStorage para acceder desde la otra página
    localStorage.setItem('nombrePaciente', nombrePaciente);
    localStorage.setItem('documentoIdentidad', documentoIdentidad);
    localStorage.setItem('edad', edad);
    localStorage.setItem('sintomaPrincipal', sintomaPrincipal);
    localStorage.setItem('antiguedadSintomas', antiguedadSintomas);

    // Redirigir a la página donde se mostrarán los datos
    window.location.href = 'tercero.html';
}
