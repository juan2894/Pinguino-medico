// --- segundo.js ---
// Este script maneja la lógica del formulario de la historia clínica (segundo.html).

// Se espera a que el DOM esté completamente cargado para asegurar que todos los elementos del formulario existan.
document.addEventListener('DOMContentLoaded', () => {

  // Se obtiene el formulario por su nuevo ID 'historiaClinicaForm'.
  const form = document.getElementById('historiaClinicaForm');

  // Se añade el "escuchador de eventos" para el evento 'submit' del formulario.
  // Esto se activa cuando el usuario hace clic en el botón <button type="submit">.
  form.addEventListener('submit', (event) => {
    // event.preventDefault() es crucial. Evita que el formulario se envíe de la manera tradicional
    // (recargando la página), permitiéndonos manejar los datos con JavaScript.
    event.preventDefault();

    // --- RECOLECCIÓN DE DATOS ---

    // Se crea un objeto 'FormData' a partir del formulario.
    // FormData es una forma moderna y eficiente de obtener todos los datos de un formulario.
    const formData = new FormData(form);

    // 1. Datos básicos del paciente (campos de texto, número y select)
    // Se extraen usando formData.get('name-del-input').
    const datosPaciente = {
      nombrePaciente: formData.get('nombrePaciente'),
      documentoIdentidad: formData.get('documentoIdentidad'),
      edad: formData.get('edad'),
      sintomaPrincipal: formData.get('sintomaPrincipal'),
      antiguedadSintomas: formData.get('antiguedadSintomas'),
      frecuenciaCardiaca: formData.get('frecuenciaCardiaca'),
      tensionArterial: formData.get('tensionArterial'),
    };

    // 2. Datos de Checkboxes (pueden tener múltiples selecciones)
    // Para los checkboxes con el mismo 'name', usamos formData.getAll('name-del-input').
    // Esto nos devuelve un array con los 'value' de todos los checkboxes seleccionados.
    const otrosSintomas = formData.getAll('otrosSintomas');
    const antecedentes = formData.getAll('antecedentes');
    const examenFisicoAnormal = formData.getAll('examenFisicoAnormal');

    // --- VALIDACIÓN ---

    // BUENA PRÁCTICA: Reutilización de código.
    // Se utilizan las funciones del archivo `validaciones.js` que ya hemos importado en el HTML.
    // Se valida un subconjunto de los campos más importantes.
    const camposParaValidar = {
        nombrePaciente: datosPaciente.nombrePaciente,
        edad: datosPaciente.edad,
        sintomaPrincipal: datosPaciente.sintomaPrincipal
    };

    const error = validarCampos(camposParaValidar); // `validarCampos` viene de `validaciones.js`
    if (error) {
      // Si hay un error de validación, se muestra el mensaje y se detiene la ejecución.
      alert(error);
      return;
    }

    // --- ALMACENAMIENTO EN LOCALSTORAGE ---

    // localStorage solo puede guardar strings. Para guardar objetos o arrays (como la lista de síntomas),
    // debemos convertirlos a un formato de string llamado JSON.
    // JSON.stringify() convierte un objeto/array de JavaScript en una cadena JSON.

    // Se guardan los datos básicos.
    for (const key in datosPaciente) {
      localStorage.setItem(key, datosPaciente[key]);
    }

    // Se guardan los arrays de los checkboxes.
    localStorage.setItem('otrosSintomas', JSON.stringify(otrosSintomas));
    localStorage.setItem('antecedentes', JSON.stringify(antecedentes));
    localStorage.setItem('examenFisicoAnormal', JSON.stringify(examenFisicoAnormal));

    // --- FINALIZACIÓN ---

    // Se informa al usuario que los datos se guardaron.
    alert('Datos del paciente guardados con éxito. Redirigiendo a la página de resultados...');

    // Se redirige al usuario a la página de resultados para ver el texto generado.
    window.location.href = 'tercero.html';
  });
});
