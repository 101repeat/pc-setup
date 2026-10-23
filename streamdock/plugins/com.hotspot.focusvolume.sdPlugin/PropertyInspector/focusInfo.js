/* Active Window - Property Inspector (Elgato SDK v1 / $SD) */
let piContext = '';
let localeReady = false;

function L(key, fallback) {
    try {
        const s = ($localizedStrings || {})[key];
        return (typeof s === 'string' && s.length) ? s : fallback;
    } catch (e) {
        return fallback;
    }
}

function applyLocale() {
    const map = [
        ['heading', 'Active Window'],
        ['labelMode', 'Display mode'],
        ['optCard', 'Card'],
        ['optIcon', 'Big icon'],
        ['labelWindow', 'Show window title'],
        ['labelImage', 'Show picture'],
        ['labelInterval', 'Update interval, ms'],
        ['labelHint', 'Hint'],
        ['hint', 'Shows the active window and the app whose volume is being changed']
    ];
    map.forEach(pair => {
        const el = document.getElementById(pair[0]);
        if (!el) return;
        const txt = L(pair[1], pair[1]);
        if (el.tagName === 'INPUT') el.title = txt;
        else el.innerText = txt;
    });
    localeReady = true;
}

// the settings can arrive in different shapes:
//   payload.settings = {...}   (sent by the plugin)
//   payload.context = {...}    (didReceiveSettings of the application)
//   payload = {...}            (the settings themselves)
function extractSettings(e) {
    const payload = (e && e.payload) || {};
    const candidates = [payload.settings, payload.context, payload];
    for (const c of candidates) {
        if (c && typeof c === 'object' && !Array.isArray(c)) {
            if ('displayMode' in c || 'showImage' in c || 'showWindowTitle' in c ||
                'interval' in c || 'step' in c) {
                return c;
            }
        }
    }
    return null;
}

function applySettings(settings) {
    if (!settings) return;
    if (settings.showWindowTitle !== undefined) {
        $('#showWindowTitle').checked = settings.showWindowTitle !== false;
    }
    if (settings.showImage !== undefined) {
        $('#showImage').checked = settings.showImage !== false;
    }
    if (settings.interval !== undefined) {
        $('#interval').value = settings.interval || 500;
    }
    if (settings.displayMode !== undefined) {
        $('#displayMode').val(String(settings.displayMode || 0));
    }
    $('.sdpi-wrapper').style.display = 'block';
}

$SD.on('connected', e => {
    try {
        piContext = e.actionInfo ? e.actionInfo.context : '';
    } catch (err) {
        piContext = '';
    }
    applyLocale();
    // the form is shown right away, the values arrive a moment later
    $('.sdpi-wrapper').style.display = 'block';
    try {
        $SD.api.getSettings(piContext);
    } catch (err) { }
});

$SD.on('localizationLoaded', () => {
    applyLocale();
});

$SD.on('sendToPropertyInspector', e => {
    applySettings(extractSettings(e));
});

$SD.on('didReceiveSettings', e => {
    applySettings(extractSettings(e));
});

function saveData() {
    let interval = parseInt($('#interval').value, 10);
    if (isNaN(interval) || interval < 200) interval = 200;
    if (interval > 5000) interval = 5000;
    let displayMode = parseInt($('#displayMode').value, 10);
    if (isNaN(displayMode) || displayMode !== 1) displayMode = 0;
    $SD.api.setSettings(piContext, {
        showWindowTitle: $('#showWindowTitle').checked,
        showImage: $('#showImage').checked,
        interval: interval,
        displayMode: displayMode
    });
}
