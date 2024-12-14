// validaciones.js

/**
 * Verifica si un campo está vacío.
 * @param {string} valor - Valor del campo.
 * @returns {boolean} - True si está vacío, false en caso contrario.
 */
function estaVacio(valor) {
    return !valor || valor.trim() === '';
}

/**
 * Verifica si un valor es un número válido.
 * @param {string} valor - Valor del campo.
 * @returns {boolean} - True si es un número, false en caso contrario.
 */
function esNumeroValido(valor) {
    return !isNaN(valor) && valor > 0;
}

/**
 * Realiza las validaciones de los campos del formulario.
 * @param {object} campos - Objeto con los valores de los campos.
 * @returns {string|null} - Mensaje de error si hay un problema, null si todo es válido.
 */
function validarCampos(campos) {
    if (estaVacio(campos.nombrePaciente)) {
        return 'El nombre del paciente no puede estar vacío.';
    }
    if (estaVacio(campos.documentoIdentidad) || !esNumeroValido(campos.documentoIdentidad)) {
        return 'El documento de identidad debe ser un número válido.';
    }
    if (estaVacio(campos.edad) || !esNumeroValido(campos.edad)) {
        return 'La edad debe ser un número válido mayor a 0.';
    }
    if (estaVacio(campos.sintomaPrincipal)) {
        return 'El síntoma principal no puede estar vacío.';
    }
    if (estaVacio(campos.antiguedadSintomas)) {
        return 'La antigüedad de los síntomas no puede estar vacía.';
    }
    return null; // Todos los campos son válidos
}

