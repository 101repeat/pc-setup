webpackHotUpdate("main",{

/***/ "./node_modules/ifdef-loader/ifdef-loader.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ifdef-loader/ifdef-loader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ifdef-loader/ifdef-loader.js??ref--0-0!./node_modules/babel-loader/lib!./node_modules/ifdef-loader/ifdef-loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/utils.js */ "./src/js/utils.js");
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_utils_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_kc_icon_library_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/kc-icon-library.vue */ "./src/components/kc-icon-library.vue");
/* harmony import */ var _components_kc_inspector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/kc-inspector.vue */ "./src/components/kc-inspector.vue");
/* harmony import */ var _components_kc_layers_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/kc-layers.vue */ "./src/components/kc-layers.vue");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framework7_vue_components_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framework7-vue/components/popup */ "./node_modules/framework7-vue/components/popup.js");
/* harmony import */ var framework7_vue_components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framework7-vue/components/page */ "./node_modules/framework7-vue/components/page.js");
/* harmony import */ var framework7_vue_components_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framework7-vue/components/block */ "./node_modules/framework7-vue/components/block.js");
/* harmony import */ var framework7_vue_components_list_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framework7-vue/components/list-item */ "./node_modules/framework7-vue/components/list-item.js");
/* harmony import */ var framework7_vue_components_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framework7-vue/components/list */ "./node_modules/framework7-vue/components/list.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import * as JSZip from 'jszip';



 // import kcSaveDialog from '../components/kc-dialog-save.vue';

 // import kcMiniStreamdeck from '../components/kc-streamdeck.vue';






