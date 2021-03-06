module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__packages_itzTable_index_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__packages_itzTable_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__packages_itzTable_index_js__);


const install = function (Vue) {
  if (install.installed) return;

  Vue.component(__WEBPACK_IMPORTED_MODULE_0__packages_itzTable_index_js___default.a.name, __WEBPACK_IMPORTED_MODULE_0__packages_itzTable_index_js___default.a);
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '1.0.0',
  install,
  ItzTable: __WEBPACK_IMPORTED_MODULE_0__packages_itzTable_index_js___default.a
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_table__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_table__);
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




/* harmony default export */ exports["default"] = {
  name: 'itz-table',

  props: {
    actionQuery:{
      type:String,
      default:''
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },

    width: [String, Number],

    height: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: {
      type: Boolean,
      default: false
    },

    border: {
      type: Boolean,
      default: false
    },

    fixedColumnCount: {
      type: Number,
      default: 0
    },

    selectionMode: {
      type: String,
      default: 'none'
    },

    selection: {},

    allowNoSelection: {
      type: Boolean,
      default: false
    },

    gutterWidth: {
      default: 0
    },

    customCriteria: Array,
    customBackgroundColors: Array
  },

  components: {
    Eltable: __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_table___default.a
  },

  data: function data() {
    return {
      tableData:this.data
    }
  },

  mounted: function() {
    this.getDataRemote();
  },

  methods: {
    getDataRemote: function() {
      var this$1 = this;

      if (this.actionQuery) {
        this.$http.get(this.actionQuery)
          .then(function (res) {
              this$1.tableData = res.data.list;
          }, function (res) {

          });
      }
    }
  }
};


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElCheckbox = __webpack_require__(36);

	ElCheckbox.install = function (Vue) {
	  Vue.component('el-checkbox', ElCheckbox);
	};

	module.exports = ElCheckbox;

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(39)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCheckbox',

	  mixins: [_emitter2.default],

	  props: {
	    value: {},
	    label: String,
	    indeterminate: Boolean,
	    disabled: Boolean,
	    checked: Boolean,
	    trueLabel: [String, Number],
	    falseLabel: [String, Number]
	  },

	  computed: {
	    _value: {
	      get: function get() {
	        return !this.wrapInGroup ? this.value : this.$parent.value;
	      },
	      set: function set(newValue) {
	        if (!this.wrapInGroup) {
	          this.$emit('input', newValue);
	        } else {
	          this.$parent.$emit('input', newValue);
	        }
	      }
	    },
	    isChecked: function isChecked() {
	      var type = Object.prototype.toString.call(this._value);

	      if (type === '[object Boolean]') {
	        return this._value;
	      } else if (type === '[object Array]') {
	        return this._value.indexOf(this.label) > -1;
	      } else if (type === '[object String]' || type === '[object Number]') {
	        return this._value === this.trueLabel;
	      }
	    }
	  },

	  data: function data() {
	    return {
	      focus: false,
	      wrapInGroup: this.$parent.$options._componentTag === 'el-checkbox-group'
	    };
	  },


	  watch: {
	    checked: {
	      immediate: true,
	      handler: function handler(value) {
	        if (value) {
	          var type = Object.prototype.toString.call(this._value);
	          if (type !== '[object Array]') {
	            this._value = this.trueLabel || true;
	          } else {
	            this._value.push(this.label);
	          }
	        }
	      }
	    }
	  },

	  methods: {
	    handleChange: function handleChange(ev) {
	      this.$emit('change', ev);
	    }
	  }
	};

/***/ },

/***/ 38:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function _broadcast(componentName, eventName, params) {
	  this.$children.forEach(function (child) {
	    var name = child.$options.componentName;

	    if (name === componentName) {
	      child.$emit.apply(child, [eventName].concat(params));
	    } else {
	      _broadcast.apply(child, [componentName, eventName].concat(params));
	    }
	  });
	}
	exports.default = {
	  methods: {
	    dispatch: function dispatch(componentName, eventName, params) {
	      var parent = this.$parent;
	      var name = parent.$options.componentName;

	      while (parent && (!name || name !== componentName)) {
	        parent = parent.$parent;

	        if (parent) {
	          name = parent.$options.componentName;
	        }
	      }
	      if (parent) {
	        parent.$emit.apply(parent, [eventName].concat(params));
	      }
	    },
	    broadcast: function broadcast(componentName, eventName, params) {
	      _broadcast.call(this, componentName, eventName, params);
	    }
	  }
	};

/***/ },

/***/ 39:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "el-checkbox"
	  }, [_h('span', {
	    staticClass: "el-checkbox__input"
	  }, [_h('span', {
	    staticClass: "el-checkbox__inner",
	    class: {
	      'is-disabled': disabled,
	      'is-checked': isChecked,
	      'is-indeterminate': indeterminate,
	      'is-focus': focus
	    }
	  }), " ", (trueLabel || falseLabel) ? _h('input', {
	    ref: "checkbox",
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "disabled": disabled,
	      "true-value": trueLabel,
	      "false-value": falseLabel
	    },
	    domProps: {
	      "checked": Array.isArray(_value) ? _i(_value, null) > -1 : _q(_value, trueLabel)
	    },
	    on: {
	      "focus": function($event) {
	        focus = true
	      },
	      "blur": function($event) {
	        focus = false
	      },
	      "change": [function($event) {
	        var $$a = _value,
	          $$el = $event.target,
	          $$c = $$el.checked ? (trueLabel) : (falseLabel);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_value = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _value = $$c
	        }
	      }, handleChange]
	    }
	  }) : _h('input', {
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "disabled": disabled
	    },
	    domProps: {
	      "value": label,
	      "checked": Array.isArray(_value) ? _i(_value, label) > -1 : _q(_value, true)
	    },
	    on: {
	      "focus": function($event) {
	        focus = true
	      },
	      "blur": function($event) {
	        focus = false
	      },
	      "change": [function($event) {
	        var $$a = _value,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = label,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_value = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _value = $$c
	        }
	      }, handleChange]
	    }
	  }), " "]), " ", ($slots.default || label) ? _h('span', {
	    staticClass: "el-checkbox__label"
	  }, [_t("default"), " ", (!$slots.default) ? [_s(label)] : _e()]) : _e()])
	}},staticRenderFns: []}

