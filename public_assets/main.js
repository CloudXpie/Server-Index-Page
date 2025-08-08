document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sib-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = form.querySelector('input[name="email"]');
            const email = emailInput ? emailInput.value : '';

            const formData = new FormData(form);
            formData.append('EMAIL', email);

            const BREVO_FORM_ACTION = "https://7530e002.sibforms.com/serve/MUIFAJDuKB2p425F3N_RZJCYFNrxDv7rbxFR6U2kH2ym7BgBbHWGye5WxZo-V2_C3HrUndk3G7s1aMv4LPBKd8gNC9GSLwlUw8kE24JNfiiv4RflCGV33neJbn5B6j0IvnA_34pxOtnBJiGthPkFHiPDzWTOXRdZszZvzQ3BPK-iWek_HJb6S2Ne6H1-pxZO_d0GkZKoOBUgldoh";
            fetch(BREVO_FORM_ACTION, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Important for cross-origin form submissions
            })
            .then(response => {
                // Brevo often redirects or handles success/failure on their end
                // For no-cors mode, we can't read the response status or body
                console.log('Form submitted to Brevo. Check Brevo dashboard for subscription status.');
                alert('Thank you for subscribing!');
                form.reset();
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('There was an error with your subscription. Please try again later.');
            });
        });
    }
});

// Brevo's original script includes these global variables, which might be needed for their internal validation.
// We'll define them here to prevent potential errors if the Brevo script expects them.
window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
window.LOCALE = 'en';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
window.translation = {
    common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected',
        selectedOption: '{quantity} selected',
        selectedOptions: '{quantity} selected',
    }
};
var AUTOHIDE = Boolean(0);