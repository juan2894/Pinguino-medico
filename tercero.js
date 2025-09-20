// --- tercero.js ---
// Este script maneja la lógica de la página de resultados (tercero.html).

document.addEventListener('DOMContentLoaded', () => {

  // --- OBTENCIÓN DE ELEMENTOS DEL DOM ---
  // Se obtienen todos los elementos con los que vamos a interactuar (textareas y botones).
  const outputs = {
    enfermedadActual: document.getElementById('enfermedadActualOutput'),
    antecedentes: document.getElementById('antecedentesOutput'),
    examenFisico: document.getElementById('examenFisicoOutput'),
    plan: document.getElementById('planOutput'),
  };

  const copyButtons = {
    enfermedadActual: document.getElementById('copiarEnfermedadActual'),
    antecedentes: document.getElementById('copiarAntecedentes'),
    examenFisico: document.getElementById('copiarExamenFisico'),
    plan: document.getElementById('copiarPlan'),
  };

  const finalizarBtn = document.getElementById('finalizarBtn');

  // --- RECUPERACIÓN DE DATOS DE LOCALSTORAGE ---

  // BUENA PRÁCTICA: Usar una función para centralizar la obtención de datos.
  // Esto hace el código más limpio y fácil de mantener.
  const getDatosDelStorage = () => {
    const datos = {
      nombrePaciente: localStorage.getItem('nombrePaciente') || 'N/A',
      edad: localStorage.getItem('edad') || 'N/A',
      sintomaPrincipal: localStorage.getItem('sintomaPrincipal') || 'N/A',
      antiguedadSintomas: localStorage.getItem('antiguedadSintomas') || 'N/A',
      frecuenciaCardiaca: localStorage.getItem('frecuenciaCardiaca') || 'N/A',
      tensionArterial: localStorage.getItem('tensionArterial') || 'N/A',
      // ERROR CORREGIDO: Se parsea el JSON de forma segura.
      // Si el item no existe, `getItem` devuelve `null`. `JSON.parse(null)` da error.
      // Por eso, se usa `|| '[]'` para pasar un string de array vacío si no hay nada.
      otrosSintomas: JSON.parse(localStorage.getItem('otrosSintomas') || '[]'),
      antecedentes: JSON.parse(localStorage.getItem('antecedentes') || '[]'),
      examenFisicoAnormal: JSON.parse(localStorage.getItem('examenFisicoAnormal') || '[]'),
    };
    return datos;
  };

  const paciente = getDatosDelStorage();

  // --- GENERACIÓN DE TEXTO NARRATIVO ---

  // 1. Enfermedad Actual
  let textoEnfermedadActual = `Paciente ${paciente.nombrePaciente}, de ${paciente.edad} años, consulta por cuadro clínico de ${paciente.antiguedadSintomas} de evolución consistente en ${paciente.sintomaPrincipal}.`;
  if (paciente.otrosSintomas.length > 0) {
    textoEnfermedadActual += ` Adicionalmente, refiere síntomas asociados como: ${paciente.otrosSintomas.join(', ')}.`;
  } else {
    textoEnfermedadActual += ` No refiere otros síntomas.`;
  }
  outputs.enfermedadActual.value = textoEnfermedadActual;

  // 2. Antecedentes
  outputs.antecedentes.value = paciente.antecedentes.length > 0
    ? `Refiere los siguientes antecedentes: ${paciente.antecedentes.join(', ')}.`
    : 'No refiere antecedentes de importancia.';

  // 3. Examen Físico
  let textoExamenFisico = `Signos vitales: FC: ${paciente.frecuenciaCardiaca} lpm, TA: ${paciente.tensionArterial} mmHg. `;
  if (paciente.examenFisicoAnormal.length > 0) {
    textoExamenFisico += `Al examen físico se encuentra como hallazgo patológico: ${paciente.examenFisicoAnormal.join(', ')}. Resto del exámen físico sin alteraciones.`;
  } else {
    textoExamenFisico += 'Examen físico dentro de límites normales.';
  }
  outputs.examenFisico.value = textoExamenFisico;

  // 4. Plan (ejemplo simple)
  outputs.plan.value = `Se solicitan paraclínicos de rutina y se inicia manejo sintomático. Se deja pendiente de revaloración según resultados.`;


  // --- FUNCIONALIDAD DE BOTONES ---

  // 1. Botones de Copiar
  // Se itera sobre los botones de copia para asignarles su funcionalidad.
  for (const key in copyButtons) {
    copyButtons[key].addEventListener('click', () => {
      // `key` corresponde a 'enfermedadActual', 'antecedentes', etc.
      const textoACopiar = outputs[key].value;

      // La API `navigator.clipboard` es la forma moderna y segura de copiar al portapapeles.
      navigator.clipboard.writeText(textoACopiar)
        .then(() => {
          // Éxito al copiar
          alert(`Texto de "${key.replace(/([A-Z])/g, ' $1')}" copiado al portapapeles.`);
        })
        .catch(err => {
          // Error al copiar
          console.error('Error al copiar texto: ', err);
          alert('No se pudo copiar el texto.');
        });
    });
  }

  // 2. Botón Finalizar
  finalizarBtn.addEventListener('click', () => {
    // BUENA PRÁCTICA: Limpiar el almacenamiento para no dejar datos residuales
    // para el próximo paciente.
    localStorage.clear();

    // Se informa al usuario y se le redirige a la página de inicio.
    alert('Historia finalizada y datos limpiados. Volviendo al inicio.');
    window.location.href = 'index.html';
  });

});