/***/ }

/******/ });

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(266);


/***/ },

/***/ 228:
/***/ function(module, exports) {

	module.exports = __webpack_require__(4);

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElTable = __webpack_require__(267);

	ElTable.install = function (Vue) {
	  Vue.component('el-table', ElTable);
	};

	module.exports = ElTable;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(268)

	/* template */
	var __vue_template__ = __webpack_require__(277)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _throttle = __webpack_require__(269);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(270);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _util = __webpack_require__(271);

	var _objectAssign = __webpack_require__(272);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _resizeEvent = __webpack_require__(273);

	var _tableBody = __webpack_require__(274);

	var _tableBody2 = _interopRequireDefault(_tableBody);

	var _tableHeader = __webpack_require__(275);

	var _tableHeader2 = _interopRequireDefault(_tableHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gridIdSeed = 1;
	var GUTTER_WIDTH = void 0;

	exports.default = {
	  name: 'el-table',

	  props: {
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

	    width: [String, Number],

	    height: [String, Number],

	    fit: {
	      type: Boolean,
	      default: true
	    },

	    stripe: {
	      type: Boolean,
	      default: false
	    },

	    border: {
	      type: Boolean,
	      default: false
	    },

	    fixedColumnCount: {
	      type: Number,
	      default: 0
	    },

	    selectionMode: {
	      type: String,
	      default: 'none'
	    },

	    selection: {},

	    allowNoSelection: {
	      type: Boolean,
	      default: false
	    },

	    gutterWidth: {
	      default: 0
	    },

	    customCriteria: Array,
	    customBackgroundColors: Array
	  },

	  components: {
	    TableHeader: _tableHeader2.default,
	    TableBody: _tableBody2.default
	  },

	  methods: {
	    handleAllSelectedChange: function handleAllSelectedChange(val) {
	      this.allSelected = val;
	    },
	    doOnDataChange: function doOnDataChange(data) {
	      data = data || [];

	      if (this.selectionMode === 'single') {
	        var oldSelection = this.selected;
	        if (oldSelection === null) {
	          if (!this.allowNoSelection) {
	            this.selected = data[0];
	            if (this.selected !== oldSelection) {
	              this.$emit('selectionchange', this.selected);
	            }
	          }
	        } else if (data.indexOf(oldSelection) === -1) {
	          if (!this.allowNoSelection) {
	            this.selected = data[0];
	          } else {
	            this.selected = null;
	          }
	          if (this.selected !== oldSelection) {
	            this.$emit('selectionchange', this.selected);
	          }
	        }
	      }
	    },
	    toggleAllSelection: function toggleAllSelection() {
	      var _this = this;

	      setTimeout(function () {
	        _this.tableData.forEach(function (item) {
	          item.$selected = _this.allSelected;
	        });
	      }, 0);
	    },
	    $calcColumns: function $calcColumns() {
	      var _this2 = this;

	      var fit = this.fit;
	      var columns = this.columns;

	      var bodyWidth = this.$el.clientWidth;
	      var bodyMinWidth = 0;

	      var flattenColumns = [];

	      columns.forEach(function (column) {
	        if (column.isColumnGroup) {
	          flattenColumns.push.apply(flattenColumns, column.columns);
	        } else {
	          flattenColumns.push(column);
	        }
	      });

	      if (fit) {
	        (function () {
	          var flexColumns = [];


	          flattenColumns.forEach(function (column) {
	            bodyMinWidth += column.width || column.minWidth || 80;

	            if (typeof column.width === 'number') {} else {
	              flexColumns.push(column);
	            }
	          });

	          if (bodyMinWidth < bodyWidth - _this2.currentGutterWidth) {
	            (function () {
	              var flexWidthTotal = bodyWidth - _this2.currentGutterWidth - columns.length - bodyMinWidth;
	              var flexWidthPerColumn = Math.floor(flexWidthTotal / flexColumns.length);
	              var flexWidthFirstColumn = flexWidthTotal - flexWidthPerColumn * flexColumns.length + flexWidthPerColumn;

	              flexColumns.forEach(function (column, index) {
	                if (index === 0) {
	                  column.realWidth = (column.minWidth || 80) + flexWidthFirstColumn;
	                } else {
	                  column.realWidth = (column.minWidth || 80) + flexWidthPerColumn;
	                }
	              });
	            })();
	          } else {
	            _this2.showHScrollBar = true;
	            flexColumns.forEach(function (column) {
	              column.realWidth = column.minWidth;
	            });
	          }

	          _this2.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
	        })();
	      } else {
	        flattenColumns.forEach(function (column) {
	          if (!column.width && !column.minWidth) {
	            column.realWidth = 80;
	          }

	          bodyMinWidth += column.realWidth;
	        });
	        this.showHScrollBar = bodyMinWidth > bodyWidth;

	        this.bodyWidth = bodyMinWidth;
	      }

	      if (this.styleNode) {
	        var _ret3 = function () {
	          var styleSheet = _this2.styleNode.sheet;

	          if (!styleSheet) return {
	              v: void 0
	            };
	          for (var i = 0, j = styleSheet.cssRules.length; i < j; i++) {
	            styleSheet.deleteRule(0);
	          }

	          columns.forEach(function (column) {
	            var addRule = function addRule(rule) {
	              styleSheet.insertRule(rule, styleSheet.cssRules.length);
	            };

	            if (column.isColumnGroup) {
	              var childColumns = column.columns;
	              var groupWidth = 0;
	              childColumns.forEach(function (childColumn) {
	                groupWidth += childColumn.realWidth;
	                addRule('.' + childColumn.id + ', .' + childColumn.id + ' > div { width: ' + childColumn.realWidth + 'px; }');
	              });

	              addRule('.' + column.id + ', .' + column.id + ' > div { width: ' + groupWidth + 'px; }');
	            } else {
	              addRule('.' + column.id + ', .' + column.id + ' > div { width: ' + column.realWidth + 'px; }');
	            }
	          });
	        }();

	        if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
	      }

	      if (this.fixedColumnCount > 0) {
	        (function () {
	          var fixedBodyWidth = 0;
	          var fixedColumnCount = _this2.fixedColumnCount;
	          columns.forEach(function (column, index) {
	            if (index < fixedColumnCount) {
	              fixedBodyWidth += column.realWidth;
	            }
	          });

	          _this2.fixedBodyWidth = fixedBodyWidth;
	        })();
	      }

	      this.$nextTick(function () {
	        _this2.headerHeight = _this2.$el.querySelector('.el-table__header-wrapper').offsetHeight;
	      });
	    },
	    $calcHeight: function $calcHeight(height) {
	      if (typeof height === 'string' && /^\d+$/.test(height)) {
	        height = Number(height);
	      }

	      if (!isNaN(height) && this.$el) {
	        var headerHeight = this.headerHeight = this.$el.querySelector('.el-table__header-wrapper').offsetHeight;
	        var bodyHeight = height - headerHeight;
	        var gridWrapper = this.$el.querySelector('.el-table__body-wrapper');
	        const bottomHeight = this.$el.querySelector('.el-table__bottom').offsetHeight;
          	gridWrapper.style.height = bodyHeight - bottomHeight + 'px';
	        this.$el.style.height = height + 'px';
	        if (this.$refs.fixed) {
	          this.$refs.fixed.style.height = height + 'px';
	        }
	        var fixedBodyWrapper = this.$el.querySelector('.el-table__fixed-body-wrapper');
	        if (fixedBodyWrapper) {
	          fixedBodyWrapper.style.height = (this.showHScrollBar ? gridWrapper.offsetHeight - this.currentGutterWidth : gridWrapper.offsetHeight) + 'px';
	        }
	      }
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hoverRowIndex = null;
	      var hoverState = this.hoverState;
	      if (hoverState) {
	        this.hoverState = null;
	      }
	    },
	    updateScrollInfo: function updateScrollInfo() {
	      var _this3 = this;

	      this.$nextTick(function () {
	        if (_this3.$el) {
	          var gridBodyWrapper = _this3.$el.querySelector('.el-table__body-wrapper');
	          var gridBody = _this3.$el.querySelector('.el-table__body-wrapper .el-table__body');

	          _this3.showVScrollBar = gridBody.offsetHeight > gridBodyWrapper.offsetHeight;
	        }
	      });
	    },
	    doRender: function doRender() {
	      var _this4 = this;

	      var bodyWrapper = this.$el.querySelector('.el-table__body-wrapper');
	      var headerWrapper = this.$el.querySelector('.el-table__header-wrapper');
	      var el = this.$el;

	      if (!this.$ready) {
	        bodyWrapper.addEventListener('scroll', function () {
	          headerWrapper.scrollLeft = this.scrollLeft;
	          var fixedBodyWrapper = el.querySelector('.el-table__fixed-body-wrapper');
	          if (fixedBodyWrapper) {
	            fixedBodyWrapper.scrollTop = this.scrollTop;
	          }
	        });
	      }

	      this.$calcColumns();

	      if (!this.$ready && this.fit) {
	        this.windowResizeListener = (0, _throttle2.default)(50, function () {
	          _this4.$calcColumns();
	        });
	        (0, _resizeEvent.addResizeListener)(this.$el, this.windowResizeListener);
	      }

	      this.$nextTick(function () {
	        if (_this4.height) {
	          _this4.$calcHeight(_this4.height);
	        }
	      });
	    }
	  },

	  created: function created() {
	    var _this5 = this;

	    this.gridId = 'grid_' + gridIdSeed + '_';

	    if (GUTTER_WIDTH === undefined) {
	      GUTTER_WIDTH = (0, _util.getScrollBarWidth)();
	    }
	    this.currentGutterWidth = GUTTER_WIDTH;

	    this.debouncedReRender = (0, _debounce2.default)(50, function () {
	      _this5.doRender();
	    });
	  },


	  computed: {
	    selection: function selection() {
	      if (this.selectionMode === 'multiple') {
	        var data = this.tableData || [];
	        return data.filter(function (item) {
	          return item.$selected === true;
	        });
	      } else if (this.selectionMode === 'single') {
	        return this.selected;
	      } else {
	        return null;
	      }
	    },
	    fixedColumns: function fixedColumns() {
	      var columns = this.columns || [];
	      var fixedColumnCount = this.fixedColumnCount;
	      return columns.filter(function (item, index) {
	        return index < fixedColumnCount;
	      });
	    },
	    filterData: function filterData() {
	      return (0, _util.orderBy)(this.tableData, this.sortingProperty, this.sortingDirection);
	    }
	  },

	  watch: {
	    fixedColumnCount: function fixedColumnCount() {
	      this.debouncedReRender();
	    },
	    selection: function selection(val) {
	      this.$emit('selectionchange', val);
	      if (this.selectionMode === 'multiple') {
	        this.allSelected = this.tableData.length > 0 && val.length === this.tableData.length;
	      }
	    },
	    visibleFilter: function visibleFilter(val) {
	      this.$broadcast('toggleFilterPopup', val);
	    },
	    height: function height(value) {
	      this.$calcHeight(value);
	    },


	    data: {
	      immediate: true,
	      handler: function handler(val) {
	        if (val && this.selectionMode === 'multiple') {
	          this.tableData = val.map(function (item) {
	            return (0, _objectAssign2.default)({ '$selected': false }, item);
	          });
	        } else {
	          this.tableData = val;
	        }
	      }
	    },

	    tableData: function tableData(newVal) {
	      var _this6 = this;

	      this.$nextTick(function (_) {
	        return _this6.doRender();
	      });
	      this.doOnDataChange(newVal);
	      this.updateScrollInfo();
	    }
	  },

	  destroyed: function destroyed() {
	    if (this.styleNode) {
	      this.styleNode.parentNode.removeChild(this.styleNode);
	    }

	    if (this.windowResizeListener) {
	      (0, _resizeEvent.removeResizeListener)(this.$el, this.windowResizeListener);
	    }
	  },
	  mounted: function mounted() {
	    var _this7 = this;

	    var styleNode = document.createElement('style');
	    styleNode.type = 'text/css';
	    styleNode.rel = 'stylesheet';
	    styleNode.title = 'Grid Column Style';
	    document.getElementsByTagName('head')[0].appendChild(styleNode);

	    this.styleNode = styleNode;

	    this.doRender();

	    this.$ready = true;
	    if (this.tableData) {
	      this.doOnDataChange(this.tableData);
	    }
	    this.updateScrollInfo();
	    if (this.fixedColumnCount > 0) {
	      this.$nextTick(function () {
	        var style = _this7.$refs.fixed.style;
	        if (!style) return;

	        style.height = (_this7.showHScrollBar ? _this7.$el.clientHeight - _this7.currentGutterWidth : _this7.$el.clientHeight) + 'px';

	        var bodyHeight = _this7.$el.querySelector('.el-table__body-wrapper').offsetHeight;
	        var fixedBodyHeight = _this7.$el.querySelector('.el-table__fixed-body-wrapper').offsetHeight;
	        if (bodyHeight !== fixedBodyHeight) {
	          (function () {
	            var bodyTrs = _this7.$el.querySelector('.el-table__body-wrapper').querySelectorAll('tr');
	            var fixedBodyTrs = _this7.$el.querySelector('.el-table__fixed-body-wrapper').querySelectorAll('tr');
	            bodyTrs.forEach(function (tr, index) {
	              var trHeight = tr.offsetHeight;
	              var fixedTrHeight = fixedBodyTrs[index].offsetHeight;
	              if (trHeight !== fixedTrHeight) {
	                fixedBodyTrs[index].style.height = trHeight + 'px';
	              }
	            });
	          })();
	        }
	      });
	    }
	  },
	  data: function data() {
	    return {
	      tableData: this.data,
	      showHScrollBar: false,
	      showVScrollBar: false,
	      hoverRowIndex: null,
	      headerHeight: 35,
	      selected: null,
	      allSelected: false,
	      columns: [],
	      resizeProxyVisible: false,
	      bodyWidth: '',
	      fixedBodyWidth: '',
	      sortingColumn: null,
	      sortingProperty: null,
	      sortingDirection: 1,
	      visibleFilter: null,
	      currentGutterWidth: this.gutterWidth
	    };
	  }
	};

/***/ },

/***/ 269:
/***/ function(module, exports) {

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset)
	 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @return {Function}  A new, throttled, function.
	 */
	module.exports = function ( delay, noTrailing, callback, debounceMode ) {

		// After wrapper has stopped being called, this timeout ensures that
		// `callback` is executed at the proper times in `throttle` and `end`
		// debounce modes.
		var timeoutID;

		// Keep track of the last time `callback` was executed.
		var lastExec = 0;

		// `noTrailing` defaults to falsy.
		if ( typeof noTrailing !== 'boolean' ) {
			debounceMode = callback;
			callback = noTrailing;
			noTrailing = undefined;
		}

		// The `wrapper` function encapsulates all of the throttling / debouncing
		// functionality and when executed will limit the rate at which `callback`
		// is executed.
		function wrapper () {

			var self = this;
			var elapsed = Number(new Date()) - lastExec;
			var args = arguments;

			// Execute `callback` and update the `lastExec` timestamp.
			function exec () {
				lastExec = Number(new Date());
				callback.apply(self, args);
			}

			// If `debounceMode` is true (at begin) this is used to clear the flag
			// to allow future `callback` executions.
			function clear () {
				timeoutID = undefined;
			}

			if ( debounceMode && !timeoutID ) {
				// Since `wrapper` is being called for the first time and
				// `debounceMode` is true (at begin), execute `callback`.
				exec();
			}

			// Clear any existing timeout.
			if ( timeoutID ) {
				clearTimeout(timeoutID);
			}

			if ( debounceMode === undefined && elapsed > delay ) {
				// In throttle mode, if `delay` time has been exceeded, execute
				// `callback`.
				exec();

			} else if ( noTrailing !== true ) {
				// In trailing throttle mode, since `delay` time has not been
				// exceeded, schedule `callback` to execute `delay` ms after most
				// recent execution.
				//
				// If `debounceMode` is true (at begin), schedule `clear` to execute
				// after `delay` ms.
				//
				// If `debounceMode` is false (at end), schedule `callback` to
				// execute after `delay` ms.
				timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
			}

		}

		// Return the wrapper function.
		return wrapper;

	};


/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-undefined */

	var throttle = __webpack_require__(269);

	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @return {Function} A new, debounced function.
	 */
	module.exports = function ( delay, atBegin, callback ) {
		return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	};


/***/ },

