function eventDelegation(event, selector, program) {
    document.body.addEventListener(event, function(e) {
            document.querySelectorAll(selector).forEach(elem => {
                if (e.target === elem) {
                        program(e);
                }
            })
    });
}