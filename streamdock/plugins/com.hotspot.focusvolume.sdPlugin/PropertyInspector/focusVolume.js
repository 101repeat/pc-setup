/* Focus Volume - Property Inspector (Elgato SDK v1 / $SD) */
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
        ['heading', 'Focus Volume'],
        ['labelStep', 'Volume step, %'],
        ['labelMute', 'Mute on press'],
        ['labelFallback', 'Fallback to system volume'],
        ['labelHint', 'Hint'],
        ['hint', 'Rotate the knob to set the volume of the app in focus']
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

// the settings can arrive in different shapes:
//   payload.settings = {...}   (sent by the plugin)
//   payload.context = {...}    (didReceiveSettings of the application)
//   payload = {...}            (the settings themselves)
function extractSettings(e) {
    const payload = (e && e.payload) || {};
    const candidates = [payload.settings, payload.context, payload];
    for (const c of candidates) {
        if (c && typeof c === 'object' && !Array.isArray(c)) {
            if ('step' in c || 'muteOnPress' in c || 'fallbackToSystem' in c) {
                return c;
            }
        }
    }
    return null;
}

function applySettings(s) {
    if (!s) return;
    if (!localeReady) applyLocale();
    if (s.step !== undefined) $('#step').value = s.step || 5;
    if (s.muteOnPress !== undefined) $('#muteOnPress').checked = s.muteOnPress !== false;
    if (s.fallbackToSystem !== undefined) $('#fallbackToSystem').checked = s.fallbackToSystem !== false;
    $('.sdpi-wrapper').style.display = 'block';
}

$SD.on('sendToPropertyInspector', e => {
    applySettings(extractSettings(e));
});

$SD.on('didReceiveSettings', e => {
    applySettings(extractSettings(e));
});

function saveData() {
    let step = parseInt($('#step').value, 10);
    if (isNaN(step) || step < 1) step = 1;
    if (step > 50) step = 50;
    $SD.api.setSettings(piContext, {
        step: step,
        muteOnPress: $('#muteOnPress').checked,
        fallbackToSystem: $('#fallbackToSystem').checked
    });
}
