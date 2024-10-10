document.addEventListener('DOMContentLoaded', () => {
    const formDatosPaciente = document.getElementById('formDatosPaciente');

    formDatosPaciente.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío automático del formulario

        // Obtener valores del formulario utilizando un solo bloque de código
        const campos = {
            nombrePaciente: document.getElementById('nombrePaciente').value.trim(),
            documentoIdentidad: document.getElementById('documentoIdentidad').value.trim(),
            edad: document.getElementById('edad').value.trim(),
            sintomaPrincipal: document.getElementById('sintomaPrincipal').value,
            antiguedadSintomas: document.getElementById('antiguedadSintomas').value.trim()
        };

        // Validaciones básicas en un solo ciclo
        for (let campo in campos) {
            if (!campos[campo] || (campo === 'documentoIdentidad' && isNaN(campos[campo])) || (campo === 'edad' && isNaN(campos[campo]))) {
                alert(`Por favor, ingrese un valor válido para ${campo.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
                return;
            }
        }

        // Guardar los datos en localStorage para acceder desde la otra página
        Object.entries(campos).forEach(([key, value]) => localStorage.setItem(key, value));

        // Mostrar mensaje de éxito
        alert('Datos del paciente guardados con éxito');
        
        // Limpiar el formulario
        formDatosPaciente.reset();
        
        // Redirigir a otra página
        window.location.href = 'tercero.html';
    });
});

}
