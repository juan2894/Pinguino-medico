// Archivo: validaciones.js
// Este archivo contiene funciones reutilizables para validar formularios y manejar errores.

/**
 * Valida si un campo está vacío.
 * @param {string} valor - El valor del campo.
 * @returns {boolean} - True si está vacío, false en caso contrario.
 */
function validarCampoVacio(valor) {
    return !valor.trim();
}

/**
 * Valida si un valor es numérico.
 * @param {string} valor - El valor a validar.
 * @returns {boolean} - True si es numérico, false en caso contrario.
 */
function validarNumerico(valor) {
    return !isNaN(valor);
}

/**
 * Valida un conjunto de campos basado en reglas específicas.
 * @param {Object} campos - Objeto con los valores de los campos a validar.
 * @returns {string|null} - Mensaje de error si hay un problema, null si todo es válido.
 */
function validarCampos(campos) {
    for (let campo in campos) {
        if (validarCampoVacio(campos[campo])) {
            return `Por favor, ingrese un valor válido para ${campo.replace(/([A-Z])/g, ' $1').toLowerCase()}.`;
        }
        if ((campo === 'documentoIdentidad' || campo === 'edad') && !validarNumerico(campos[campo])) {
            return `El campo ${campo.replace(/([A-Z])/g, ' $1').toLowerCase()} debe ser un número.`;
        }
    }
    return null;
}

/**
 * Verifica si localStorage tiene valores válidos.
 * @param {Array<string>} keys - Array con las claves que se deben verificar.
 * @returns {boolean} - True si todos los valores existen y son válidos, false en caso contrario.
 */
function validarLocalStorage(keys) {
    for (const key of keys) {
        if (!localStorage.getItem(key)) {
            return false;
        }
    }
    return true;
}
