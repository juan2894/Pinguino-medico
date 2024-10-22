// Constantes para validación
const VALIDATION_RULES = {
    nombrePaciente: {
        validate: (value) => value.length >= 2 && /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value),
        message: 'El nombre debe contener al menos 2 caracteres y solo letras'
    },
    documentoIdentidad: {
        validate: (value) => /^\d{8,12}$/.test(value),
        message: 'El documento debe contener entre 8 y 12 números'
    },
    edad: {
        validate: (value) => value > 0 && value < 150 && Number.isInteger(Number(value)),
        message: 'La edad debe ser un número entero entre 1 y 150'
    },
    sintomaPrincipal: {
        validate: (value) => value.length > 0,
        message: 'Debe seleccionar un síntoma principal'
    },
    antiguedadSintomas: {
        validate: (value) => value.length > 0,
        message: 'Debe especificar la antigüedad de los síntomas'
    }
};

// Clase para manejar el formulario
class FormularioHistoriaClinica {
    constructor() {
        this.form = document.getElementById('formDatosPaciente');
        this.setupEventListeners();
        this.setupValidation();
    }

    setupEventListeners() {
        if (!this.form) {
            console.error('No se encontró el formulario de historia clínica');
            return;
        }

        // Manejar el envío del formulario
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Validación en tiempo real
        Object.keys(VALIDATION_RULES).forEach(fieldName => {
            const element = document.getElementById(fieldName);
            if (element) {
                element.addEventListener('input', () => this.validateField(fieldName));
            }
        });

        // Manejar checkboxes de otros síntomas
        const checkboxes = this.form.querySelectorAll('input[type="checkbox"][name="otrosSintomas"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updateOtrosSintomas());
        });
    }

    setupValidation() {
        // Agregar elementos para mensajes de error
        Object.keys(VALIDATION_RULES).forEach(fieldName => {
            const element = document.getElementById(fieldName);
            if (element) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.id = `${fieldName}-error`;
                errorDiv.style.color = 'red';
                errorDiv.style.fontSize = '0.8em';
                errorDiv.style.marginTop = '4px';
                element.parentNode.appendChild(errorDiv);
            }
        });
    }

    validateField(fieldName) {
        const element = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (!element || !errorElement) return false;

        const rule = VALIDATION_RULES[fieldName];
        const isValid = rule.validate(element.value);

        if (!isValid) {
            errorElement.textContent = rule.message;
            element.classList.add('invalid');
        } else {
            errorElement.textContent = '';
            element.classList.remove('invalid');
        }

        return isValid;
    }

    validateAllFields() {
        return Object.keys(VALIDATION_RULES).every(fieldName => this.validateField(fieldName));
    }

    updateOtrosSintomas() {
        const checkboxes = this.form.querySelectorAll('input[type="checkbox"][name="otrosSintomas"]:checked');
        const sintomas = Array.from(checkboxes).map(cb => cb.value);
        try {
            localStorage.setItem('otrosSintomas', JSON.stringify(sintomas));
        } catch (error) {
            console.error('Error al guardar otros síntomas:', error);
        }
    }

    recopilarSignosVitales() {
        return {
            FA: document.getElementById('FA')?.value || '',
            TA: document.getElementById('TA')?.value || '',
            FR: document.getElementById('FR')?.value || '',
            PO2: document.getElementById('PO2')?.value || '',
            temperatura: document.getElementById('temperatura')?.value || ''
        };
    }

    recopilarExamenFisico() {
        const checkboxes = this.form.querySelectorAll('input[type="checkbox"][name="examenFisico"]:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }

    async guardarDatos(datos) {
        try {
            Object.entries(datos).forEach(([key, value]) => {
                localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
            });
            return true;
        } catch (error) {
            console.error('Error al guardar datos:', error);
            return false;
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (!this.validateAllFields()) {
            alert('Por favor, corrija los errores en el formulario antes de continuar.');
            return;
        }

        const datosFormulario = {
            nombrePaciente: document.getElementById('nombrePaciente').value.trim(),
            documentoIdentidad: document.getElementById('documentoIdentidad').value.trim(),
            edad: document.getElementById('edad').value.trim(),
            sintomaPrincipal: document.getElementById('sintomaPrincipal').value,
            antiguedadSintomas: document.getElementById('antiguedadSintomas').value.trim(),
            signosVitales: this.recopilarSignosVitales(),
            examenFisico: this.recopilarExamenFisico(),
            fechaCreacion: new Date().toISOString()
        };

        try {
            const guardadoExitoso = await this.guardarDatos(datosFormulario);
            
            if (guardadoExitoso) {
                alert('Historia clínica guardada exitosamente');
                window.location.href = 'tercero.html';
            } else {
                throw new Error('Error al guardar los datos');
            }
        } catch (error) {
            console.error('Error en el proceso de guardado:', error);
            alert('Ocurrió un error al guardar los datos. Por favor, intente nuevamente.');
        }
    }
}

// Inicializar el formulario cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    try {
        new FormularioHistoriaClinica();
    } catch (error) {
        console.error('Error al inicializar el formulario:', error);
        alert('Ocurrió un error al cargar el formulario. Por favor, recargue la página.');
    }
});

// Función para limpiar localStorage al volver al inicio
window.addEventListener('beforeunload', (event) => {
    if (window.location.pathname.includes('index.html')) {
        localStorage.clear();
    }
});
// codigo previo
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