/***/ 271:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var scrollBarWidth;

	var getScrollBarWidth = exports.getScrollBarWidth = function getScrollBarWidth() {
	  if (scrollBarWidth !== undefined) return scrollBarWidth;

	  var outer = document.createElement('div');
	  outer.style.visibility = 'hidden';
	  outer.style.width = '100px';
	  outer.style.position = 'absolute';
	  outer.style.top = '-9999px';
	  document.body.appendChild(outer);

	  var widthNoScroll = outer.offsetWidth;
	  outer.style.overflow = 'scroll';

	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  outer.appendChild(inner);

	  var widthWithScroll = inner.offsetWidth;
	  outer.parentNode.removeChild(outer);

	  return widthNoScroll - widthWithScroll;
	};

	var getCell = exports.getCell = function getCell(event) {
	  var cell = event.target;

	  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
	    if (cell.tagName.toUpperCase() === 'TD') {
	      return cell;
	    }
	    cell = cell.parentNode;
	  }

	  return null;
	};

	var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
	  prop = prop || '';
	  var paths = prop.split('.');
	  var current = object;
	  var result = null;
	  for (var i = 0, j = paths.length; i < j; i++) {
	    var path = paths[i];
	    if (!current) break;

	    if (i === j - 1) {
	      result = current[path];
	      break;
	    }
	    current = current[path];
	  }
	  return result;
	};

	var isObject = function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	};

	var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse) {
	  if (!sortKey) {
	    return array;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;

	  return array.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getValueByPath(a, sortKey) : a;
	    b = isObject(b) ? getValueByPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	};

	var getChild = exports.getChild = function getChild(event) {
	  return event.target.querySelector('.cell');
	};

/***/ },

