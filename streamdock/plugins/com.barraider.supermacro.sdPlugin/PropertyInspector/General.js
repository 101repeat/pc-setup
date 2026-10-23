function openHelp() {
    if (websocket && (websocket.readyState === 1)) {
        const json = {
            'event': 'openUrl',
            'payload': {
                'url': 'https://docs.barraider.com/faqs/supermacro/getting-started/'
            }
        };
        websocket.send(JSON.stringify(json));
    }
}