Pingüino Médico 🐧🩺
(Español)

Un asistente web simple diseñado para facilitar la redacción inicial de notas clínicas, permitiendo la captura rápida de datos básicos del paciente y la generación de texto pre-formateado para copiar y pegar en sistemas de Historia Clínica Electrónica (HCE) principales u otros documentos.

Este proyecto es también una herramienta activa de aprendizaje para desarrollo web front-end (HTML, CSS, JavaScript).

(English)

A simple web assistant designed to facilitate the initial drafting of clinical notes, allowing for the rapid capture of basic patient data and the generation of pre-formatted text for copying and pasting into main Electronic Health Record (EHR) systems or other documents.

This project is also an active learning tool for front-end web development (HTML, CSS, JavaScript).

Características Principales / Key Features
(Español)

Interfaz Sencilla: Diseño limpio y directo enfocado en la funcionalidad.

Entrada de Datos Estructurada: Formulario para capturar información básica del paciente (nombre, ID, edad), síntoma principal, antigüedad y otros síntomas asociados. (Expandible)

Almacenamiento Temporal (localStorage): Guarda la información para persistir entre páginas en la misma sesión.

Generación de Texto Pre-formateado: Crea automáticamente textos narrativos para secciones como "Enfermedad Actual". (Expandible)

Funcionalidad "Copiar al Portapapeles": Botones dedicados para copiar fácilmente cada fragmento de texto.

Navegación Simple: Flujo claro entre inicio, formulario y resultados.

Diseño Responsivo (Básico): Intenta adaptarse a diferentes tamaños de pantalla.

(English)

Simple Interface: Clean and straightforward design focused on functionality.

Structured Data Entry: Form to capture basic patient info (name, ID, age), main symptom, duration, and associated symptoms. (Expandable)

Temporary Storage (localStorage): Saves information to persist between pages within the same session.

Pre-formatted Text Generation: Automatically creates narrative text for sections like "History of Present Illness". (Expandable)

"Copy to Clipboard" Functionality: Dedicated buttons to easily copy each generated text snippet.

Simple Navigation: Clear flow between the home page, input form, and results page.

Basic Responsive Design: Attempts to adapt to different screen sizes.

Flujo de Trabajo / Workflow
(Español)

Inicio (index.html): Elegir "Nuevo Registro" (va al formulario) o "Historia Clínica" (va a resultados si hay datos, si no, alerta).

Formulario (segundo.html): Introducir datos. Guardar datos básicos y seleccionar otros síntomas (se guardan en localStorage). Presionar "Generar" va a resultados.

Resultados (tercero.html): Lee datos de localStorage. Muestra textos generados. Usar botones "Copiar". "Finalizar" vuelve al inicio.

(English)

Home (index.html): Choose "New Record" (goes to form) or "Medical History" (goes to results if data exists, otherwise alerts).

Form (segundo.html): Enter data. Saving basic data and selecting other symptoms stores them in localStorage. Pressing "Generate" goes to results.

Results (tercero.html): Reads data from localStorage. Displays generated text. Use "Copy" buttons. "Finalize" returns to home.

Tecnologías Utilizadas / Technologies Used
HTML5: Semantic structure.

CSS3: Styling and layout (style.css, segundo.css, tercero.css).

JavaScript (Vanilla JS, ES6+): Interactivity, DOM manipulation, event handling, application logic, localStorage usage.

Browser localStorage API: Temporary data storage (subject to the security warning).

Estado del Proyecto / Project Status
(Español)

Actualmente en Desarrollo / Fase de Aprendizaje.

El código base requiere correcciones y mejoras activas.

El enfoque principal es solidificar la funcionalidad básica y aprender los conceptos de desarrollo web.

(English)

Currently in Development / Learning Phase.

The codebase requires active corrections and improvements.

The main focus is on solidifying basic functionality and learning the involved web development concepts.

Objetivos de Aprendizaje / Learning Objectives
(Español)

Este proyecto sirve como una herramienta práctica para aprender y aplicar conceptos fundamentales de: HTML semántico, estilización CSS, y JavaScript (Manipulación del DOM, Eventos, Formularios, localStorage, estructura básica de aplicación front-end).

(English)

This project serves as a practical tool to learn and apply fundamental concepts of: Semantic HTML, CSS styling, and JavaScript (DOM Manipulation, Events, Forms, localStorage, basic front-end application structure).

Cómo Ejecutar / How to Run
(Español)

Clona o descarga los archivos (.html, .css, .js, carpeta imagenes/).

Mantén la estructura de archivos en la misma carpeta.

Abre index.html en un navegador web moderno.

(English)

Clone or download the files (.html, .css, .js, imagenes/ folder).

Keep the file structure in the same folder.

Open index.html in a modern web browser.

Posibles Mejoras Futuras / Potential Future Improvements
(Español)

Validación de formularios más robusta.

Añadir más campos al formulario (signos vitales, antecedentes, etc.).

Generar texto más complejo/personalizable.

Mejorar organización del código CSS/JS.

ABSOLUTAMENTE NECESARIO si se escala: Reemplazar localStorage por un backend seguro.

(English)

More robust form validation.

Add more relevant fields to the form (vital signs, history, etc.).

Generate more complex/customizable text.

Improve CSS/JS code organization.

ABSOLUTELY NECESSARY if scaled: Replace localStorage with a secure backend.

Autor / Author
Juan Felipe Garavito Arias 👨‍⚕️ (Physician | Developer in Progress)

(Español) Médico interesado en la intersección entre la salud y la tecnología. Aprendiendo activamente desarrollo web (HTML, CSS, JavaScript, Python) para crear herramientas que mejoren la eficiencia en el ámbito médico. Abierto a colaboraciones en tecnología para la salud.

(English) Physician interested in the intersection of healthcare and technology. Actively learning web development (HTML, CSS, JavaScript, Python) to create tools that improve efficiency in the medical field. Open to collaborations in health tech.

GitHub: @juan2894

LinkedIn: Juan Garavito Arias

"Passionate about bridging the gap between healthcare and technology to improve patient care through innovative coding solutions!"