/***/ 272:
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },

/***/ 273:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;


	var requestFrame = function () {
	  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
	    return window.setTimeout(fn, 20);
	  };
	  return function (fn) {
	    return raf(fn);
	  };
	}();

	var cancelFrame = function () {
	  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
	  return function (id) {
	    return cancel(id);
	  };
	}();

	var resetTrigger = function resetTrigger(element) {
	  var trigger = element.__resizeTrigger__;
	  var expand = trigger.firstElementChild;
	  var contract = trigger.lastElementChild;
	  var expandChild = expand.firstElementChild;

	  contract.scrollLeft = contract.scrollWidth;
	  contract.scrollTop = contract.scrollHeight;
	  expandChild.style.width = expand.offsetWidth + 1 + 'px';
	  expandChild.style.height = expand.offsetHeight + 1 + 'px';
	  expand.scrollLeft = expand.scrollWidth;
	  expand.scrollTop = expand.scrollHeight;
	};

	var checkTriggers = function checkTriggers(element) {
	  return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
	};

	var scrollListener = function scrollListener(event) {
	  var _this = this;

	  resetTrigger(this);
	  if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	  this.__resizeRAF__ = requestFrame(function () {
	    if (checkTriggers(_this)) {
	      _this.__resizeLast__.width = _this.offsetWidth;
	      _this.__resizeLast__.height = _this.offsetHeight;
	      _this.__resizeListeners__.forEach(function (fn) {
	        fn.call(_this, event);
	      });
	    }
	  });
	};

	var attachEvent = document.attachEvent;
	var DOM_PREFIXES = 'Webkit Moz O ms'.split(' ');
	var START_EVENTS = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' ');
	var RESIZE_ANIMATION_NAME = 'resizeanim';
	var animation = false;
	var keyFramePrefix = '';
	var animationStartEvent = 'animationstart';

	if (!attachEvent) {
	  var testElement = document.createElement('fakeelement');
	  if (testElement.style.animationName !== undefined) {
	    animation = true;
	  }

	  if (animation === false) {
	    var prefix = '';
	    for (var i = 0; i < DOM_PREFIXES.length; i++) {
	      if (testElement.style[DOM_PREFIXES[i] + 'AnimationName'] !== undefined) {
	        prefix = DOM_PREFIXES[i];
	        keyFramePrefix = '-' + prefix.toLowerCase() + '-';
	        animationStartEvent = START_EVENTS[i];
	        animation = true;
	        break;
	      }
	    }
	  }
	}

	var stylesCreated = false;
	var createStyles = function createStyles() {
	  if (!stylesCreated) {
	    var animationKeyframes = '@' + keyFramePrefix + 'keyframes ' + RESIZE_ANIMATION_NAME + ' { from { opacity: 0; } to { opacity: 0; } } ';
	    var animationStyle = keyFramePrefix + 'animation: 1ms ' + RESIZE_ANIMATION_NAME + ';';

	    var css = animationKeyframes + '\n      .resize-triggers { ' + animationStyle + ' visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }';

	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }

	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};

	var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
	  if (attachEvent) {
	    element.attachEvent('onresize', fn);
	  } else {
	    if (!element.__resizeTrigger__) {
	      if (getComputedStyle(element).position === 'static') {
	        element.style.position = 'relative';
	      }
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];

	      var resizeTrigger = element.__resizeTrigger__ = document.createElement('div');
	      resizeTrigger.className = 'resize-triggers';
	      resizeTrigger.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
	      element.appendChild(resizeTrigger);

	      resetTrigger(element);
	      element.addEventListener('scroll', scrollListener, true);

	      if (animationStartEvent) {
	        resizeTrigger.addEventListener(animationStartEvent, function (event) {
	          if (event.animationName === RESIZE_ANIMATION_NAME) {
	            resetTrigger(element);
	          }
	        });
	      }
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};

	var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
	  if (attachEvent) {
	    element.detachEvent('onresize', fn);
	  } else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener);
	      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
	    }
	  }
	};

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(271);

	var getColumnById = function getColumnById(grid, columnId) {
	  var column = null;
	  grid.columns.forEach(function (item) {
	    if (item.id === columnId) {
	      column = item;
	    }
	  });
	  return column;
	};

	var getColumnByCell = function getColumnByCell(grid, cell) {
	  var matches = (cell.className || '').match(/grid_[^\s]+/gm);
	  if (matches) {
	    return getColumnById(grid, matches[0]);
	  }
	  return null;
	};

	exports.default = {
	  props: {
	    columns: {},
	    data: {},
	    fixed: {},
	    selection: {
	      default: function _default() {
	        return [];
	      }
	    }
	  },

	  render: function render(h) {
	    var _this = this;

	    return h(
	      'table',
	      {
	        'class': 'el-table__body',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [h(
	        'tbody',
	        null,
	        [this._l(this.data, function (row, $index) {
	          return h(
	            'tr',
	            {
	              on: {
	                click: function click($event) {
	                  return _this.handleClick($event, row);
	                },
	                mouseenter: function mouseenter(_) {
	                  return _this.handleMouseEnter($index);
	                }
	              },

	              style: _this.getCustomStyle(row),
	              'class': {
	                'current-row': row === _this.$parent.selected,
	                'hover': _this.$parent.$parent.hoverRowIndex === $index
	              } },
	            [_this._l(_this.columns, function (column) {
	              return h(
	                'td',
	                {
	                  style: _this.getColumnWhiteSpaceStyle(column),
	                  'class': [column.id, column.align],
	                  on: {
	                    mouseenter: function mouseenter($event) {
	                      return _this.handleCellMouseEnter($event, row);
	                    },
	                    mouseleave: _this.handleCellMouseLeave
	                  }
	                },
	                [column.template ? column.template.call(_this._renderProxy, h, { row: row, column: column, $index: $index, _self: _this.$parent.$vnode.context }) : h(
	                  'div',
	                  { 'class': 'cell' },
	                  [_this.$getPropertyText(row, column.property, column.id)]
	                )]
	              );
	            }).concat(_this.fixed ? h(
	              'td',
	              { 'class': 'gutter' },
	              []
	            ) : '')]
	          );
	        })]
	      )]
	    );
	  },
	  data: function data() {
	    return {
	      criteria: this.$parent.customCriteria,
	      colors: this.$parent.customBackgroundColors,
	      tooltipDisabled: true
	    };
	  },


	  filters: {
	    orderBy: _util.orderBy
	  },

	  methods: {
	    getColumnWhiteSpaceStyle: function getColumnWhiteSpaceStyle(column) {
	      return column.showTooltipWhenOverflow ? { 'white-space': 'nowrap' } : {};
	    },
	    checkProperty: function checkProperty(row) {
	      if (this.criteria && this.criteria.length > 0) {
	        for (var i = 0, len = this.criteria.length; i < len; i++) {
	          if (row[this.criteria[i]] === true) {
	            return i;
	          }
	        }
	      }
	      return -1;
	    },
	    getCustomStyle: function getCustomStyle(row) {
	      if (!this.criteria || !this.colors || this.criteria.length !== this.colors.length) {
	        return {};
	      }
	      var criterionIndex = this.checkProperty(row);
	      return criterionIndex > -1 ? { 'background-color': this.colors[criterionIndex] } : {};
	    },
	    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
	      var grid = this.$parent;
	      var cell = (0, _util.getCell)(event);

	      if (cell) {
	        var column = getColumnByCell(grid, cell);
	        var hoverState = grid.hoverState = { cell: cell, column: column, row: row };
	        grid.$emit('cellmouseenter', hoverState.row, hoverState.column, hoverState.cell, event);
	      }

	      var cellChild = (0, _util.getChild)(event);

	      this.tooltipDisabled = cellChild.scrollWidth <= cellChild.offsetWidth;
	    },
	    handleCellMouseLeave: function handleCellMouseLeave(event) {
	      var grid = this.$parent;
	      var cell = (0, _util.getCell)(event);

	      if (cell) {
	        var oldHoverState = grid.hoverState;
	        grid.$emit('cellmouseleave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
	      }
	    },
	    handleMouseEnter: function handleMouseEnter(index) {
	      this.$parent.hoverRowIndex = index;
	    },
	    handleClick: function handleClick(event, row) {
	      var grid = this.$parent;
	      var cell = (0, _util.getCell)(event);

	      if (cell) {
	        var column = getColumnByCell(grid, cell);
	        if (column) {
	          grid.$emit('cellclick', row, column, cell, event);
	        }
	      }

	      if (grid.selectionMode === 'single') {
	        grid.selected = row;
	      }

	      grid.$emit('rowclick', row, event);
	    },
	    handleCreate: function handleCreate(vm) {
	      document.body.appendChild(vm.$refs.popper);
	      vm.updatePopper();
	    },
	    $getPropertyText: function $getPropertyText(row, property, columnId) {
	      var grid = this.$parent;
	      var column = getColumnById(grid, columnId);
	      if (column && column.formatter) {
	        return column.formatter(row, column);
	      }

	      return (0, _util.getValueByPath)(row, property);
	    }
	  }
	};

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _index = __webpack_require__(276);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(228);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-table-header',

	  render: function render(h) {
	    var _this = this;

	    return h(
	      'table',
	      {
	        'class': 'el-table__header',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [this._l(this.columns, function (column) {
	        return h(
	          'colgroup',
	          {
	            attrs: {
	              name: column.id,
	              width: column.realWidth || column.width
	            }
	          },
	          []
	        );
	      }).concat(h(
	        'thead',
	        null,
	        [h(
	          'tr',
	          null,
	          [this._l(this.columns, function (column) {
	            return h(
	              'th',
	              {
	                on: {
	                  mousemove: function mousemove($event) {
	                    return _this.handleMouseMove($event, column);
	                  },
	                  mouseout: _this.handleMouseOut,
	                  mousedown: function mousedown($event) {
	                    return _this.handleMouseDown($event, column);
	                  },
	                  click: function click($event) {
	                    return _this.handleHeaderClick($event, column);
	                  }
	                },

	                'class': [column.id, column.direction, column.align] },
	              [[column.headerTemplate ? column.headerTemplate.call(_this._renderProxy, h, column.label) : h(
	                'div',
	                null,
	                [column.label]
	              ), column.sortable ? h(
	                'div',
	                { 'class': 'caret-wrapper' },
	                [h(
	                  'i',
	                  { 'class': 'sort-caret ascending' },
	                  []
	                ), h(
	                  'i',
	                  { 'class': 'sort-caret descending' },
	                  []
	                )]
	              ) : '']]
	            );
	          }).concat(this.$parent.showVScrollBar && this.$parent.currentGutterWidth ? h(
	            'th',
	            { 'class': 'gutter',
	              style: { width: this.$parent.currentGutterWidth + 'px' } },
	            []
	          ) : '')]
	        )]
	      ))]
	    );
	  },


	  props: {
	    columns: {},
	    fixed: Boolean,
	    allSelected: {
	      default: Boolean
	    },
	    border: Boolean
	  },

	  components: {
	    ElCheckbox: _index2.default,
	    ElTag: _index4.default
	  },

	  methods: {
	    toggleAllSelection: function toggleAllSelection($event) {
	      this.$parent.toggleAllSelection($event);
	    },
	    handleMouseDown: function handleMouseDown(event, column) {
	      var _this2 = this;

	      if (this.draggingColumn && this.border) {
	        (function () {
	          _this2.dragging = true;

	          _this2.$parent.resizeProxyVisible = true;

	          var gridEl = _this2.$parent.$el;
	          var gridLeft = gridEl.getBoundingClientRect().left;
	          var columnEl = _this2.$el.querySelector('th.' + column.id);
	          var columnRect = columnEl.getBoundingClientRect();
	          var minLeft = columnRect.left - gridLeft + 30;

	          columnEl.classList.add('noclick');

	          _this2.dragState = {
	            startMouseLeft: event.clientX,
	            startLeft: columnRect.right - gridLeft,
	            startColumnLeft: columnRect.left - gridLeft,
	            gridLeft: gridLeft
	          };

	          var resizeProxy = _this2.$parent.$refs.resizeProxy;
	          resizeProxy.style.left = _this2.dragState.startLeft + 'px';

	          document.onselectstart = function () {
	            return false;
	          };
	          document.ondragstart = function () {
	            return false;
	          };

	          var mousemove = function mousemove(event) {
	            var deltaLeft = event.clientX - _this2.dragState.startMouseLeft;
	            var proxyLeft = _this2.dragState.startLeft + deltaLeft;

	            resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
	          };

	          var mouseup = function mouseup() {
	            if (_this2.dragging) {
	              var finalLeft = parseInt(resizeProxy.style.left, 10);
	              var columnWidth = finalLeft - _this2.dragState.startColumnLeft;
	              column.width = column.realWidth = columnWidth;

	              _this2.$nextTick(function () {
	                _this2.$parent.$calcColumns();
	              });

	              document.body.style.cursor = '';
	              _this2.dragging = false;
	              _this2.draggingColumn = null;
	              _this2.dragState = {};

	              _this2.$parent.resizeProxyVisible = false;
	            }

	            document.removeEventListener('mousemove', mousemove);
	            document.removeEventListener('mouseup', mouseup);
	            document.onselectstart = null;
	            document.ondragstart = null;

	            setTimeout(function () {
	              columnEl.classList.remove('noclick');
	            }, 0);
	          };

	          document.addEventListener('mousemove', mousemove);
	          document.addEventListener('mouseup', mouseup);
	        })();
	      }
	    },
	    handleMouseMove: function handleMouseMove(event, column) {
	      var target = event.target;

	      if (!column || !column.resizable) return;

	      if (!this.dragging && this.border) {
	        var rect = target.getBoundingClientRect();

	        if (rect.width > 12 && rect.right - event.pageX < 8) {
	          document.body.style.cursor = 'col-resize';
	          this.draggingColumn = column;
	        } else if (!this.dragging) {
	          document.body.style.cursor = '';
	          this.draggingColumn = null;
	          if (column.sortable) document.body.style.cursor = 'pointer';
	        }
	      }
	    },
	    handleMouseOut: function handleMouseOut() {
	      document.body.style.cursor = '';
	    },
	    handleHeaderClick: function handleHeaderClick(event, column) {
	      var target = event.target;
	      while (target && target.tagName !== 'TH') {
	        target = target.parentNode;
	      }

	      if (target && target.tagName === 'TH') {
	        if (target.classList.contains('noclick')) {
	          target.classList.remove('noclick');
	          return;
	        }
	      }

	      if (!column.sortable) return;

	      var grid = this.$parent;

	      if (grid.sortingColumn !== column) {
	        if (grid.sortingColumn) {
	          grid.sortingColumn.direction = '';
	        }
	        grid.sortingColumn = column;
	        grid.sortingProperty = column.property;
	      }

	      if (!column.direction) {
	        column.direction = 'ascending';
	      } else if (column.direction === 'ascending') {
	        column.direction = 'descending';
	      } else {
	        column.direction = '';
	        grid.sortingColumn = null;
	        grid.sortingProperty = null;
	      }

	      grid.sortingDirection = column.direction === 'descending' ? -1 : 1;
	    },
	    $setVisibleFilter: function $setVisibleFilter(property) {
	      if (this.visibleFilter) {
	        this.visibleFilter = null;
	      } else {
	        this.visibleFilter = property;
	      }
	    }
	  },

	  watch: {
	    visibleFilter: function visibleFilter(val) {
	      this.$parent.visibleFilter = val;
	    }
	  },

	  data: function data() {
	    return {
	      draggingColumn: null,
	      dragging: false,
	      dragState: {},
	      columnsMap: null,
	      visibleFilter: null
	    };
	  }
	};

/***/ },

