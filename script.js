const form = document.getElementById('contactForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const motivoInput = document.getElementById('motivo');
const errorMessage = document.getElementById('error-message');

function displayError(message) {
    errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        }

        function hideError() {
            errorMessage.textContent = '';
                errorMessage.style.display = 'none';
                }

                function isValidEmail(email) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return emailPattern.test(email);
                        }

                        form.addEventListener('submit', function(event) {
                            event.preventDefault(); 
                                hideError();

                                    const nombre = nombreInput.value.trim();
                                        const email = emailInput.value.trim();
                                            const motivo = motivoInput.value.trim();

                                                // Validación 1: Campos vacíos
                                                    if (nombre === '' || email === '' || motivo === '') {
                                                            displayError('Todos los campos son obligatorios.');
                                                                    return; 
                                                                        }

                                                                            // Validación 2: Formato de correo electrónico
                                                                                if (!isValidEmail(email)) {
                                                                                        displayError('Por favor, ingrese un formato de correo electrónico válido.');
                                                                                                return; 
                                                                                                    }

                                                                                                        // Éxito:
                                                                                                            alert('¡Gracias por su interés, ' + nombre + '! Su solicitud ha sido enviada a Elizabeth Montiel.');

                                                                                                                form.reset();
                                                                                                                });