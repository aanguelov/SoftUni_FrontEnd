function pop(type, title, message) {
    var popup;
    switch (type) {
        case 'success':
            popup = popupsModule.createSuccess(title, message, type);
            break;
        case 'info':
            popup = popupsModule.createInfo(title, message, type);
            break;
        case 'error':
            popup = popupsModule.createError(title, message, type);
            break;
        case 'warning':
            popup = popupsModule.createWarning(title, message, type, arguments[3]);
            break;
    }
	
	// generate view from view factory
    var view = createPopupView(popup);

    processPopup(view, popup);
}

function processPopup(domView, popup) {
    domView.style.transition = '800ms';
    domView.style.opacity = 0;
	document.body.appendChild(domView);

    setTimeout(function() {
        domView.style.opacity = 1;
    }, 500);

    if (popup._popupData.type === 'success') {
        fadeOut(domView, popup);
    }

    if (popup._popupData.type === 'info') {
        var xBtn = domView.getElementsByClassName('poppy-close-button')[0];
        xBtn.addEventListener('click', function() {
            fadeOut(domView, popup);
        });
    }

    if (popup._popupData.type === 'error') {
        domView.addEventListener('click', function() {
            fadeOut(domView, popup);
        });
    }

    if (popup._popupData.type === 'warning') {
        domView.addEventListener('click', function() {
            popup._popupData.callback();
        });
    }
}

function fadeOut(popupDom, popup) {
    setTimeout(function() {
        popupDom.style.opacity = 0;
    }, popup._popupData.timeOut);

    setTimeout(function() {
        document.body.removeChild(popupDom);
    }, popup._popupData.timeOut)
}

pop('success', 'Success!', 'You have successfully registered!');
pop('info', 'Did you know...?', 'Nakov is only 22 years old!');
pop('error', 'Error', 'Invalid username/password.');
pop('warning', 'Warning', 'Please validate your email.');


