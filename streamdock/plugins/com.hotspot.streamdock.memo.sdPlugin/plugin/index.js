window.addEventListener('storage', function (e) {
    $data["com.hotspot.streamdock.memo.action1"].storageChange(e.key, e.newValue)
})

/* 行动数据汇总 */
let language, $data = {
    /* 实用便签 */
    "com.hotspot.streamdock.memo.action1": {
        context_pool: {},
        keyUp(data) {
            let { context, payload } = data
            let { list } = payload.settings
            this.context_pool[context] = payload.settings
            let img = new Image();
            img.src = './memo.html'
            window.open(`${img.src}?params=` + encodeURI(JSON.stringify({
                list, language, context
            })))
        },
        /* 删除便签 */
        storageChange(context, value) {
            let data = this.context_pool[context]
            let index = data.list.findIndex(item => item.time == value)
            data.list.splice(index, 1)
            $SD.setSettings(context, { list: data.list })
        },
        sendToPlugin(data) {
            data.payload.settings = data.payload
            this.keyUp(data)
        },
        willAppear(data) {
            localStorage.clear()
            let { context } = data
            this.context_pool[context] = this.context_pool[context] || {}
        }
    },
    /* 记录待办 */
    "com.hotspot.streamdock.memo.action2": {
        context_pool: {},
        /* 主函数 */
        main(data, willAppear = false) {
            let { context } = data
            let { title, content, time, color } = data.payload.settings || data.payload

            /* 首次创建不打开详情 */
            if (!willAppear) {
                let img = new Image(), params; img.src = './todo.html'
                params = JSON.stringify({ title, content, time, language })
                window.open(`${img.src}?params=` + encodeURI(params));
            }

            /* 开始倒计时 没有参数则不执行 */
            if (!title || !content || !time) return;
            const countdown = () => {
                let DValue = new Date(time).getTime() - new Date().getTime()
                this.context_pool[context].outTimer?.stop()
                /* 倒计时结束闪烁背景 */
                if (DValue < 0) {
                    let check = false, checkFunc = () => {
                        check = !check
                        $SD.setTitle(context, 'Time out')
                        if (check) $SD.setBG(context, color)
                        else $SD.setImage(context, '../static/img/check.png');
                    }
                    this.context_pool[context].timer?.stop()
                    this.context_pool[context].outTimer = new Timer(checkFunc, 2000, true)
                }
                else {
                    let s = parseInt(DValue / 1000)
                    let m = parseInt(s / 60)
                    let h = parseInt(m / 60)
                    $SD.setImage(context, '../static/img/check.png')
                    $SD.setTitle(context, `${$.split(title, 2)}\n${$(h)}:${$(m % 60)}:${$(s % 60)}`)
                }
            }
            this.context_pool[context].timer?.stop()
            this.context_pool[context].timer = new Timer(countdown, 1000, true)
        },
        sendToPlugin(data) {
            this.main(data)
        },
        keyUp(data) {
            this.main(data)
        },
        willAppear(data) {
            /* 没有数据则创建新数据 */
            let { context } = data
            if (!this.context_pool[context]) this.context_pool[context] = {}
            this.main(data, true)
        },
        willDisappear(data) {
            let { context } = data
            this.context_pool[context].timer?.stop()
            this.context_pool[context].outTimer?.stop()
        }
    }
}

/* 注册插件 */
async function connectElgatoStreamDeckSocket(inPort, inPluginUUID, inRegisterEvent, inInfo) {

    /* 获取国际化字符串 */
    // let localizedStrings = await $.localizedStrings(JSON.parse(inInfo).application.language)
    websocket = new WebSocket("ws://127.0.0.1:" + inPort);
    websocket.onopen = () => websocket.send(JSON.stringify({
        event: inRegisterEvent, uuid: inPluginUUID
    }))
    /* 模块化监听 */
    websocket.onmessage = function (e) {
        let data = JSON.parse(e.data), { event, action } = data;
        language = JSON.parse(inInfo).application.language
        $data[action]?.[event]?.(data)
    }
}