var KEYCREATOR = KEYCREATOR || {};
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    kcIconLibrary: _components_kc_icon_library_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    kcInspector: _components_kc_inspector_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    kcLayers: _components_kc_layers_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    // kcMiniStreamdeck,
    // kcSaveDialog,
    f7Page: framework7_vue_components_page__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    f7Popup: framework7_vue_components_popup__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    // f7View,
    // f7Navbar,
    // f7NavTitle,
    // f7NavRight,
    // f7Popup,
    // f7Link,
    f7Block: framework7_vue_components_block__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    // f7BlockTitle,
    f7List: framework7_vue_components_list__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    f7ListItem: framework7_vue_components_list_item__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]
  },

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  data() {
    // window.efp = function(evnt) {
    //     const e = document.querySelector('#elgfilepicker');
    //     console.log("elgfilepicker", e, evnt, e.value);
    // };
    window.home = this;
    var debug; /////////////////////
    /////////////////////
    /////////////////

    debug = false; //////////////////

    return {
      dbg: debug ? console.log.bind(window.console, '[KeyCreator] ') : () => {},
      app: this.$f7,
      extraLayer: {
        name: '',
        src: '',
        value: ''
      },
      itemIndex: 0,
      canvas: {},
      // thumbnailCanvas: document.getElementById('thumbnail'),
      thumbnailCanvas: null,
      toolIcons: ['tool_text', 'tool_image', 'tool_oval', 'tool_ellipse', 'tool_rect_flat', 'tool_rect', 'tool_rect_outline', 'tool_triangle', 'tool_triangle_line', 'tool_gradient', 'tool_line'],
      preview: null,
      layers: this.$root.currentComposition.layers,
      selectedLayer: {
        angle: -1,
        name: '',
        opacity: 1
      },
      savedCompositions: [],
      scalesLinked: false,
      video: {},
      shiftDown: false,
      data: {
        me: {
          fill: '#000000',
          font: 'Arial'
        }
      },
      disabledIcons: false,
      showDetails: false
    };
  },

  methods: {
    handleClickInParent(e) {
      console.log('•••••••••• Click', e);
    },

    debugInfo() {
      var o = this.canvas.getActiveObject();
      var obs = this.canvas.getObjects();
      console.log('debugInfo');
      console.log('==>', o, obs);
    },

    fixObjectStyles(obj, prop = 'fontFamily', value) {
      if (obj && obj.styles) {
        var s = obj.styles[0];

        for (var i in s) {
          s[i][prop] = value;
        }
      }
    },

    hasExtraLayer() {
      return this.extraLayer.hasOwnProperty('src') && this.extraLayer.src.length > 0;
    },

    clickedGif(e) {
      this.dbg('gif clicked ', e.target);
      this.sendToStreamDeck({
        thumbnail: e.target.src,
        event: e
      });
    },

    /////////////////////
    //////////////////////
    //////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ///////////////////////////
    //////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    ////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////
    ////////////////////////////
    //////////////
    ///////////////////////////////////////////////////////
    //////////////////////////
    /////////////////////////////////////////////////
    //////////////////////////
    /////////////////////////////////////////////////
    ///////////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////
    ////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////
    /////////////////////
    ///////////////////
    //////////////////////////////
    /////////////
    /////////////////////////////////////////////////////////
    //////////
    //////////////////
    onShowDetails() {
      this.dbg('onShowDetails:', !this.showDetails);
      this.showDetails = !this.showDetails;
    },

    showMainCanvasFor(name, altSrc, evt, bSendToStreamDeck = true) {
      this.dbg('showMainCanvasFor:', name, altSrc, evt);

      if (altSrc) {
        this.extraLayer.name = name ? name.split('/').pop() : '';
        this.extraLayer.src = altSrc;
        if (bSendToStreamDeck) this.sendToStreamDeck({
          thumbnail: altSrc,
          event: evt
        });
      } else {
        this.extraLayer.src = '';
        this.extraLayer.name = '';
        this.updatePreviewIMG(evt, bSendToStreamDeck);
      }
    },

    handleResize() {
      if (this.$prefs.showEditor) {
        this.$root.ui.condensed = window.innerWidth < 800;
      } else {
        this.$root.ui.condensed = window.innerWidth < 500;
      }
    },

    compileSDIcon(jsn) {
      this.dbg('compileSDIcon', jsn);
    },

    toolClicked(itm, ev) {
      this.extraLayer.src = '';
      var self = this;

      switch (itm) {
        case 'tool_text':
          this.addText();
          break;

        case 'tool_image':
          var e = document.querySelector('#elgfilepicker');

          if (e) {
            e.onchange = function (evnt) {
              self.handleFileLoad(evnt.srcElement.files[0], ev);
              e.value = '';
            };

            e.click();
          } else {
            alert('Not yet!');
          }

          break;

        case 'tool_line':
          this.addPathOfType('Line');
          break;

        case 'tool_rect_flat':
          this.addPathOfType('Rect', {
            radius: 0
          });
          break;

        case 'tool_rect':
          this.addPathOfType('Rect');
          break;

        case 'tool_rect_outline':
          this.addPathOfType('Rect', {
            strokeWidth: 4
          });
          break;

        case 'tool_gradient':
          this.addPathOfType('Rect', {
            gradient: true
          });
          break;

        case 'tool_oval':
          this.addPathOfType('Circle');
          break;

        case 'tool_ellipse':
          this.addPathOfType('Ellipse', {
            strokeWidth: 4
          }, ev);
          break;

        case 'tool_triangle':
          this.addPathOfType('Triangle');
          break;

        case 'tool_triangle_line':
          this.addPathOfType('Triangle', {
            strokeWidth: 4
          });
          break;

        default:
          break;
      }
    },

    getInputType(inItem) {
      switch (inItem) {
        case 'fill':
          return 'color';
          break;

        case 'stroke':
          return 'color';
          break;

        case 'fontFamily':
          return 'text';
          break;

        default:
          return 'number';
      }
    },

    initCanvas() {
      var canvas;
      KEYCREATOR.canvasWidth = 288;
      KEYCREATOR.canvasHeight = 288;
      /* extend FABRIC */

      /*setSelectorProps*/

      fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Object.prototype.set({
        /* transparentCorners: false,
        cornerColor: 'rgba(102,153,255,0.5)',
        cornerSize: 12,
        padding: 5+*/
        borderColor: 'silver',
        borderDashArray: [3, 3],
        cornerStrokeColor: 'rgba(192,192,255,0.5)',
        //'rgba(102,153,255,0.5)'
        cornerColor: '#efefff',
        cornerSize: 7,
        transparentCorners: false
      });

      fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Object.prototype.setOriginToCenter = function () {
        this._originalOriginX = this.originX;
        this._originalOriginY = this.originY;
        var center = this.getCenterPoint();
        this.set({
          originX: 'center',
          originY: 'center',
          left: center.x,
          top: center.y
        });
      };

      fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Object.prototype.setCenterToOrigin = function () {
        var originPoint = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
        this.set({
          originX: this._originalOriginX,
          originY: this._originalOriginY,
          left: originPoint.x,
          top: originPoint.y
        });
      }; //+++ andy new 2021-03-04 try to circumvent font problem (font is not redrawn)


      fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Object.prototype.objectCaching = false;
      this.sourceCanvas = document.querySelector('#kc_composer_canvas');
      this.thumbnailCanvas = document.getElementById('thumbnail');
      this.itemIndex = 0;
      this.preview = document.querySelector('#preview');
      var CanvasObject = false ? undefined : fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Canvas; // this.canvas = canvas = new fabric.Canvas('kc_composer_canvas', {

      this.canvas = canvas = new CanvasObject('kc_composer_canvas', {
        selection: false,
        preserveObjectStacking: true,
        backgroundColor: '#000',
        width: KEYCREATOR.canvasWidth,
        height: KEYCREATOR.canvasHeight
      });
      this.canvas.on({
        // 'object:moving': this.updateControls,
        // 'object:scaling': this.updateControls,
        // 'object:resizing': this.updateControls,
        // 'object:rotating': this.updateControls,
        'object:added': this.addedObject,
        'object:removed': this.updateLayers,
        'object:selected': this.selectObject,
        'selection:updated': this.selectionUpdated,
        'selection:created': this.selectionCreated,
        'selection:cleared': this.selectionCleared,
        'mouse:up': this.mouseUp,
        'mouse:down': this.mouseDown,
        'text:changed': this.textChanged
      });
    },

    updateControls(obj) {
      return;
    },

    clickLayer(o) {
      // this.dbg('clickLayer', o);
      this.canvas.discardActiveObject();
      this.selectedLayer = o; // this.$set(this.selectedLayer, 'b', 2)

      this.canvas.setActiveObject(o); //  this.canvas.renderAll();

      this.updateAllPreviews();
    },

    selectionCreated(ev) {
      this.logEvent(ev, 'selection:created');
      this.selectedLayer = ev.target;
    },

    selectionUpdated(ev) {
      this.logEvent(ev, 'selection:updated');
      this.selectedLayer = ev.target;
      this.canvas.renderAll();
    },

    textChanged(ev) {
      this.logEvent(ev, 'text:changed');

      if (this.selectedLayer) {
        this.selectedLayer.name = ev.target.text;
      }
    },

    mouseDown(ev) {
      this.logEvent(ev, 'mouse:down'); // this.hidePreviewIMG();
    },

    mouseUp(ev) {
      if (this.hasObjects()) {
        this.updatePreviewIMG(ev);
      }
    },

    hasObjects() {
      return this.canvas.getObjects().length > 0 || this.extraLayer.src.length > 0;
    },

    logEvent(ev, s) {// this.dbg('logEvent', s, ev.target, ev);
    },

    selectObject(ev) {
      this.logEvent(ev, 'selectObject');
      this.canvas.renderAll();
    },

    selectionCleared(ev) {
      this.logEvent(ev, 'selectionCleared');
      this.selectedLayer = null;
    },

    hidePreviewIMG() {
      if (this.canvas && this.preview) {
        this.dbg('hiding preview');
        this.thumbnailCanvas.style.display = 'block';
        this.preview.style.display = 'none';
      }
    },

    getActiveClass(itm) {
      var ao = this.canvas.getActiveObject();
      return this.selectedLayer === itm.target ? 'selected' : '';
    },

    findLayer(itm) {
      var foundLayer = this.$root.currentComposition.layers.find(e => e == itm);
      return foundLayer;
    },

    onDeleteAllLayers(evt, updatePreviews) {
      this.dbg('onDeleteAllLayers', evt, this.selectedLayer);

      if (this.selectedLayer) {
        this.canvas.remove(this.selectedLayer);
        this.selectedLayer = null;
      }

      this.canvas.discardActiveObject();
      this.$root.currentComposition.layers.splice(0, this.$root.currentComposition.layers.length);
      this.canvas.clear();
      if (updatePreviews) this.updateAllPreviews(evt);
    },

    fixCompositionSource(comp) {
      if (comp && comp.data && comp.data.objects) {
        comp.data.objects.map(e => {
          this.dbg('fixCompositionSource', e.src);
          e.src = e.src.replace('http://localhost:8080/', sReplace).replace('http://127.0.0.1:8080/', sReplace);
        });
      }
    },

    onLoadComposition(itm) {
      this.dbg('----> onLoadComposition', itm);
      var self = this;
      var app = this.$f7;

      var callbackOk = function (inString) {
        self.dbg('onLoadComposition::callbackOk', inString, itm);

        if (Array.isArray(itm)) {
          self.addCompositions(itm);
        } else {
          self.loadOneComposition(itm);
        }
      };

      var callbackCancel = function (ev) {
        self.dbg('onLoadComposition::callbackCancel', ev);
      };

      if (this.canvas.getObjects().length) {
        app.dialog.confirm('This will replace your current composition', 'Load Composition', callbackOk, callbackCancel);
      } else {
        callbackOk('canvas was empty');
      }
    },

    loadOneComposition(comp) {
      var self = this;
      this.dbg('loadOneComposition::Before LoadFromJSON');
      this.dbg(comp.data);
      var data = comp.hasOwnProperty('data') ? comp.data : comp;
      this.onDeleteAllLayers(null, false);
      data.objects.map(e => {
        this.dbg('src:BEFORE:', e.src);
      }); // this.fixCompositionSource(comp);

      data.objects.map(e => {
        this.dbg('src:AFTER:', e.src);
      });
      this.canvas.loadFromJSON(data, function () {
        self.updateAllPreviews();
      });
    },

    addCompositions(comps) {
      var app = this.$f7;
      var self = this;
      app.dialog.create({
        title: 'Append composition to list of compositions?',
        text: 'You can either append the new compositions to your list, or replace the list.',
        destroyOnClose: true,
        buttons: [{
          text: 'Cancel',
          color: 'gray',
          cssClass: 'thirdbutton',
          keyCodes: [27]
        }, {
          text: 'Replace',
          color: 'gray',
          onClick: function (dialog, e) {
            // console.log('addCompositions::onClick::REPLACE', dialog, e);
            // comps.map((e) => console.log(e));
            self.savedCompositions.splice(0, self.savedCompositions.length);
            comps.map(e => self.savedCompositions.push(e));
          }
        }, {
          text: 'Append',
          bold: true,
          keyCodes: [10, 13],
          onClick: function (dialog, e) {
            console.log('APPEND', dialog, e);
            comps.map(e => console.log(e));
            comps.map(e => self.savedCompositions.push(e));
          }
        }]
      }).open(); // this.dbg('mainview.addCompositions', comps);
      // if(Array.isArray(comps)) {
      //     // this.savedCompositions = comps;
      //     comps.map(e => this.dbg(e));
      // } else if(typeof comps == 'object') {
      //     //this.comps = [];
      //     //Object.values(comps).map(e => this.savedCompositions.push(e));
      // }
    },

    loadCompositions(compositionsObj) {
      this.dbg('mainview.loadCompositions', compositionsObj);

      if (Array.isArray(compositionsObj)) {
        this.savedCompositions = compositionsObj;
      } else if (typeof compositionsObj == 'object') {
        this.savedCompositions.splice(0, this.savedCompositions.length);
        Object.values(compositionsObj).map(e => this.savedCompositions.push(e));
      }
    },

    onCopyComposition(evt, itm, idx) {
      this.dbg('onCopyComposition...', evt, itm, idx);
      _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.copyToClipboard(JSON.stringify(itm));
    },

    onCopyCompositions(evt) {
      this.dbg('onCopyCompositions...', evt);

      if (this.savedCompositions.length) {
        var jsn = JSON.stringify(this.savedCompositions);
        this.dbg('compositions', jsn);
        _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.copyToClipboard(jsn);
      }
    },

    onSaveComposition(itm) {
      this.dbg('onSaveComposition...', itm);
      var self = this;
      var canvas = this.canvas;
      var comps = this.savedCompositions;

      var callbackOk = inString => {
        comps.push({
          name: inString,
          data: canvas.toJSON()
        });
        self.sendToStreamDeck({
          compositions: comps
        });
      };

      var callbackCancel = function (ev) {
        console.log('onSaveComposition::callbackCancel', ev);
      };

      var x = this.createSaveDialog(true);
      this.dbg(x, x.el.querySelector('.dialog-input'));
      var inp = x.el.querySelector('.dialog-input');

      if (inp) {
        inp.focus();
        inp.setSelectionRange(0, inp.value.length);
      }
    },

    hasContext(row, col) {
      if (!$SD.actionInfo) return null;
      var contexts = $SD.actionInfo.actionsInfo;
      return contexts.find(c => c.coordinates.row === row && c.coordinates.column === col);
    },

    isCurrentContext(inContext) {
      var context = $SD.actionInfo ? $SD.actionInfo.context : null;
      return context == inContext;
    },

    testContext(coordinates) {
      this.dbg('testContext', $SD.actionInfo, coordinates.rows, coordinates.cols);
      this.coordinatesArr = []; // const obj = { currentContext: '', occupied: '' };

      var currentAction = $SD.actionInfo ? $SD.actionInfo.context : undefined;
      var m = new Map();

      for (var r = 0; r < coordinates.rows; r++) {
        for (var c = 0; c < coordinates.cols; c++) {
          var ctx = this.hasContext(r, c); // m.set(`${r},${c}`, ctx ? 'currentContext' : '');
          // this.coordinatesArr.push(ctx ? 'currentContext' : '');

          var obj = {
            currentContext: '',
            occupied: ''
          };

          if (ctx) {
            obj.occupied = 'occupied';
            obj.currentContext = ctx.context == currentAction ? 'currentContext' : ''; // ['currentContext', 'occupied'].forEach(e => (obj[e] = e));
          } // this.coordinatesArr.push(ctx ? Object.assign({}, obj, 'currentContext' : '');


          this.coordinatesArr.push(obj);
          m.set("".concat(r, ",").concat(c), obj);
        }
      } // console.log(this.coordinatesArr);
      // console.log(m);

    },

    createSaveDialog(inOpen) {
      var app = this.$f7;
      var self = this; //const coordinates = { rows: 3, cols: 5 }; //32

      var coordinates = {
        rows: 4,
        cols: 8
      }; //26

      this.testContext(coordinates); // const coordinates = { rows: 2, cols: 3 }; //40

      var wh = Math.round(180 / coordinates.cols);
      var vlu = "Icon ".concat(new Date().toLocaleTimeString());
      var detailsOpen = ''; //'open';

      var z = 1;
      var currentAction = $SD.actionInfo ? $SD.actionInfo.context : null;

      var minideckColumns = inRow => {
        return "".concat(Array(coordinates.cols).join(0).split(0).map((item, i) => {
          var c = this.hasContext(inRow, i);
          return "<div class=\"super-mini ".concat(c ? '' : 'occupied', " ").concat(c && currentAction == c.context ? 'currentcontext' : '', "  data-context=\"").concat(c ? c.context : '', "\" style=\"width: ").concat(wh, "px; height: ").concat(wh, "px; min-width: ").concat(wh, "px; min-height: ").concat(wh, "px;\"></div>");
        }).join(''));
      };

      var minideck_literal = "".concat(Array(coordinates.rows).join(0).split(0).map((item, i) => "<div class=\"row-mini\">".concat(minideckColumns(i), "</div>")).join(''));
      var saveIcon = '<span class="kc_icons save margin-right-8" ></span>';
      var html;
      var dialogTitle;

      if (true) {
        // dialogTitle = `${saveIcon} ${this.$strings.saveIcon} home`;
        dialogTitle = "".concat(saveIcon, " ").concat(tr('Save icon'));
        var details = "<details ".concat(detailsOpen, " class=\"dialog-details\"><summary>").concat(tr('Save icon to multiple keys'), "</summary><div class=\"streamdecklogo\"></div>");
        var inp = "<div class=\"dialog-input-field input\"><span>Title:</span><input type=\"text\" class=\"dialog-input\" value=\"".concat(vlu, "\"></div>");
        html = "<div class=\"dialog-custom-save\"> ".concat(inp).concat(details, "<div class=\"row-mini-wrapper\"><div class=\"minions streamdeck\">").concat(minideck_literal, "</div></div></details></div>");
      } else {}
      /*
       let inp = `<div class="dialog-input-field input"><span>Title:</span><input type="text" class="dialog-input" value="${vlu}"></div>`;
      let html = `<div class="dialog-custom-save"> ${inp}${details}<div class="row-mini-wrapper"><div class="minions">`;
       let c = 0;
      let r = 0;
      for (r = 0; r < coordinates.rows; r++) {
          html += '<div class="row-mini">';
          for (c = 0; c < coordinates.cols; c++) {
              html += `<div class="super-mini ${
                  Math.random() * 10 < 5 ? 'occupied' : ''
              }" style="min-width: ${wh}px; min-height: ${wh}px"></div>`;
          }
          html += '</div>';
      }
      */
      // for (let i = 0; i < 15; i++) {
      //     html += `<img class="mini" src="static/Library/placeholder.png" />`;
      // }
      //html += '</div></div></details></div>';


      var dialog = app.dialog.create({
        title: dialogTitle,
        buttons: [{
          text: 'Cancel'
        }, {
          text: 'OK',
          cssClass: 'dialog-button-bold'
        }],
        content: html,
        cssClass: 'saveDialog',
        destroyOnClose: true,
        onClick: function (dialog, index) {
          var btnName = index == 1 ? 'OK' : 'Cancel';
          console.log(btnName + '-button clicked: ', dialog, index, app.device);

          if (index === 1) {
            var canvas = self.canvas;
            var comps = this.savedCompositions; // const callbackOk = inString => {
            //     comps.push({
            //         name: inString,
            //         data: canvas.toJSON(),
            //     });
            //     self.sendToStreamDeck({ compositions: comps });
            // };
            // if(app.device.cordova) {
            //     // code from cdvfile.js here
            // }
          }
        },
        on: {
          opened: function () {
            // console.log('Dialog opened', this);
            var me = this;
            var el = this.$el.find('.dialog-input');
            var summary = this.$el.find('summary');
            var f = el[0];

            if (f) {
              f.oninput = function (e) {
                dialog.myProp = e.target.value;
              };
            }

            el = this.$el.find('.super-mini');
            el.click(function (e, k) {
              // console.log('.super-mini Clicked', summary);
              if (!e.target.classList.contains('occupied')) {
                e.target.classList.toggle('selected');

                if (e.target.classList.contains('selected')) {// console.log('el.click:SAVE TO ACTION::', e.target.dataset.context);
                }

                var sels = me.$el.find('.super-mini.selected'); // console.log(sels);

                var whichKey = '';

                if (sels.length == 0) {
                  whichKey = 'current';
                  dialog.setTitle("".concat(saveIcon, " ").concat(tr('Save icon to current key:')));
                } else {
                  whichKey = sels.length;

                  if (sels.length > 1) {
                    dialog.setTitle("".concat(saveIcon, " ").concat(tr('Save icon to these keys:')));
                  } else {
                    dialog.setTitle("".concat(saveIcon, " ").concat(tr('Save icon to this key:')));
                  }
                }

                summary.text("Save icon to ".concat(whichKey, " ").concat(sels.length < 2 ? 'key' : 'keys'));
              }
            }); // el.mouseenter(function(e) {
            //     console.log('MouseEnter', e);
            // });
          },
          close: function () {// console.log('Dialog CLOSE...', this.myProp);
          }
        }
      });
      this.dbg(dialog);

      if (inOpen === true) {
        dialog.open();
      }

      return dialog;
    },

    onDeleteComposition(ev, itm, idx) {
      this.dbg('onDeleteComposition', ev, itm, idx);
      var self = this;
      var app = this.$f7;
      var comps = this.savedCompositions;
      ev.stopImmediatePropagation();
      ev.stopPropagation();

      var callbackOk = function (inString) {
        // console.log('onDeleteComposition::callbackOk', inString, itm);
        comps.splice(idx, 1);
        self.sendToStreamDeck({
          compositions: comps,
          event: ev
        });
      };

      var callbackCancel = function (ev) {
        this.dbg('onDeleteComposition::callbackCancel', ev);
      };

      app.dialog.confirm("This will delete composition '".concat(comps[idx].name, "'"), 'Delete Composition', callbackOk, callbackCancel);
    },

    onDeleteLayer(itm, fromWhere) {
      this.dbg('onDeleteLayer', itm, itm.tooltip);

      if (this.selectedLayer == itm) {
        this.canvas.discardActiveObject();
        this.selectedLayer = null;
      }

      this.canvas.remove(itm);
      this.updateAllPreviews();
    },

    onDeleteActiveLayer() {
      var o = this.canvas.getActiveObject();

      if (o) {
        var idx = o.index;
      }
    },

    onDeleteItem(itm) {
      var i = this.$root.currentComposition.layers.indexOf(itm);
      this.onDeleteLayer(itm);
      this.$root.currentComposition.layers.splice(i, 1);
    },

    onDeleteExtraLayer() {},

    onSortLayers(e) {
      this.dbg('onSortLayers:', e, e.detail);
      var o = this.canvas.getActiveObject();
      var obs = this.canvas.getObjects();
      var l = obs.length - 1;
      var p = obs[l - e.from];
      this.canvas.moveTo(p, l - e.to);
      this.$root.setLayers(this.canvas.getObjects());
      this.updateAllPreviews();
    },

    // mapNames(arr) {
    //     if(typeof arr == 'object') {
    //         const a = Object.values(arr).map(e => e.name);
    //         return a;
    //     }
    //     return arr.map(e => e.name);
    // },
    updateAllPreviews(evt) {
      // this.copyCanvas();
      this.canvas.renderAll();
      this.updatePreviewIMG(evt);
    },

    updatePreviewIMG(evt, bSendToStreamDeck = true) {
      if (this.canvas && this.preview) {
        this.preview.crossOrigin = 'anonymous'; // this.preview.src = this.canvas.toDataURL(); //prepare for drag and drop copyCanvas

        this.copyCanvas();
        this.preview.src = this.thumbnailCanvas.toDataURL(); //prepare for drag and drop copyCanvas

        this.preview.style.display = 'block';

        if (bSendToStreamDeck) {
          this.sendToStreamDeck({
            thumbnail: this.preview.src,
            event: evt
          });
        }
      }
    },

    sendToStreamDeck(jsn) {
      var currentAction = $SD.actionInfo ? $SD.actionInfo.context : null; // console.trace("•••sendToStreamDeck");

      this.dbg('sendToStreamDeck', currentAction, $SD.messageType, jsn); //   console.trace('sendToStreamDeck', currentAction, $SD.messageType, jsn);

      if ($SD.messageType == 'registerIconEditor') {
        // debugger;
        // const sk = this.$root.selectedStreamDeckKeys;
        // const actions = sk.size === 0 ? [this.$root.currentKey] : sk;
        //+++andy there should be something to save
        // const canvas = this.canvas;
        // const comps = this.savedCompositions;
        // const callbackOk = inString => {
        //     comps.push({
        //         name: inString,
        //         data: canvas.toJSON()
        //     });
        // };
        // console.log('sendToStreamDeck::actions/canvas/comps', $SD.actionInfo.context, canvas.toJSON(), this);
        // this.$prefs.lastChangeThreshold || 20;
        // if( jsn.thumbnail == this.cache.thumbnail && this.cache.lastAction === currentAction ) {
        //     this.dbg( "sendToStreamDeck::thumbnail didnt change", Date.now() - this.cache.lastCanvasUpdate, this.cache.lastCanvasUpdate );
        // } else {
        //     this.dbg("sendToStreamDeck", "thumbnail changed", ( jsn.thumbnail == this.cache.thumbnail && this.cache.lastAction === currentAction ), jsn.thumbnail == this.cache.thumbnail,  this.cache.lastAction === currentAction , {lastThumbnail: this.cache.thumbnail, currentThumbnail: jsn.thumbnail, lastAction:  this.cache.lastAction, currentAction }, Date.now() - this.cache.lastCanvasUpdate, this.cache.lastCanvasUpdate );
        //     this.cache.lastAction = currentAction;
        //     this.cache.thumbnail = jsn.thumbnail;
        //     this.cache.lastCanvasUpdate = Date.now();
        //    $SD.api.setImage(currentAction, jsn.thumbnail);
        // }
        $SD.api.setImage(currentAction, jsn.thumbnail); // $SD.api.setSettings(currentAction, canvas.toJSON());
        // $SD.api.getSettings(currentAction);
        // localStorage.setItem(currentAction, Date.now()); // use localStorage to add a timestamp and (potentially) notify other tabs/windows of a change...
        // sendDummydataToPlugin(canvas.toJSON());
        // actions.forEach((action, i) => {
        //     if($SD && $SD.api.setImage) {
        //         $SD.api.setImage(action.context, jsn.thumbnail);
        //     }
        // });
      }
    },

    copyCanvas(targetCanvas, bSmoothing) {
      var canvas = this.canvas;
      var tof = bSmoothing === true; // this.dbg("copyCanvas::NO TARGET CANVAS",!targetCanvas);

      var targetCanvas = targetCanvas ? targetCanvas : this.thumbnailCanvas;
      /* remember currently active object */

      var ao = canvas.getActiveObject();
      /* set a suspend flag so bindings should not update while canvas is copied */

      canvas.suspendUpdate = true;
      /* deactivate canvas (hide handles, etc...) and render */

      canvas.discardActiveObject();
      canvas.renderAll();
      var box = {
        x: 0,
        y: 0,
        w: this.sourceCanvas.width,
        h: this.sourceCanvas.height
      };
      var scalex = targetCanvas.width / this.sourceCanvas.width;
      var scaley = targetCanvas.height / this.sourceCanvas.height;
      var targetContext = targetCanvas.getContext('2d');

      if (0) {} else {
        /*targetContext.imageSmoothingEnabled = tof;
        targetContext.mozImageSmoothingEnabled = tof;
        targetContext.webkitImageSmoothingEnabled = tof;
        targetContext.msImageSmoothingEnabled = tof;
        */
        targetCanvas.width = box.w * scalex;
        targetCanvas.height = box.h * scaley;
        targetContext.clearRect(0, 0, targetContext.width, targetContext.height);
        targetContext.scale(scalex, scaley);
        targetContext.drawImage(this.sourceCanvas, 0, 0);
      }
      /* re-select previously selected object on canvas */


      if (ao) canvas.setActiveObject(ao);
      canvas.suspendUpdate = false;
    },

    updateProperty(ev, key, value) {
      // this.dbg('updateProperty', ev, key, value);
      var v;
      var upOrDown = ev.target.value - Math.round(value) < 0 ? Number(value) - 10 : Number(value) + 10;
      v = this.shiftDown ? upOrDown : ev.target.value;
      var self = this;
      this.updateActiveObject(function (o) {
        switch (key) {
          case 'angle':
            o._setOriginToCenter();

            o.set({
              angle: v
            }).setCoords();

            o._resetOrigin();

            break;

          case 'scaleX':
          case 'scaleY':
            if (self.scalesLinked) {
              o.set('scaleX', v).setCoords();
              o.set('scaleY', v).setCoords();
              self.selectedLayer.scaleX = v; //.set('scaleX', v).setCoords();

              self.selectedLayer.scaleY = v; //.set('scaleY', v).setCoords();
            } else {
              o.set(key, v).setCoords();
            }

            break;

          case 'opacity':
          case 'fill':
          case 'stroke':
            self.fixObjectStyles(o, key, v);
            o.set(key, v).setCoords();
            break;

          default:
            o.set(key, parseInt(v, 10)).setCoords();
            break;
        }
      });
    },

    updateActiveObject(_fn) {
      // if(this.canvas) {
      var o = this.canvas.getActiveObject(); // this.dbg("updateActiveObject", o);

      if (o) _fn(o); // this.canvas.renderAll();

      this.updateAllPreviews(); // copyCanvas();
      // }
    },

    addLayer(e) {
      this.dbg('---------- addLayer', e);
      var t = e.text;
      var idx = this.canvas.getObjects().indexOf(e);

      if (t == undefined) {
        t = e.name ? e.get('name') : e.get('type') + ' ' + idx;
      }

      if (e.name === undefined) e.name = t;
      var c = _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fixColor(e.color);
      if (e.color) e.color = c;
      if (e.stroke) e.stroke = _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fixColor(e.stroke);
      e.visible = true;
      this.$root.currentComposition.layers.push(e);
    },

    updateLayers(e) {
      this.dbg('updateLayers called...', e);
    },

    applyFont(font) {
      // console.log('----------- applyFont@home', this.selectedLayer);
      this.selectedLayer.fontFamily = font;
      this.fixObjectStyles(this.selectedLayer, 'fontFamily', font); // this.selectedLayer.set('fontFamily', font); // doesn't update internal styles

      this.updateAllPreviews();
      this.canvas.requestRenderAll();
    },

    addedObject(e) {
      this.dbg('addedObject', e, e.target.name, e.target.selected);
      Object.values(this.$root.currentComposition.layers).map(l => {
        l.selected = false;
      });
      this.addLayer(e.target);
      this.selectedLayer = e.target;
    },

    addToCanvas(obj) {
      this.dbg('addToCanvas', obj);

      if (obj) {
        if (!obj.hasOwnProperty('angle')) {
          obj.angle = 0;
        }

        if (!obj.hasOwnProperty('stroke')) {
          obj.stroke = '#000';
          obj.strokeWidth = 0;
        }

        this.canvas.add(obj);
      }
    },

    /////////////////////
    /////////////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    ////////////////////////////
    //////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    ////////////////
    ////////////////////////////////////////
    ///////////////////////////////////////////////////////
    /////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////
    /////////////////////////////
    ////////////////////////////////////////////////
    //////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    ////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    /////////////////////////
    //////////////////////////////////////
    ////////////////////////////////////
    ///////////////////////////////////////////////////
    ////////////////////////////////////////
    //////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    ///////////////////
    ///////////////
    //////////
    //////////////////
    addObjectToCanvas(itm, filename, _cb, mask, evt, itmX) {
      // TODO: +++andy

      /**
       * right now we can pass a string or an json as 'file'
       * this needs to get streamlined
       * */
      this.dbg('addObjectToCanvas', itm, filename, _cb, mask, evt, itmX);

      if (!this.$prefs.showEditor) {
        this.onDeleteAllLayers(evt, false);
      }

      var canvas = this.canvas;
      var self = this;
      var needsScaling = 0; //0 = scale to default size  //-1 scale to full-size  // >0 = scale to this size

      var MKCNEWVERSION = typeof itm === 'object';
      var file = itm;
      var isSVGFile;
      var isInlineSVG;
      window.kccanvas = canvas;

      if (MKCNEWVERSION) {
        if (itm.path) {
          file = itm.path;
          filename = itm.path.split('/').pop();
          needsScaling = parseInt(itm.scale || 0);
        } else {
          filename = itm;
        }
      }

      var isDataUrl = itm.path && itm.path.startsWith('data:image/');

      if (isDataUrl) {
        self.showMainCanvasFor(itm.name, itm.path, evt);
        return;
      } /////////////////////////
      /////////////////////////////////////////////////////////////////////////
      //////////////////////


      if (file.name) {
        filename = file.name;
        isSVGFile = file.type == 'image/svg+xml';
      } else if (typeof file == 'string') {
        if (filename == '' || filename == undefined) {
          filename = file.split('/').pop();
        }

        var fileExtension = file.split('.').pop(); // var filenameWithExtension = filepath.replace(/^.*[\\\/]/, '');

        isSVGFile = fileExtension == 'svg';
        isInlineSVG = file.substr(1, 4) == 'svg';

        if (['png', 'jpg', 'svg'].includes(fileExtension)) {
          needsScaling = -2;
        }

        if (fileExtension == 'gif') {
          _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(itm.path, {
            responseType: 'blob'
          }).then(b => {
            self.showMainCanvasFor(itm.path, b, evt);
          });
          return;
        }
      }

      this.showMainCanvasFor(filename, '', evt, false); //+++andy added 3rd paramter to showMainCanvasFor to reduce flicker

      if (!MKCNEWVERSION && evt && evt.target) {
        if (evt.shiftKey) {
          needsScaling = 'height';
        } else {
          needsScaling = parseInt(evt.target.getAttribute('data-scale'));
        }
      } else {
        if (file.indexOf) {
          // don't scale parts
          if (evt.target.hasAttribute('data-scale')) {
            needsScaling = parseInt(evt.target.getAttribute('data-scale'));
          } else if (needsScaling == -2) {
            needsScaling = 'fit';
          } else {
            needsScaling = needsScaling > 1 ? 0 : file.indexOf('/parts/') < 0 ? -1 : 0;
          }
        }
      }

      var isTrue =  true || false; // isTrue = !filename.includes('btn_');

      if (isSVGFile || isInlineSVG) {
        if (isTrue) {
          self.app.request.get(file, function (data) {
            // console.log(data);
            self.dbg('...fabric.loadSVGFromString.... needsScaling', needsScaling);
            fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].loadSVGFromString(data, function (objects, options) {
              // don't scale small icons up 2021-06-16
              if (Math.abs(144 - options.width) < self.$prefs.svgScalingThreshold) {
                needsScaling = 0;
              } //merge itm.options (if any, e.g. decompose)


              if (itm && itm.options) Object.entries(itm.options).map(o => options[o[0]] = o[1]);
              self.processSVG(objects, options, evt, file, filename, _cb, needsScaling, mask, true);
            });
          });
          return;
        }

        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].loadSVGFromURL(file, function (objects, options) {
          self.processSVG(objects, options, evt, file, filename, _cb, needsScaling, mask, false);
        }, null, {
          crossOrigin: 'anonymous'
        });
      } else {
        /* using Fabric's utility */
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL(file, function (img) {
          self.addImageToCanvas(img, filename, _cb, needsScaling, mask);
        });
      }
    },

    processSVG(objects, options, evt, file, filename, _cb, needsScaling, mask, bFromString) {
      this.dbg('processSVG', options, evt, file, filename);
      var self = this;
      var canvas = this.canvas;
      var oldBGColor = objects[0].fill; //objects[0].getFill();

      var svgCheck = {
        hasSameFillColor: true,
        hasGradient: false
      };
      objects.map(function (o, i) {
        var fl = o.fill; //o.getFill();

        if (!fl || typeof fl == 'object') {
          svgCheck.hasSameFillColor = false;
          svgCheck.hasGradient = true;
        } else if (fl != oldBGColor) {
          svgCheck.hasSameFillColor = false;
        }
      }); // let decompose = !!(options.decompose || store.state.decomposeSVG);

      var decompose = !!(options.decompose && this.$root.canUse('decompose'));

      if (evt && evt.altKey) {
        decompose = !decompose;
      }

      if (objects.length === 1) {
        svgCheck.hasSameFillColor = false;
      }
      /* if the fillcolor of the svg layers are the same, group them and load */


      if (svgCheck.hasSameFillColor === true) {
        var img = fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.groupSVGElements(objects, options);
        self.addImageToCanvas(img, filename, _cb, needsScaling, mask, _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fixColor(oldBGColor));
      } else if (svgCheck.hasGradient === true || !decompose) {
        if (bFromString) {
          var img = fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.groupSVGElements(objects, options);
          self.addImageToCanvas(img, filename, _cb, needsScaling, mask, _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fixColor(oldBGColor));
        } else {
          fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL(file, function (img) {
            self.addImageToCanvas(img, filename, _cb, needsScaling, mask);
          });
        }
      } else {
        /* create a temporary group to calculate scaling */
        var oImg;
        var num = 1;
        var ext = '';
        /* create a deep clone of the svg to calculate the outer dimensions, without modifying the original object */

        var tObj = objects.map(function (o) {
          var p = fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.object.clone(o);
          return p; //deep clone the object
        });
        var tImg = fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.groupSVGElements(tObj, options);
        var s = self.getImageScaling(tImg, KEYCREATOR.canvasWidth, KEYCREATOR.canvasHeight, 'fit');
        tImg = null;
        objects.map(function (o) {
          var tName = String(o.id != undefined ? o.id : filename);
          var arr = canvas.getObjects();
          var base = tName;
          var i = 1;

          while (arr.filter(n => n.name == tName).length) {
            tName = "".concat(base, " [").concat(i, "]");
            i++;
          }

          o._setOriginToCenter();

          oImg = o.set({
            uuid: _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.generateUUID(),
            left: o.left * s.scale + s.l,
            top: o.top * s.scale + s.t,
            // name: tName + ext,
            name: tName,
            index: self.itemIndex,
            opacity: o.opacity,
            angle: o.angle
          }).scale(s.scale).setCoords(); //.scale(scl);

          ++self.itemIndex;
          self.addToCanvas(oImg);
        });
        if (oImg) canvas.setActiveObject(oImg);
        self.updateAllPreviews();
      }
    },

    addImageToCanvas(img, name, _cb, scaleMode, mask, tFill, itm) {
      var canvas = this.canvas;
      var customScaleMode;
      var w = canvas.width;
      var h = canvas.height;

      if (scaleMode == 'fit') {
        customScaleMode = true;
      } else {
        customScaleMode = scaleMode > 1 ? scaleMode : 0;
        w = scaleMode > 1 ? canvas.width / scaleMode : canvas.width;
        h = scaleMode > 1 ? canvas.height / scaleMode : canvas.height;
        scaleMode = this.data.me.scaleMode ? 'width' : 'height';
      }

      var s = this.getImageScaling(img, w, h, scaleMode);
      this.dbg('addImageToCanvas', img, w, h, s);
      if (!customScaleMode) s.scale = 2;
      var newLeft = s.l;
      var newTop = s.t;

      if (itm && itm.scale == 1) {
        newLeft = img.left * s.scale;
        newTop = img.top * s.scale;
      }

      var oImg = img.set({
        left: newLeft,
        top: newTop,
        originX: 'center',
        originY: 'center',
        angle: 0,
        opacity: 1,
        name: name,
        index: this.itemIndex,
        uuid: _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.generateUUID()
      }).scale(s.scale).setCoords();
      oImg.transformMatrix = null;
      ++this.itemIndex;

      if (mask) {
        oImg.globalCompositeOperation = 'source-atop';
        this.addToCanvas(mask);
      }

      this.dbg('*** main:addImageToCanvas:: add:', name, oImg.name, oImg, oImg.fill);

      var rgb2hex = (r, g, b) => '#' + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, 0)).join('');

      var RGB2hex = (r, g, b) => '#' + [r, g, b].map(x => Math.round(x).toString(16).padStart(2, 0)).join('');

      if (typeof oImg.fill == 'string' && oImg.fill.substr(0, 3) == 'rgb') {
        var sep = oImg.fill.indexOf(',') > -1 ? ',' : ' ';
        var cArr = oImg.fill.substr(4).split(')')[0].split(',');
        var hx = RGB2hex(cArr[0], cArr[1], cArr[2]);
        this.dbg('converted fill from:', oImg.fill, ' to ', hx);
        oImg.fill = hx;
      }

      this.addToCanvas(oImg);

      if (itm && itm.scale == 1) {
        var desireCoords = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Point(img.left, img.top);
        oImg.setPositionByOrigin(desireCoords, 'left', 'top');
      } else {
        canvas.centerObject(oImg);
      }

      if (_cb) _cb();
      canvas.setActiveObject(oImg);
      Object(timers__WEBPACK_IMPORTED_MODULE_6__["setTimeout"])(() => {
        canvas.requestRenderAll();
      }, 20);
      this.$set(this.data.me, 'fill', tFill || '#0000ff');
      this.updateAllPreviews();
    },

    addText() {
      var canvas = this.canvas;
      var oText = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('Click to edit ' + this.itemIndex, {
        left: 10,
        top: 10,
        fontFamily: this.data.me.font || 'Arial',
        fill: '#FFFFFF',
        index: this.itemIndex,
        uuid: _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.generateUUID(),
        originX: 'center',
        originY: 'center',
        ownCaching: false
      });
      ++this.itemIndex;
      oText.left = canvas.width / 2 - oText.getScaledWidth() / 2;
      oText.top = canvas.height - oText.getScaledHeight() * 1.25;

      if (_js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.getBrightness(oText, canvas) > 75) {
        // oText.fill = '#000000'; //oText.setFill("#000000");
        oText.set('fill', '#000000');
      } else {
        // oText.fill = '#FFFFFF'; //oText.setFill("#FFFFFF");
        oText.set('fill', '#FFFFFF');
      }

      this.addToCanvas(oText);
      canvas.centerObject(oText);
      canvas.setActiveObject(oText);
      this.data.me.fill = this.data.me.fill || '#FFFFFF';
      this.data.me.font = this.data.me.font || 'arial';
      oText.bringToFront();
      this.updateAllPreviews();
    },

    isWallpaper() {
      return false;
    },

    addPathOfType(pathType = 'Rect', options = {}, ev = null) {
      var fn = pathType === 'Line' ? fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Rect : fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"][pathType];
      var radius = options.hasOwnProperty('radius') ? options.radius : 44;
      var strokeWidth = options.hasOwnProperty('strokeWidth') ? options.strokeWidth : 0;
      var stroke = options.hasOwnProperty('stroke') ? options.stroke : '#000000';
      var fill = options.hasOwnProperty('fill') ? options.fill : '#0000FF';
      var w = this.canvas.width;
      var h = this.canvas.height;
      var lyrName = "".concat(_js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.capitalize(pathType));
      this.dbg('addPathOfType', pathType, options, ev, w, h);
      var opacity = 1;

      switch (pathType) {
        case 'Line':
          radius = 0;
          h = 4;
          w -= 16;
          break;

        case 'Rect':
          break;

        case 'Circle':
        case 'Ellipse':
          radius = w / 2 - strokeWidth;
          break;

        case 'Triangle':
          break;

        default:
          radius = 0;
          break;
      }

      if (strokeWidth > 0) {
        stroke = '#00ffff';
        fill = 'transparent';
        w -= strokeWidth * 2;
        h -= strokeWidth * 2;
      }

      var object = new fn({
        left: 0,
        top: 0,
        width: w,
        height: h,
        originX: 'center',
        // originX: 0, //'center',
        originY: 'center',
        // originY: 0, //'center',
        rx: this.isWallpaper() ? 0 : radius,
        ry: this.isWallpaper() ? 0 : radius,
        index: this.itemIndex,
        name: lyrName + this.itemIndex,
        uuid: _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.generateUUID(),
        fill: fill,
        opacity: opacity,
        strokeWidth: strokeWidth,
        stroke: stroke,
        radius: radius,
        selectable: true
      });
      this.dbg(object, this.canvas);

      if (options.gradient) {
        object.name = 'Gradient ' + this.itemIndex;
        object.setGradient('fill', {
          type: 'linear',
          x1: -10,
          y1: 0,
          //-object.height / 2,
          x2: 0,
          y2: object.height,
          // + object.height / 2,
          colorStops: {
            0: 'rgba(255,255,255,0.8)',
            0.45: 'rgba(255,255,255,0.05)',
            0.55: 'rgba(40,40,40,0.1)',
            1: 'rgba(0,0,0,0.7)'
          }
        });
      }

      ++this.itemIndex;
      this.addToCanvas(object);
      this.canvas.centerObject(object);
      this.canvas.setActiveObject(object);

      if (!options.gradient) {
        this.data.me.fill = this.data.me.fill || '#0000FF';
      }

      object.bringToFront();
      this.updateAllPreviews(ev);
    },

    getImageScaling(o, w, h, scaleMode) {
      var scl = 1,
          l = 0,
          t = 0,
          fn = Math.ceil;

      if (scaleMode == 'width' || scaleMode == 'height' || scaleMode == 'fit') {
        scl = _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.rectInBounds(o, {
          width: w,
          height: h
        }, scaleMode);
        l = fn((w - o.width * scl) / 2);
        t = fn((h - o.height * scl) / 2);
      } else {
        l = w - fn(o.width / 2);
        t = h - fn(o.height / 2);
      }

      return {
        l: l,
        t: t,
        scale: scl
      };
    },

    initBeta() {
      this.initCanvas(); // document.querySelectorAll('.hidden:not(.more-list)').forEach(e => e.classList.add('visible'));

      this.handleDragDrop();
      this.handleClipboard();
    },

    handleKeyEvents(e) {
      if (!this.canvas) return;
      var canvas = this.canvas;
      var nudge = e.shiftKey ? 10 : 1;
      var ao = canvas.getActiveObject();
      var arr = ['.input-focused:not([type="color"])', '.with-modal-popup'];
      var inputs = null;
      arr.map(e => {
        if (document.querySelector(e)) {
          inputs = true;
          return;
        }
      });
      if (inputs) return true;

      if (ao && (ao.isEditing || ao.inCompositionMode)) {
        this.dbg('editing text... exit handleKeyEvents');
        return true;
      }

      switch (e.keyCode) {
        case 38
        /* Up arrow */
        :
          if (ao) {
            ao.top -= nudge;
            canvas.renderAll();
            e.stopPropagation();
          }

          break;

        case 40
        /* Down arrow  */
        :
          if (ao) {
            ao.top += nudge;
            canvas.renderAll();
            e.stopPropagation();
          }

          break;

        case 37
        /* Left arrow  */
        :
          if (ao) {
            ao.left -= nudge;
            canvas.renderAll();
            e.stopPropagation();
          }

          break;

        case 39
        /* Right arrow  */
        :
          if (ao) {
            ao.left += nudge;
            canvas.renderAll();
            e.stopPropagation();
          }

          break;

        case 8:
        /* back-delete */

        case 46
        /* delete */
        :
          if (ao) {
            this.onDeleteItem(ao); //canvas.remove(ao);

            e.stopPropagation();
          }

          break;
      }
    },

    handleDragDrop() {
      var self = this; // ************************ Drag and drop ***************** //

      var dropArea = document.getElementById('kc_composer'); // console.log('dropArea');
      // Prevent default drag behaviors

      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
      }); // Highlight drop area when item is dragged over it

      ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
      });
      ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
      }); // Handle dropped files

      dropArea.addEventListener('drop', handleDrop, false);

      function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
      }

      function highlight(e) {
        if (!dropArea.classList.contains('highlight')) {
          // console.log('highlight');
          dropArea.classList.add('highlight');
        }
      }

      function unhighlight(e) {
        dropArea.classList.remove('highlight');
      }

      function handleDrop(e) {
        var dt = e.dataTransfer;
        var files = dt.files; // console.log('HANDLEDROP', files, e);

        handleFiles(files);
      }

      function handleFiles(files) {
        files = [...files]; // files.forEach(uploadFile)

        files.forEach(addFile);
      }

      function addFile(file) {
        // console.log('DROP', file);
        var reader = new FileReader();

        if (file.type === 'application/json') {
          reader.onloadend = function () {
            var jsn = _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.parseJson(reader.result);

            if (jsn && jsn.hasOwnProperty('objects')) {
              self.onLoadComposition(jsn);
            }
          };

          reader.readAsText(file);
        } else {
          reader.onloadend = function () {
            var imgTmp = document.createElement('img');
            imgTmp.src = reader.result; // console.log(reader.result);

            imgTmp.onload = function () {
              var img = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image(imgTmp);
              self.addImageToCanvas(img, file.name, null, 'fit');
            };
          };

          reader.readAsDataURL(file);
        }
      }
    },

    handleClipboard(_cb) {
      var self = this;

      function getClipboardImage(evt, _cb) {
        var cd = evt.clipboardData;
        var jsn; // console.log('clipboardData:', cd);

        for (var i = 0; i < cd.items.length; i++) {
          var e = cd.items[i];

          if (e.type.match('image/*')) {
            var _ret = function () {
              console.log('FOUND IMAGE on CLIPBOARD');
              var file = e.getAsFile();
              var reader = new FileReader();

              reader.onloadend = function () {
                var imgTmp = document.createElement('img');
                imgTmp.src = reader.result;

                imgTmp.onload = function () {
                  var img = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image(imgTmp);
                  self.addImageToCanvas(img, 'pastedImage', null, 'fit');
                };
              };

              reader.readAsDataURL(file);
              return "break";
            }();

            if (_ret === "break") break;
          } else if (e.type.match('text/*')) {
            // e.g. https://image.flaticon.com/icons/svg/1717/1717344.svg
            console.log('FOUND TEXT on CLIPBOARD', e, evt, this);
            e.getAsString(function (s) {
              s = s.trim();
              console.log('TEXT:', s);

              if (s.split('.').pop() == 'svg') {
                var re = /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9_@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/i;
                var arr = s.match(re); // console.log('handleClipboard:regEx:', s, arr);

                if (arr.length) {
                  _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(s).then(data => {
                    var bIsSVG = _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.isSVG(data);

                    if (bIsSVG) {
                      fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].loadSVGFromString(data, function (objects, options) {
                        var filename = s.split('.')[0].split('/').pop() || 'clipboardSVG'; // filename
                        // self.processSVG(objects, options, evt, file, filename, _cb, needsScaling, mask, true);

                        var img = fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.groupSVGElements(objects, options);
                        self.addImageToCanvas(img, filename, _cb, 'fit', null, null);
                      });
                    }
                  });
                } else {
                  fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].loadSVGFromURL(s, function (objects, options) {
                    self.processSVG(objects, options, evt, s, 'andytest', _cb, 'fit', null, false);
                  }, null, {
                    crossOrigin: 'anonymous'
                  });
                }
              } else if (jsn = _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.parseJson(s)) {
                // console.log('loading composition from clipboard', jsn, typeof jsn, Array.isArray(jsn));
                if (Array.isArray(jsn)) {
                  self.addCompositions(jsn);
                } else {
                  self.onLoadComposition(jsn);
                }
              } else {
                var bIsSVG = _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.isSVG(s); // console.log('clipboarddata.isSVG', bIsSVG);

                if (bIsSVG) {
                  fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].loadSVGFromString(s, function (objects, options) {
                    var filename = 'clipboardSVG'; // filename

                    var img = fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.groupSVGElements(objects, options);
                    self.addImageToCanvas(img, filename, _cb, 'fit', null, null);
                  });
                }
              }
            });
          }
        }
      }

      document.addEventListener('paste', function (e) {
        var _e$target$form;

        var arr = ['.input-focused:not([type="color"])', '.with-modal-popup'];
        var inputs = (_e$target$form = e.target.form) === null || _e$target$form === void 0 ? void 0 : _e$target$form.f7Searchbar;

        if (!inputs) {
          arr.map(e => {
            if (document.querySelector(e)) {
              inputs = true;
              return;
            }
          });
        }

        console.log('CAN PASTE?', !inputs);

        if (!inputs) {
          // window.addEventListener("paste", function(e) {
          e.preventDefault();
          e.stopPropagation(); // let file = e.clipboardData.items[0].getAsFile();
          // let objectUrl = URL.createObjectURL(file);
          // do something with url here

          getClipboardImage(e);
        }
      });
    },

    handleFileLoad(fl, evt) {
      var _this = this;

      //handeFile
      if (!fl) return;
      var self = this;
      var handlePreloader = this.$root.handlePreloader;
      var showPreloaderElement = document.querySelector('.kc-preloader'); // const fl = evnt.srcElement.files[0];

      var fltype = fl.name.split('.').pop();
      var decodedFileName = decodeURIComponent(fl.name);
      this.dbg('filepicker changed:: type', fltype, fl, fl.name, decodedFileName);

      _asyncToGenerator(function* () {
        var data;

        if (fltype.includes('gif')) {
          handlePreloader(true, showPreloaderElement);
          var g = document.querySelector('.kc_gif_preview');
          g.src = decodedFileName;
          _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(decodedFileName, {
            responseType: 'blob'
          }).then(b => {
            self.showMainCanvasFor(decodedFileName, b, evt);
            handlePreloader(false, showPreloaderElement);
          });
        } else if (fltype == 'json') {
          data = yield _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fetchXhr(decodedFileName, 'json').then(r => r.json()); // console.log('loading json');

          _this.onLoadComposition(data);
        } else if (['sdIcon', 'zip'].includes(fltype)) {
          data = yield _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fetchXhr(decodedFileName, 'arraybuffer').then(r => r.arraybuffer());
          jszip__WEBPACK_IMPORTED_MODULE_2___default.a.loadAsync(data).then(function (zip) {
            // console.log('ZIP', fl, zip);
            zip.forEach(function (relativePath, zipEntry) {
              console.log('zipEntry.name', zipEntry.name, relativePath, zipEntry);
            });
          });
        } else {
          //JPG, PNG, BMP ...
          data = yield _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fetchXhr(decodedFileName, 'blob').then(r => r.blob()).then(d => _js_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a.fetchFile(d));
          var imgObj = new Image();
          imgObj.src = data;

          imgObj.onload = function () {
            self.addImageToCanvas(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image(imgObj), decodedFileName, null, 'fit');
            self.showMainCanvasFor(decodedFileName, data, evt);
          };
        }
      })();
    }

  },

  beforeCreate(e, page) {
    // console.log("[HOME]::beforeCreate", this.$root, this);
    this.$root.currentComposition.mainview = this;
  },

  mounted() {
    window.home = this; /////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////

    this.selectedLayer = null;
    this.$f7ready(f7 => {
      var srcDoc = this.$$(document);
      srcDoc.on('keydown', e => this.handleKeyEvents(e), true);
      this.handleResize();
    });
    Object(timers__WEBPACK_IMPORTED_MODULE_6__["setTimeout"])(() => {
      /////////////////////////
      ////////////////////////////////////////////////////////////
      //////////////////////
      this.initBeta();
    }, 50); // setTimeout(() => {
    //     this.extraLayer.src = 'static/images/kc.svg';
    //     setTimeout(() => this.extraLayer.src = '', 2600);
    //     // const g = document.querySelector(".kc_gif_preview");
    //     // console.log("Animation:", g);
    //     // g.addEventListener('animationiteration', (e) => {
    //     //     console.log("Animation animationiteration:", e);
    //     // }, false);
    //     // g.addEventListener('animationEnd', function(e) {
    //     //     //     // this.style.webkitAnimationPlayState = "paused";
    //     //     console.log("Animation END:", e);
    //     // });
    //     // g.addEventListener('endEvent', (e) => {
    //     //     console.log("Animation END 2222:", e);
    //     // }, false);
    // }, 1200);
  }

});

/***/ })

})