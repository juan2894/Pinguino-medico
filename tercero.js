document.addEventListener('DOMContentLoaded', function () {
    // Recuperar los datos del paciente desde localStorage
    const nombrePaciente = localStorage.getItem('nombrePaciente');
    const edad = localStorage.getItem('edad');
    const sintomaPrincipal = localStorage.getItem('sintomaPrincipal');
    const antiguedadSintomas = localStorage.getItem('antiguedadSintomas');
    const otrosSintomas = JSON.parse(localStorage.getItem('otrosSintomas')) || [];

    // Formatear el texto de la descripción del paciente
    const descripcionPaciente = `Paciente de ${edad} con cuadro de ${sintomaPrincipal} de ${antiguedadSintomas}, quien adicionalmente refiere haber presentado los siguientes síntomas: ${otrosSintomas.join(', ')}.`;

    // Mostrar la descripción del paciente debajo de "Enfermedad actual"
    const enfermedadActualInput = document.querySelector('.enfermedadac');
    if (enfermedadActualInput) {
        enfermedadActualInput.value = descripcionPaciente;
    }
});
