let uuid = '', action = '', context = '';

/* 初始化 */
$SD.on('connected', e => {
    uuid = e.uuid;
    action = e.actionInfo.action;
    context = e.actionInfo.context;
    localAll()
    // localStorage.clear()
///
})

let dd;
let settings = {}
//也是软件发过来的事件 /* 插件触发的事件 */  
let timer__update = null
$SD.on('sendToPropertyInspector', e => {
    console.log(e);
    let { event, payload } = e
    /* 插件设置数据后触发 */
    if (event === 'sendToPropertyInspector') {
        
    }
    if (event === 'deviceDidDisconnect') {
        //////////fixbug：在应用关闭后，重置settings.beckgroundItem
        settings.beckgroundItem = 0;
        saveData()
    }
    /**
     * The plugin and Property Inspector can request the persistent data stored for the action's instance using the getSettings event:
     * The plugin or Property Inspector will receive asynchronously an event didReceiveSettings containing the settings for this action:
     * 
    在 Stream Deck SDK 中，getSettings 方法是用于从插件或pi获取当前设置的方法。
    当 Stream Deck 应用程序需要显示插件设置的界面时，它会调用 getSettings 来检索插件的当前配置,然后触发didReceiveSettings
     */
    if (event === 'didReceiveSettings') {
        /////////加载配置
        $('.sdpi-wrapper').style.display = 'block'  // 显示模式，必须要

        settings = payload.settings
        let {
            beckgroundItem,
            text_Low_Threshold,
            text_Critical_Threshold,
            color_Low_Threshold,
            color_Critical_Threshold,
        } = settings    // choice_VolumeNameItem  =   payload.settings.content.choice_VolumeNameItem 解构赋值
        
        $('#Low_ThresholdItem').value = text_Low_Threshold || '70' //覆盖 引用持久化的数据覆盖原本内容  //设置初始值
        $('#Palette_LowThreshold').value = color_Low_Threshold || '#FFFF00'  //设置调色板初始颜色
        $('#Low_ThresholdItem').style.color = $('#Palette_LowThreshold').value  //设置文本初始颜色

        $('#Critical_ThresholdItem').value = text_Critical_Threshold || '80' //覆盖 引用持久化的数据覆盖原本内容
        $('#Palette_CriticalThreshold').value = color_Critical_Threshold || '#FF0000'
        $('#Critical_ThresholdItem').style.color = $('#Palette_CriticalThreshold').value

        //////////当我保存settings时，由于在html里面配置的display为none，所以一开始并不会显示
        /// 在这里手动调用一次即可，在退出软件时需要重置$('#beckgroundItem').value为0
        $('#beckgroundItem').value = beckgroundItem || 0
        handleBackgroundChange()


    }
})




/* 更新状态 */
// function updateState() {
//     var intState;
//     if (typeof $('#beckgroundItem').value === "string") {
//         intState = parseInt($('#beckgroundItem').value);
//     } else {
//         intState = $('#beckgroundItem').value;
//     }
//     $SD.api.send(context, 'setState', {
//         payload: {
//             state: intState
//         }
//     });
// }

/// 切换三种状态，默认text


// ///启动定时器刷新
// function startTimer()
// {
//     // 统一发送数据到plugin
//     var intState;
//     if (typeof $('#beckgroundItem').value === "string") {
//         intState = parseInt($('#beckgroundItem').value);
//     } else {
//         intState = $('#beckgroundItem').value;
//     }
//     var p = {}
//     p["mstate"] = intState
//     clearTimeout(timer__update)
//     timer__update = setTimeout(() => {
//         console.log("beckgroundItem"+intState)
//         $SD.api.sendToPlugin(uuid, action, p)
//         startTimer();  /// 循环执行
//     }, 1500)
// }

// setTimeout(startTimer, 1000);

function updateChange() {
    var intState;
    if (typeof $('#beckgroundItem').value === "string") {
        intState = parseInt($('#beckgroundItem').value);
    } else {
        intState = $('#beckgroundItem').value;
    }

    /////保存在settings中
    settings.beckgroundItem = $('#beckgroundItem').value;
    saveData();
    console.log($('#beckgroundItem').value);

    // 统一发送数据到plugin
    var payload = {}
    payload["mstate"] = intState
    console.log("mstate: " + intState)
    $SD.api.sendToPlugin(uuid, action, payload)

}

/* 刷新显示 */
// $SD.on('sendToPropertyInspector', e => {
//     console.log(e)
//     if (e.event === 'didReceiveSettings') {
//         var state;
//         if (typeof e.payload.state === "number") {
//             state = e.payload.state + "";
//         } else {
//             state = e.payload.state;
//         }
//         $('#beckgroundItem').value = state || '0'
//         $('.sdpi-wrapper').style.display = 'block'
//     }
// })

function saveData() {
    $SD.api.setSettings(context, settings)
}

////////////////////////// 切换颜色
function palette_LowThreshold_Select_LowThreshold_Color() {
    settings.color_Low_Threshold = $('#Palette_LowThreshold').value;
    saveData()

    $('#Low_ThresholdItem').style.color = $('#Palette_LowThreshold').value; // 更新label上的颜色
    console.log($('#Palette_LowThreshold').value);
    $SD.api.sendToPlugin(uuid, action, {
        mlowcolor: $('#Palette_LowThreshold').value
    })
}

function palette_CriticalThreshold_Select_CriticalThreshold_Color() {
    settings.color_Critical_Threshold = $('#Palette_CriticalThreshold').value;
    saveData()

    $('#Critical_ThresholdItem').style.color = $('#Palette_CriticalThreshold').value;
    console.log($('#Palette_CriticalThreshold').value);
    $SD.api.sendToPlugin(uuid, action, {
        mcriticalcolor: $('#Palette_CriticalThreshold').value
    })
}

////////////////////////// 设定阈值
let timer_1 = null
function Low_ThresholdItem_saveData() {
    clearTimeout(timer_1)
    timer_1 = setTimeout(() => {
        settings.text_Low_Threshold = $('#Low_ThresholdItem').value;
        saveData()
        
        console.log(settings.text_Low_Threshold);
        $SD.api.sendToPlugin(uuid, action, {
            mlowThreshold: $('#Low_ThresholdItem').value
        })
    }, 1500)
}
let timer_2 = null
function Critical_ThresholdItem_saveData() {
    clearTimeout(timer_2)
    timer_2 = setTimeout(() => {
        settings.text_Critical_Threshold = $('#Critical_ThresholdItem').value;
        saveData()

        console.log(settings.text_Critical_Threshold);
        $SD.api.sendToPlugin(uuid, action, {
            mcriticalThreshold: $('#Critical_ThresholdItem').value
        })
    }, 1500)
}

document.getElementById("beckgroundItem").addEventListener("change", function() {
    handleBackgroundChange();
});

function handleBackgroundChange() {
    var selectedValue = document.getElementById("beckgroundItem").value;
    if (selectedValue === "2" || selectedValue === "3") {
        document.getElementById("Parent_Low_ThresholdItem").style.display = "flex";
        document.getElementById("Parent_Critical_ThresholdItem").style.display = "flex";
    } else {
        document.getElementById("Parent_Low_ThresholdItem").style.display = "none";
        document.getElementById("Parent_Critical_ThresholdItem").style.display = "none";
    }
}