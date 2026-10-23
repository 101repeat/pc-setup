/**
 * 基础参数说明:
 *      @plugin 全局插件行动 - 策略模式
 *      @plugin .default 行动默认数据
 *      @plugin _willAppear 在 willAppear 方法之后立即执行
 *      @plugin _willDisappear 在 willDisappear 方法之前立即执行
 *      @common sendToPlugin keyUp propertyInspectorDidAppear
 * =========================================================================>
 */

const $local = false,
  $plugin = {
    name: "weather",
    action1: new Action({
      default: {
        inputCity: "",
        tempList: "0",
        cityId: "",
        city: "",
        title: "",
        radio: "0",
        searchList: [],
        theme: "Modern",
        wdata: { tmp: "20", code: "101" },
        titleParameters: {
          titleColor: "#ffffff",
        },
        count: 0,
        Localization: {}
      },
      /**
       *  1. 和风开发者KEY: 641403ded7f348bf88681308e648bdde
       *  2. 和风官方地理位置KEY: bdd98ec1d87747f3a2e8b1741a5af796
       *  3. 和风官方网页查询数据: https://www.qweather.com/v2/current/condition/s/x-cityId.html
       */
      async queryLocation(context, device) {
        const data = this.data[context];
        try {
          if (data.inputCity) {
            $websocket.setTitle(context, "Loading");
            const lang = $lang == "zh_CN" ? "zh" : "en";
            const key = "bdd98ec1d87747f3a2e8b1741a5af796";
            const res = await axios(
              `https://geoapi.qweather.com/v2/city/lookup?location=${data.inputCity}&key=${key}&lang=${lang}`, {
              timeout: 3000,
            }
            );
            console.log(res);
            if (res.data.code === "200") {
              data.searchList = res.data.location;
              this.queryWeather(context, device);
              data.count = 0;
            } else if (res.data.code === "404" || res.data.code === "400") {
              data.searchList = [];
              this.canvasFunc(context, device, "404");
              $websocket.setSettings(context, data);
            } else {
              data.searchList = [];
              this.canvasFunc(context, device, "error");
              $websocket.setSettings(context, data);
            }
          }
        } catch (e) {
          if (++data.count <= 3) {//重试3次
            this.queryLocation(context, device);
            $websocket.setTitle(context, "Try again");
            return;
          }

          this.canvasFunc(context, device, "error");
        }
      },
      // 请求天气
      async queryWeather(context, device) {
        const data = this.data[context];
        try {
          clearTimeout(data.timer);

          // 过滤出用户选择的城市
          data.cityId = (
            data.searchList.filter((item) => item.id === data.cityId)[0] ||
            data.searchList[0]
          )?.id;
          data.city = data.searchList.filter(
            (item) => item.id === data.cityId
          )[0]?.name;

          if (data.cityId) {
            $websocket.setTitle(context, "Loading");
            const res = await axios(
              `https://www.qweather.com/v2/current/condition/s/x-${data.cityId}.html`, {
              timeout: 3000,
            }
            );
            data.wdata = {
              tmp: res.data.data.tmp,
              code: res.data.data.code,
            };
            data.count = 0;
            data.timer = setTimeout(
              () => this.queryWeather(context, device),
              1000 * 60 * 60 * 4
            );
            $websocket.setSettings(context, data);
            this.canvasFunc(context, device);
          }
        } catch (e) {
          if (++data.count <= 3) {//重试3次
            this.queryWeather(context, device);
            $websocket.setTitle(context, "Try again");
            return;
          }
          console.log(e);
          this.canvasFunc(context, device, "error");
        }
      },
      async canvasFunc(context, device, status = "success") {
        if (status === "error") {
          $websocket.setImage(
            context,
            this.data[context].isBackgroundHidden
              ? "../static/img/tm.png"
              : "../static/img/default.jpg"
          );
          $websocket.setTitle(context, "Timeout");
          return;
        } else if (status === "404") {
          $websocket.setImage(
            context,
            this.data[context].isBackgroundHidden
              ? "../static/img/tm.png"
              : "../static/img/default.jpg"
          );
          $websocket.setTitle(context, "Not found");
          return;
        }
        if (!this.data[context].cityId) return;

        // 主题配置
        const data = this.data[context];
        const { tmp, code } = data.wdata;
        // 摄氏度/华氏度
        const unit = data.tempList === "0" ? "℃" : "℉";
        const tmps = data.tempList === "0" ? tmp : tmp * 1.8 + 32;

        // 设置gif背景
        // if (data.theme == "dynamic") {
        //   $websocket.setImage(context,`${dynamicEnum[101]}`, true);
        //   $websocket.setTitle(
        //     context,
        //     data.radio == "0" ? `${Number(tmps).toFixed(1)}${unit}\n${data.city}` : `${Number(tmps).toFixed(1)}${unit}\n${data.title}`
        //   );
        //   return
        // }


        const image = new Image();
        if (data.theme == "Modern")
          image.src = `../static/img/Modern/${code}-fill.svg`;
        if (data.theme == "Luxury")
          image.src = `../static/img/Luxury/${LuxuryEnum[code]}.png`;

        /* 加载完毕后开始 */
        image.onload = async function () {
          let canvas = document.createElement("canvas");
          canvas.width = canvas.height = 512;
          let ctx = canvas.getContext("2d");

          // 是否隐藏背景 适配 296
          if (!data.isBackgroundHidden) {
            ctx.fillStyle = "rgb(25,25,25)";
            ctx.fillRect(0, 0, 512, 512);
            ctx.save();
          }

          if (data.theme == "Modern") ctx.drawImage(this, (512-260)/2, 20, 260, 260);
          if (data.theme == "Luxury") ctx.drawImage(this, -2, -2, 516, 516);

          // ctx.fillStyle = data.titleParameters.titleColor;
          // ctx.font = `${data.titleParameters.fontStyle == "Regular" ? "" : data.titleParameters.fontStyle} ${data.titleParameters.fontSize + 10}px '${data.titleParameters.fontFamily}'`;
          // ctx.shadowColor = "white";
          // ctx.shadowBlur = 1;
          // ctx.shadowOffsetX = 1;
          // ctx.shadowOffsetY = 1;


          // ctx.fillText(`${Number(tmps).toFixed(1)}${unit}`, 14, 29);

          // if (data.titleParameters.fontUnderline) {
          //   let textMetrics = ctx.measureText(`${Number(tmps).toFixed(1)}${unit}`);
          //   let underlineHeight = 1;
          //   ctx.fillRect(14, 29 + 2, textMetrics.width, underlineHeight);
          // }

          $websocket.setTitle(
            context,
            data.Localization[code] + "\n" + (data.radio == "0" ? `${Number(tmps).toFixed(1)}${unit}\n${data.city}` : `${Number(tmps).toFixed(1)}${unit}\n${data.title}`)
          );
          $websocket.setImage(context, canvas.toDataURL("image/png"));
        };
      },
      titleParametersDidChange({ context, payload, device }) {
        this.data[context].titleParameters = payload.titleParameters;
        this.canvasFunc(context, device);
      },
      didReceiveSettings({ context, payload, device }) {
        this.data[context].isBackgroundHidden = payload.settings.isBackgroundHidden;
        this.canvasFunc(context, device);
      },
      async _willAppear({ context, device }) {
        this.data[context].Localization = await new Promise(resolve => {
          const req = new XMLHttpRequest();
          req.open('GET', `../${$lang}.json`);
          req.send();
          req.onreadystatechange = () => {
            if (req.readyState === 4) {
              resolve(JSON.parse(req.responseText).Localization)
            }
          };
        })
        this.queryLocation(context, device);
      },
      _willDisappear({ context }) {
        clearTimeout(this.data[context].timer);
      },
      sendToPlugin({ context, payload, device }) {
        const data = this.data[context];
        const { inputCity, cityId, title, theme, radio, tempList } = payload;
        // 输入城市
        if (inputCity !== undefined) {
          data.inputCity = inputCity;
          this.data[context].count = 0;
          return this.queryLocation(context, device);
        }
        // 更新天气
        if (cityId !== undefined) {
          data.cityId = cityId;
          this.data[context].count = 0;
          return this.queryWeather(context, device);
        }
        // 更新选项
        if (title !== undefined) data.title = title;
        if (theme !== undefined) data.theme = theme;
        if (radio !== undefined) data.radio = radio;
        if (tempList !== undefined) data.tempList = tempList;
        this.canvasFunc(context, device);
      },
      keyUp({ context, device }) {
        this.data[context].count = 0;
        this.queryWeather(context, device);
      },
    }),
  };
