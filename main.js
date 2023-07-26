function eventDelegation(event, selector, callBack) {
    document.body.addEventListener(event, function(e) {               
            document.querySelectorAll(selector).forEach(elem => {
                if (e.target === elem || e.target.closest(selector) === elem) {
                        callBack(e, document.querySelector(selector));
                }
            })
    });
}
