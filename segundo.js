function guardarDatos() {
    // Obtener los valores de los campos del formulario usando el atributo id
    const nombrePaciente = document.getElementById('nombrePaciente').value;
    const documentoIdentidad = document.getElementById('documentoIdentidad').value;
    const edad = document.getElementById('edad').value;
    const sintomaPrincipal = document.getElementById('sintomaPrincipal').value;
    const antiguedadSintomas = document.getElementById('antiguedadSintomas').value;

    // Guardar los datos en localStorage para acceder desde la otra página
    localStorage.setItem('nombrePaciente', nombrePaciente);
    localStorage.setItem('documentoIdentidad', documentoIdentidad);
    localStorage.setItem('edad', edad);
    localStorage.setItem('sintomaPrincipal', sintomaPrincipal);
    localStorage.setItem('antiguedadSintomas', antiguedadSintomas);

    // Redirigir a la página donde se mostrarán los datos
    window.location.href = 'tercero.html';
}
