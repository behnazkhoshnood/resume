function sendMail(contactForm) {
    emailjs.send("gmail", "behnaz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    return false
}

$(document).ready(function() {
    $('#form').submit(function() {
        $('#message').show();
        $(this).find("button[type='submit']").prop('disabled',true);
    });
});