/***/ 276:
/***/ function(module, exports) {

	module.exports = __webpack_require__(2);

/***/ },

/***/ 277:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-table",
	    class: {
	      'el-table--fit': fit, 'el-table--striped': stripe, 'el-table--border': border
	    },
	    on: {
	      "mouseleave": function($event) {
	        handleMouseLeave($event)
	      }
	    }
	  }, [_h('div', {
	    ref: "hiddenColumns",
	    staticClass: "hidden-columns"
	  }, [_t("default")]), " ", _h('div', {
	    staticClass: "el-table__header-wrapper"
	  }, [_h('table-header', {
	    style: ({
	      width: bodyWidth ? bodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "columns": columns,
	      "all-selected": allSelected,
	      "selection": selection,
	      "border": border
	    },
	    on: {
	      "allselectedchange": handleAllSelectedChange
	    }
	  })]), " ", _h('div', {
	    staticClass: "el-table__body-wrapper"
	  }, [_h('table-body', {
	    style: ({
	      width: bodyWidth ? bodyWidth - (showVScrollBar ? currentGutterWidth : 0) + 'px' : ''
	    }),
	    attrs: {
	      "columns": columns,
	      "selection": selection,
	      "data": filterData
	    }
	  })]), " ", _h('div', {
	    ref: "fixed",
	    staticClass: "el-table__fixed",
	    style: ({
	      width: fixedBodyWidth ? fixedBodyWidth + 'px' : ''
	    })
	  }, [(fixedColumnCount > 0) ? _h('div', {
	    staticClass: "el-table__fixed-header-wrapper"
	  }, [_h('table-header', {
	    style: ({
	      width: fixedBodyWidth ? fixedBodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "columns": fixedColumns,
	      "all-selected": allSelected,
	      "selection": selection,
	      "border": border
	    },
	    on: {
	      "allselectedchange": handleAllSelectedChange
	    }
	  })]) : _e(), " ", (fixedColumnCount > 0) ? _h('div', {
	    staticClass: "el-table__fixed-body-wrapper",
	    style: ({
	      top: headerHeight + 'px'
	    })
	  }, [_h('table-body', {
	    style: ({
	      width: fixedBodyWidth ? fixedBodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "columns": fixedColumns,
	      "fixed": "",
	      "selection": selection,
	      "data": filterData
	    }
	  })]) : _e()]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (resizeProxyVisible),
	      expression: "resizeProxyVisible"
	    }],
	    ref: "resizeProxy",
	    staticClass: "el-table__bottom el-table__column-resize-proxy"
	  }), " ", _t("bottom")])
	}},staticRenderFns: []}

/***/ }

/******/ });

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(287);


/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElTag = __webpack_require__(288);

	ElTag.install = function (Vue) {
	  Vue.component(ElTag.name, ElTag);
	};

	module.exports = ElTag;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(289)

	/* template */
	var __vue_template__ = __webpack_require__(290)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 289:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElTag',
	  props: {
	    text: String,
	    closable: Boolean,
	    type: String,
	    hit: Boolean,
	    closeTransition: Boolean
	  },
	  methods: {
	    handleClose: function handleClose(event) {
	      this.$emit('close', event);
	    }
	  }
	};

/***/ },

/***/ 290:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": closeTransition ? '' : 'md-fade-center'
	    }
	  }, [_h('span', {
	    staticClass: "el-tag",
	    class: [type ? 'el-tag--' + type : '', {
	      'is-hit': hit
	    }]
	  }, [_t("default"), " ", (closable) ? _h('i', {
	    staticClass: "el-tag__close el-icon-close",
	    on: {
	      "click": handleClose
	    }
	  }) : _e()])])
	}},staticRenderFns: []}

/***/ }

/******/ });

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(6)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.name = __vue_options__.name || "itzTable"

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "itz-table"
  }, [_h('el-table', {
    ref: "elTable",
    attrs: {
      "data": tableData,
      "width": width,
      "height": height,
      "fit": fit,
      "stripe": stripe,
      "border": border,
      "fixedColumnCount": fixedColumnCount,
      "selectionMode": selectionMode,
      "selection": selection,
      "allowNoSelection": allowNoSelection,
      "gutterWidth": gutterWidth,
      "customCriteria": customCriteria,
      "customBackgroundColors": customBackgroundColors
    }
  }, [_t("default")]), " ", _t("pagenation")])
}},staticRenderFns: []}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

const ItzTable = __webpack_require__(5);

ItzTable.install = function (Vue) {
  Vue.component(ItzTable.name, ItzTable);
};

module.exports = ItzTable;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ]);