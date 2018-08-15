function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i
    }
    return Array.from(e)
}
var _slice = Array.prototype.slice,
    _slicedToArray = function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var i = [],
                    r = !0,
                    n = !1,
                    s = void 0;
                try {
                    for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0);
                } catch (e) {
                    n = !0, s = e
                } finally {
                    try {
                        !r && o.return && o.return()
                    } finally {
                        if (n) throw s
                    }
                }
                return i
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
    _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
        }
        return e
    };
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e, t) {
        return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function() {
            var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(this), e.apply(t || $, i)
        }), e.parsleyAdaptedCallback
    }

    function i(e) {
        return 0 === e.lastIndexOf(V, 0) ? e.substr(V.length) : e
    }
    var r, n = 1,
        s = {},
        a = {
            attr: function(e, t, i) {
                var r, n, s, a = new RegExp("^" + t, "i");
                if (void 0 === i) i = {};
                else
                    for (r in i) i.hasOwnProperty(r) && delete i[r];
                if (!e) return i;
                for (r = (s = e.attributes).length; r--;) n = s[r], n && n.specified && a.test(n.name) && (i[this.camelize(n.name.slice(t.length))] = this.deserializeValue(n.value));
                return i
            },
            checkAttr: function(e, t, i) {
                return e.hasAttribute(t + i)
            },
            setAttr: function(e, t, i, r) {
                e.setAttribute(this.dasherize(t + i), String(r))
            },
            getType: function(e) {
                return e.getAttribute("type") || "text"
            },
            generateID: function() {
                return "" + n++
            },
            deserializeValue: function(e) {
                var t;
                try {
                    return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? JSON.parse(e) : e : t) : e
                } catch (t) {
                    return e
                }
            },
            camelize: function(e) {
                return e.replace(/-+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            },
            dasherize: function(e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            },
            warn: function() {
                var e;
                window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
            },
            warnOnce: function(e) {
                s[e] || (s[e] = !0, this.warn.apply(this, arguments))
            },
            _resetWarnings: function() {
                s = {}
            },
            trimString: function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            parse: {
                date: function(e) {
                    var t = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                    if (!t) return null;
                    var i = t.map(function(e) {
                            return parseInt(e, 10)
                        }),
                        r = _slicedToArray(i, 4),
                        n = (r[0], r[1]),
                        s = r[2],
                        a = r[3],
                        o = new Date(n, s - 1, a);
                    return o.getFullYear() !== n || o.getMonth() + 1 !== s || o.getDate() !== a ? null : o
                },
                string: function(e) {
                    return e
                },
                integer: function(e) {
                    return isNaN(e) ? null : parseInt(e, 10)
                },
                number: function(e) {
                    if (isNaN(e)) throw null;
                    return parseFloat(e)
                },
                boolean: function(e) {
                    return !/^\s*false\s*$/i.test(e)
                },
                object: function(e) {
                    return a.deserializeValue(e)
                },
                regexp: function(e) {
                    var t = "";
                    return /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : e = "^" + e + "$", new RegExp(e, t)
                }
            },
            parseRequirement: function(e, t) {
                var i = this.parse[e || "string"];
                if (!i) throw 'Unknown requirement specification: "' + e + '"';
                var r = i(t);
                if (null === r) throw "Requirement is not a " + e + ': "' + t + '"';
                return r
            },
            namespaceEvents: function(t, i) {
                return (t = this.trimString(t || "").split(/\s+/))[0] ? e.map(t, function(e) {
                    return e + "." + i
                }).join(" ") : ""
            },
            difference: function(t, i) {
                var r = [];
                return e.each(t, function(e, t) {
                    -1 == i.indexOf(t) && r.push(t)
                }), r
            },
            all: function(t) {
                return e.when.apply(e, _toConsumableArray(t).concat([42, 42]))
            },
            objectCreate: Object.create || (r = function() {}, function(e) {
                if (arguments.length > 1) throw Error("Second argument not supported");
                if ("object" != typeof e) throw TypeError("Argument must be an object");
                r.prototype = e;
                var t = new r;
                return r.prototype = null, t
            }),
            _SubmitSelector: 'input[type="submit"], button:submit'
        },
        o = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            multiple: null,
            group: null,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            triggerAfterFailure: "input",
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function(e) {},
            errorsContainer: function(e) {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        l = function() {
            this.__id__ = a.generateID()
        };
    l.prototype = {
        asyncSupport: !0,
        _pipeAccordingToValidationResult: function() {
            var t = this,
                i = function() {
                    var i = e.Deferred();
                    return !0 !== t.validationResult && i.reject(), i.resolve().promise()
                };
            return [i, i]
        },
        actualizeOptions: function() {
            return a.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
        },
        _resetOptions: function(e) {
            this.domOptions = a.objectCreate(this.parent.options), this.options = a.objectCreate(this.domOptions);
            for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
            this.actualizeOptions()
        },
        _listeners: null,
        on: function(e, t) {
            return this._listeners = this._listeners || {}, (this._listeners[e] = this._listeners[e] || []).push(t), this
        },
        subscribe: function(t, i) {
            e.listenTo(this, t.toLowerCase(), i)
        },
        off: function(e, t) {
            var i = this._listeners && this._listeners[e];
            if (i)
                if (t)
                    for (var r = i.length; r--;) i[r] === t && i.splice(r, 1);
                else delete this._listeners[e];
            return this
        },
        unsubscribe: function(t, i) {
            e.unsubscribeTo(this, t.toLowerCase())
        },
        trigger: function(e, t, i) {
            t = t || this;
            var r, n = this._listeners && this._listeners[e];
            if (n)
                for (var s = n.length; s--;)
                    if (r = n[s].call(t, t, i), !1 === r) return r;
            return !this.parent || this.parent.trigger(e, t, i)
        },
        asyncIsValid: function(e, t) {
            return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
                group: e,
                force: t
            })
        },
        _findRelated: function() {
            return this.options.multiple ? e(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element
        }
    };
    var u = function(t) {
        e.extend(!0, this, t)
    };
    u.prototype = {
        validate: function(e, t) {
            if (this.fn) return arguments.length > 3 && (t = [].slice.call(arguments, 1, -1)), this.fn(e, t);
            if (Array.isArray(e)) {
                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments)
            }
            var i = arguments[arguments.length - 1];
            if (this.validateDate && i._isDateInput()) return arguments[0] = a.parse.date(arguments[0]), null !== arguments[0] && this.validateDate.apply(this, arguments);
            if (this.validateNumber) return !isNaN(e) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
            if (this.validateString) return this.validateString.apply(this, arguments);
            throw "Validator `" + this.name + "` only handles multiple values"
        },
        parseRequirements: function(t, i) {
            if ("string" != typeof t) return Array.isArray(t) ? t : [t];
            var r = this.requirementType;
            if (Array.isArray(r)) {
                for (var n = function(e, t) {
                        var i = e.match(/^\s*\[(.*)\]\s*$/);
                        if (!i) throw 'Requirement is not an array: "' + e + '"';
                        var r = i[1].split(",").map(a.trimString);
                        if (r.length !== t) throw "Requirement has " + r.length + " values when " + t + " are needed";
                        return r
                    }(t, r.length), s = 0; s < n.length; s++) n[s] = a.parseRequirement(r[s], n[s]);
                return n
            }
            return e.isPlainObject(r) ? function(e, t, i) {
                var r = null,
                    n = {};
                for (var s in e)
                    if (s) {
                        var o = i(s);
                        "string" == typeof o && (o = a.parseRequirement(e[s], o)), n[s] = o
                    } else r = a.parseRequirement(e[s], t);
                return [r, n]
            }(r, t, i) : [a.parseRequirement(r, t)]
        },
        requirementType: "string",
        priority: 2
    };
    var d = function(e, t) {
            this.__class__ = "ValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
        },
        h = {
            email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
            number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
            integer: /^-?\d+$/,
            digits: /^\d+$/,
            alphanum: /^\w+$/i,
            date: {
                test: function(e) {
                    return null !== a.parse.date(e)
                }
            },
            url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")
        };
    h.range = h.number;
    var p = function(e) {
            var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
        },
        c = function(e, t) {
            return function(i) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) n[s - 1] = arguments[s];
                return n.pop(), t.apply(void 0, [i].concat(_toConsumableArray((o = e, n.map(a.parse[o])))));
                var o
            }
        },
        f = function(e) {
            return {
                validateDate: c("date", e),
                validateNumber: c("number", e),
                requirementType: e.length <= 2 ? "string" : ["string", "string"],
                priority: 30
            }
        };
    d.prototype = {
        init: function(e, t) {
            this.catalog = t, this.validators = _extends({}, this.validators);
            for (var i in e) this.addValidator(i, e[i].fn, e[i].priority);
            window.Parsley.trigger("parsley:validator:init")
        },
        setLocale: function(e) {
            if (void 0 === this.catalog[e]) throw new Error(e + " is not available in the catalog");
            return this.locale = e, this
        },
        addCatalog: function(e, t, i) {
            return "object" == typeof t && (this.catalog[e] = t), !0 === i ? this.setLocale(e) : this
        },
        addMessage: function(e, t, i) {
            return void 0 === this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = i, this
        },
        addMessages: function(e, t) {
            for (var i in t) this.addMessage(e, i, t[i]);
            return this
        },
        addValidator: function(e, t, i) {
            if (this.validators[e]) a.warn('Validator "' + e + '" is already defined.');
            else if (o.hasOwnProperty(e)) return void a.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments)
        },
        hasValidator: function(e) {
            return !!this.validators[e]
        },
        updateValidator: function(e, t, i) {
            return this.validators[e] ? this._setValidator.apply(this, arguments) : (a.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments))
        },
        removeValidator: function(e) {
            return this.validators[e] || a.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
        },
        _setValidator: function(e, t, i) {
            "object" != typeof t && (t = {
                fn: t,
                priority: i
            }), t.validate || (t = new u(t)), this.validators[e] = t;
            for (var r in t.messages || {}) this.addMessage(r, e, t.messages[r]);
            return this
        },
        getErrorMessage: function(e) {
            var t;
            "type" === e.name ? t = (this.catalog[this.locale][e.name] || {})[e.requirements] : t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements);
            return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
        },
        formatMessage: function(e, t) {
            if ("object" == typeof t) {
                for (var i in t) e = this.formatMessage(e, t[i]);
                return e
            }
            return "string" == typeof e ? e.replace(/%s/i, t) : ""
        },
        validators: {
            notblank: {
                validateString: function(e) {
                    return /\S/.test(e)
                },
                priority: 2
            },
            required: {
                validateMultiple: function(e) {
                    return e.length > 0
                },
                validateString: function(e) {
                    return /\S/.test(e)
                },
                priority: 512
            },
            type: {
                validateString: function(e, t) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        r = i.step,
                        n = void 0 === r ? "any" : r,
                        s = i.base,
                        a = void 0 === s ? 0 : s,
                        o = h[t];
                    if (!o) throw new Error("validator type `" + t + "` is not supported");
                    if (!o.test(e)) return !1;
                    if ("number" === t && !/^any$/i.test(n || "")) {
                        var l = Number(e),
                            u = Math.max(p(n), p(a));
                        if (p(l) > u) return !1;
                        var d = function(e) {
                            return Math.round(e * Math.pow(10, u))
                        };
                        if ((d(l) - d(a)) % d(n) != 0) return !1
                    }
                    return !0
                },
                requirementType: {
                    "": "string",
                    step: "string",
                    base: "number"
                },
                priority: 256
            },
            pattern: {
                validateString: function(e, t) {
                    return t.test(e)
                },
                requirementType: "regexp",
                priority: 64
            },
            minlength: {
                validateString: function(e, t) {
                    return e.length >= t
                },
                requirementType: "integer",
                priority: 30
            },
            maxlength: {
                validateString: function(e, t) {
                    return e.length <= t
                },
                requirementType: "integer",
                priority: 30
            },
            length: {
                validateString: function(e, t, i) {
                    return e.length >= t && e.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            mincheck: {
                validateMultiple: function(e, t) {
                    return e.length >= t
                },
                requirementType: "integer",
                priority: 30
            },
            maxcheck: {
                validateMultiple: function(e, t) {
                    return e.length <= t
                },
                requirementType: "integer",
                priority: 30
            },
            check: {
                validateMultiple: function(e, t, i) {
                    return e.length >= t && e.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            min: f(function(e, t) {
                return e >= t
            }),
            max: f(function(e, t) {
                return e <= t
            }),
            range: f(function(e, t, i) {
                return e >= t && e <= i
            }),
            equalto: {
                validateString: function(t, i) {
                    var r = e(i);
                    return r.length ? t === r.val() : t === i
                },
                priority: 256
            }
        }
    };
    var m = {};
    m.Form = {
        _actualizeTriggers: function() {
            var e = this;
            this.$element.on("submit.Parsley", function(t) {
                e.onSubmitValidate(t)
            }), this.$element.on("click.Parsley", a._SubmitSelector, function(t) {
                e.onSubmitButton(t)
            }), !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "")
        },
        focus: function() {
            if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null;
            for (var e = 0; e < this.fields.length; e++) {
                var t = this.fields[e];
                if (!0 !== t.validationResult && t.validationResult.length > 0 && void 0 === t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
            }
            return null === this._focusedField ? null : this._focusedField.focus()
        },
        _destroyUI: function() {
            this.$element.off(".Parsley")
        }
    }, m.Field = {
        _reflowUI: function() {
            if (this._buildUI(), this._ui) {
                var e = function e(t, i, r) {
                    for (var n = [], s = [], a = 0; a < t.length; a++) {
                        for (var o = !1, l = 0; l < i.length; l++)
                            if (t[a].assert.name === i[l].assert.name) {
                                o = !0;
                                break
                            }
                        o ? s.push(t[a]) : n.push(t[a])
                    }
                    return {
                        kept: s,
                        added: n,
                        removed: r ? [] : e(i, t, !0).added
                    }
                }(this.validationResult, this._ui.lastValidationResult);
                this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
            }
        },
        getErrorsMessages: function() {
            if (!0 === this.validationResult) return [];
            for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
            return e
        },
        addError: function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                r = t.assert,
                n = t.updateClass,
                s = void 0 === n || n;
            this._buildUI(), this._addError(e, {
                message: i,
                assert: r
            }), s && this._errorClass()
        },
        updateError: function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                r = t.assert,
                n = t.updateClass,
                s = void 0 === n || n;
            this._buildUI(), this._updateError(e, {
                message: i,
                assert: r
            }), s && this._errorClass()
        },
        removeError: function(e) {
            var t = (arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]).updateClass,
                i = void 0 === t || t;
            this._buildUI(), this._removeError(e), i && this._manageStatusClass()
        },
        _manageStatusClass: function() {
            this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
        },
        _manageErrorsMessages: function(t) {
            if (void 0 === this.options.errorsMessagesDisabled) {
                if (void 0 !== this.options.errorMessage) return t.added.length || t.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var i = 0; i < t.removed.length; i++) this._removeError(t.removed[i].assert.name);
                for (i = 0; i < t.added.length; i++) this._addError(t.added[i].assert.name, {
                    message: t.added[i].errorMessage,
                    assert: t.added[i].assert
                });
                for (i = 0; i < t.kept.length; i++) this._updateError(t.kept[i].assert.name, {
                    message: t.kept[i].errorMessage,
                    assert: t.kept[i].assert
                })
            }
        },
        _addError: function(t, i) {
            var r = i.message,
                n = i.assert;
            this._insertErrorWrapper(), this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId), this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-" + t).html(r || this._getErrorMessage(n)))
        },
        _updateError: function(e, t) {
            var i = t.message,
                r = t.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(r))
        },
        _removeError: function(e) {
            this._ui.$errorClassHandler.removeAttr("aria-describedby"), this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
        },
        _getErrorMessage: function(e) {
            var t = e.name + "Message";
            return void 0 !== this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
        },
        _buildUI: function() {
            if (!this._ui && !1 !== this.options.uiEnabled) {
                var t = {};
                this.element.setAttribute(this.options.namespace + "id", this.__id__), t.$errorClassHandler = this._manageClassHandler(), t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId), t.lastValidationResult = [], t.validationInformationVisible = !1, this._ui = t
            }
        },
        _manageClassHandler: function() {
            if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length) return e(this.options.classHandler);
            var t = this.options.classHandler;
            if ("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (t = window[this.options.classHandler]), "function" == typeof t) {
                var i = t.call(this, this);
                if (void 0 !== i && i.length) return i
            } else {
                if ("object" == typeof t && t instanceof jQuery && t.length) return t;
                t && a.warn("The class handler `" + t + "` does not exist in DOM nor as a global JS function")
            }
            return this._inputHolder()
        },
        _inputHolder: function() {
            return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element
        },
        _insertErrorWrapper: function() {
            var t = this.options.errorsContainer;
            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
            if ("string" == typeof t) {
                if (e(t).length) return e(t).append(this._ui.$errorsWrapper);
                "function" == typeof window[t] ? t = window[t] : a.warn("The errors container `" + t + "` does not exist in DOM nor as a global JS function")
            }
            return "function" == typeof t && (t = t.call(this, this)), "object" == typeof t && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
        },
        _actualizeTriggers: function() {
            var e, t = this,
                i = this._findRelated();
            i.off(".Parsley"), this._failedOnce ? i.on(a.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
                t._validateIfNeeded()
            }) : (e = a.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, function(e) {
                t._validateIfNeeded(e)
            })
        },
        _validateIfNeeded: function(e) {
            var t = this;
            e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function() {
                return t.validate()
            }, this.options.debounce)) : this.validate())
        },
        _resetUI: function() {
            this._failedOnce = !1, this._actualizeTriggers(), void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
        },
        _destroyUI: function() {
            this._resetUI(), void 0 !== this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
        },
        _successClass: function() {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
        },
        _errorClass: function() {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
        },
        _resetClass: function() {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
        }
    };
    var g = function(t, i, r) {
            this.__class__ = "Form", this.element = t, this.$element = e(t), this.domOptions = i, this.options = r, this.parent = window.Parsley, this.fields = [], this.validationResult = null
        },
        v = {
            pending: null,
            resolved: !0,
            rejected: !1
        };
    g.prototype = {
        onSubmitValidate: function(e) {
            var t = this;
            if (!0 !== e.parsley) {
                var i = this._submitSource || this.$element.find(a._SubmitSelector)[0];
                if (this._submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i || null === i.getAttribute("formnovalidate")) {
                    window.Parsley._remoteCache = {};
                    var r = this.whenValidate({
                        event: e
                    });
                    "resolved" === r.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === r.state() && r.done(function() {
                        t._submit(i)
                    }))
                }
            }
        },
        onSubmitButton: function(e) {
            this._submitSource = e.currentTarget
        },
        _submit: function(t) {
            if (!1 !== this._trigger("submit")) {
                if (t) {
                    var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === i.length && (i = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), i.attr({
                        name: t.getAttribute("name"),
                        value: t.getAttribute("value")
                    })
                }
                this.$element.trigger(_extends(e.Event("submit"), {
                    parsley: !0
                }))
            }
        },
        validate: function(t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments);
                t = {
                    group: i[0],
                    force: i[1],
                    event: i[2]
                }
            }
            return v[this.whenValidate(t).state()]
        },
        whenValidate: function() {
            var t, i = this,
                r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = r.group,
                s = r.force,
                o = r.event;
            this.submitEvent = o, o && (this.submitEvent = _extends({}, o, {
                preventDefault: function() {
                    a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), i.validationResult = !1
                }
            })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
            var l = this._withoutReactualizingFormOptions(function() {
                return e.map(i.fields, function(e) {
                    return e.whenValidate({
                        force: s,
                        group: n
                    })
                })
            });
            return (t = a.all(l).done(function() {
                i._trigger("success")
            }).fail(function() {
                i.validationResult = !1, i.focus(), i._trigger("error")
            }).always(function() {
                i._trigger("validated")
            })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()))
        },
        isValid: function(t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments);
                t = {
                    group: i[0],
                    force: i[1]
                }
            }
            return v[this.whenValid(t).state()]
        },
        whenValid: function() {
            var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = i.group,
                n = i.force;
            this._refreshFields();
            var s = this._withoutReactualizingFormOptions(function() {
                return e.map(t.fields, function(e) {
                    return e.whenValid({
                        group: r,
                        force: n
                    })
                })
            });
            return a.all(s)
        },
        refresh: function() {
            return this._refreshFields(), this
        },
        reset: function() {
            for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
            this._trigger("reset")
        },
        destroy: function() {
            this._destroyUI();
            for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy")
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var t = this,
                i = this.fields;
            return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
                t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e, i) {
                    var r = new window.Parsley.Factory(i, {}, t);
                    if (("Field" === r.__class__ || "FieldMultiple" === r.__class__) && !0 !== r.options.excluded) {
                        var n = r.__class__ + "-" + r.__id__;
                        void 0 === t.fieldsMappedById[n] && (t.fieldsMappedById[n] = r, t.fields.push(r))
                    }
                }), e.each(a.difference(i, t.fields), function(e, t) {
                    t.reset()
                })
            }), this
        },
        _withoutReactualizingFormOptions: function(e) {
            var t = this.actualizeOptions;
            this.actualizeOptions = function() {
                return this
            };
            var i = e();
            return this.actualizeOptions = t, i
        },
        _trigger: function(e) {
            return this.trigger("form:" + e)
        }
    };
    var y = function(e, t, i, r, n) {
        var s = window.Parsley._validatorRegistry.validators[t],
            a = new u(s);
        r = r || e.options[t + "Priority"] || a.priority, _extends(this, {
            validator: a,
            name: t,
            requirements: i,
            priority: r,
            isDomConstraint: n = !0 === n
        }), this._parseRequirements(e.options)
    };
    y.prototype = {
        validate: function(e, t) {
            var i;
            return (i = this.validator).validate.apply(i, [e].concat(_toConsumableArray(this.requirementList), [t]))
        },
        _parseRequirements: function(e) {
            var t = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function(i) {
                return e[t.name + (r = i, r[0].toUpperCase() + r.slice(1))];
                var r
            })
        }
    };
    var _ = function(t, i, r, n) {
            this.__class__ = "Field", this.element = t, this.$element = e(t), void 0 !== n && (this.parent = n), this.options = r, this.domOptions = i, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
        },
        w = {
            pending: null,
            resolved: !0,
            rejected: !1
        };
    _.prototype = {
        validate: function(t) {
            arguments.length >= 1 && !e.isPlainObject(t) && (a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), t = {
                options: t
            });
            var i = this.whenValidate(t);
            if (!i) return !0;
            switch (i.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult
            }
        },
        whenValidate: function() {
            var e, t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = i.force,
                n = i.group;
            if (this.refresh(), !n || this._isInGroup(n)) return this.value = this.getValue(), this._trigger("validate"), (e = this.whenValid({
                force: r,
                value: this.value,
                _refreshed: !0
            }).always(function() {
                t._reflowUI()
            }).done(function() {
                t._trigger("success")
            }).fail(function() {
                t._trigger("error")
            }).always(function() {
                t._trigger("validated")
            })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult()))
        },
        hasConstraints: function() {
            return 0 !== this.constraints.length
        },
        needsValidation: function(e) {
            return void 0 === e && (e = this.getValue()), !(!e.length && !this._isRequired() && void 0 === this.options.validateIfEmpty)
        },
        _isInGroup: function(t) {
            return Array.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t
        },
        isValid: function(t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments);
                t = {
                    force: i[0],
                    value: i[1]
                }
            }
            var r = this.whenValid(t);
            return !r || w[r.state()]
        },
        whenValid: function() {
            var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = i.force,
                n = void 0 !== r && r,
                s = i.value,
                o = i.group;
            if (i._refreshed || this.refresh(), !o || this._isInGroup(o)) {
                if (this.validationResult = !0, !this.hasConstraints()) return e.when();
                if (void 0 !== s && null !== s || (s = this.getValue()), !this.needsValidation(s) && !0 !== n) return e.when();
                var l = this._getGroupedConstraints(),
                    u = [];
                return e.each(l, function(i, r) {
                    var n = a.all(e.map(r, function(e) {
                        return t._validateConstraint(s, e)
                    }));
                    if (u.push(n), "rejected" === n.state()) return !1
                }), a.all(u)
            }
        },
        _validateConstraint: function(t, i) {
            var r = this,
                n = i.validate(t, this);
            return !1 === n && (n = e.Deferred().reject()), a.all([n]).fail(function(e) {
                r.validationResult instanceof Array || (r.validationResult = []), r.validationResult.push({
                    assert: i,
                    errorMessage: "string" == typeof e && e
                })
            })
        },
        getValue: function() {
            var e;
            return void 0 === (e = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val()) || null === e ? "" : this._handleWhitespace(e)
        },
        reset: function() {
            return this._resetUI(), this._trigger("reset")
        },
        destroy: function() {
            this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy")
        },
        refresh: function() {
            return this._refreshConstraints(), this
        },
        _refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        refreshConstraints: function() {
            return a.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"), this.refresh()
        },
        addConstraint: function(e, t, i, r) {
            if (window.Parsley._validatorRegistry.validators[e]) {
                var n = new y(this, e, t, i, r);
                "undefined" !== this.constraintsByName[n.name] && this.removeConstraint(n.name), this.constraints.push(n), this.constraintsByName[n.name] = n
            }
            return this
        },
        removeConstraint: function(e) {
            for (var t = 0; t < this.constraints.length; t++)
                if (e === this.constraints[t].name) {
                    this.constraints.splice(t, 1);
                    break
                }
            return delete this.constraintsByName[e], this
        },
        updateConstraint: function(e, t, i) {
            return this.removeConstraint(e).addConstraint(e, t, i)
        },
        _bindConstraints: function() {
            for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (e.push(this.constraints[i]), t[this.constraints[i].name] = this.constraints[i]);
            this.constraints = e, this.constraintsByName = t;
            for (var r in this.options) this.addConstraint(r, this.options[r], void 0, !0);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
            var e = this.element.getAttribute("min"),
                t = this.element.getAttribute("max");
            null !== e && null !== t ? this.addConstraint("range", [e, t], void 0, !0) : null !== e ? this.addConstraint("min", e, void 0, !0) : null !== t && this.addConstraint("max", t, void 0, !0), null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
            var i = a.getType(this.element);
            return "number" === i ? this.addConstraint("type", ["number", {
                step: this.element.getAttribute("step") || "1",
                base: e || this.element.getAttribute("value")
            }], void 0, !0) : /^(email|url|range|date)$/i.test(i) ? this.addConstraint("type", i, void 0, !0) : this
        },
        _isRequired: function() {
            return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
        },
        _trigger: function(e) {
            return this.trigger("field:" + e)
        },
        _handleWhitespace: function(e) {
            return !0 === this.options.trimValue && a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = a.trimString(e)), e
        },
        _isDateInput: function() {
            var e = this.constraintsByName.type;
            return e && "date" === e.requirements
        },
        _getGroupedConstraints: function() {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
                var r = this.constraints[i].priority;
                t[r] || e.push(t[r] = []), t[r].push(this.constraints[i])
            }
            return e.sort(function(e, t) {
                return t[0].priority - e[0].priority
            }), e
        }
    };
    var b = _,
        F = function() {
            this.__class__ = "FieldMultiple"
        };
    F.prototype = {
        addElement: function(e) {
            return this.$elements.push(e), this
        },
        _refreshConstraints: function() {
            var t;
            if (this.constraints = [], "SELECT" === this.element.nodeName) return this.actualizeOptions()._bindConstraints(), this;
            for (var i = 0; i < this.$elements.length; i++)
                if (e("html").has(this.$elements[i]).length) {
                    t = this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;
                    for (var r = 0; r < t.length; r++) this.addConstraint(t[r].name, t[r].requirements, t[r].priority, t[r].isDomConstraint)
                } else this.$elements.splice(i, 1);
            return this
        },
        getValue: function() {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if (void 0 !== this.options.value) return this.options.value;
            if ("INPUT" === this.element.nodeName) {
                var t = a.getType(this.element);
                if ("radio" === t) return this._findRelated().filter(":checked").val() || "";
                if ("checkbox" === t) {
                    var i = [];
                    return this._findRelated().filter(":checked").each(function() {
                        i.push(e(this).val())
                    }), i
                }
            }
            return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function() {
            return this.$elements = [this.$element], this
        }
    };
    var C = function(t, i, r) {
        this.element = t, this.$element = e(t);
        var n = this.$element.data("Parsley");
        if (n) return void 0 !== r && n.parent === window.Parsley && (n.parent = r, n._resetOptions(n.options)), "object" == typeof i && _extends(n.options, i), n;
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if (void 0 !== r && "Form" !== r.__class__) throw new Error("Parent instance must be a Form instance");
        return this.parent = r || window.Parsley, this.init(i)
    };
    C.prototype = {
        init: function(e) {
            return this.__class__ = "Parsley", this.__version__ = "2.8.1", this.__id__ = a.generateID(), this._resetOptions(e), "FORM" === this.element.nodeName || a.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
        },
        isMultiple: function() {
            var e = a.getType(this.element);
            return "radio" === e || "checkbox" === e || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")
        },
        handleMultiple: function() {
            var t, i, r = this;
            if (this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id"), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), t && e('input[name="' + t + '"]').each(function(e, t) {
                var i = a.getType(t);
                "radio" !== i && "checkbox" !== i || t.setAttribute(r.options.namespace + "multiple", r.options.multiple)
            });
            for (var n = this._findRelated(), s = 0; s < n.length; s++)
                if (i = e(n.get(s)).data("Parsley"), void 0 !== i) {
                    this.$element.data("FieldMultiple") || i.addElement(this.$element);
                    break
                }
            return this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple")
        },
        bind: function(t, i) {
            var r;
            switch (t) {
                case "parsleyForm":
                    r = e.extend(new g(this.element, this.domOptions, this.options), new l, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    r = e.extend(new b(this.element, this.domOptions, this.options, this.parent), new l, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    r = e.extend(new b(this.element, this.domOptions, this.options, this.parent), new F, new l, window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(t + "is not a supported Parsley type")
            }
            return this.options.multiple && a.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple), void 0 !== i ? (this.$element.data("FieldMultiple", r), r) : (this.$element.data("Parsley", r), r._actualizeTriggers(), r._trigger("init"), r)
        }
    };
    var A = e.fn.jquery.split(".");
    if (parseInt(A[0]) <= 1 && parseInt(A[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    A.forEach || a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var E = _extends(new l, {
        element: document,
        $element: e(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: C,
        version: "2.8.1"
    });
    _extends(b.prototype, m.Field, l.prototype), _extends(g.prototype, m.Form, l.prototype), _extends(C.prototype, l.prototype), e.fn.parsley = e.fn.psly = function(t) {
        if (this.length > 1) {
            var i = [];
            return this.each(function() {
                i.push(e(this).parsley(t))
            }), i
        }
        if (0 != this.length) return new C(this[0], t)
    }, void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}), E.options = _extends(a.objectCreate(o), window.ParsleyConfig), window.ParsleyConfig = E.options, window.Parsley = window.psly = E, E.Utils = a, window.ParsleyUtils = {}, e.each(a, function(e, t) {
        "function" == typeof t && (window.ParsleyUtils[e] = function() {
            return a.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), a[e].apply(a, arguments)
        })
    });
    var x = window.Parsley._validatorRegistry = new d(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {}, e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function(e, t) {
        window.Parsley[t] = function() {
            return x[t].apply(x, arguments)
        }, window.ParsleyValidator[t] = function() {
            var e;
            return a.warnOnce("Accessing the method '" + t + "' through Validator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments)
        }
    }), window.Parsley.UI = m, window.ParsleyUI = {
        removeError: function(e, t, i) {
            var r = !0 !== i;
            return a.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {
                updateClass: r
            })
        },
        getErrorsMessages: function(e) {
            return a.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
        }
    }, e.each("addError updateError".split(" "), function(e, t) {
        window.ParsleyUI[t] = function(e, i, r, n, s) {
            var o = !0 !== s;
            return a.warnOnce("Accessing UI is deprecated. Call '" + t + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[t](i, {
                message: r,
                assert: n,
                updateClass: o
            })
        }
    }), !1 !== window.ParsleyConfig.autoBind && e(function() {
        e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
    });
    var $ = e({}),
        P = function() {
            a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
        },
        V = "parsley:";
    return e.listen = function(e, r) {
        var n;
        if (P(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (n = arguments[1], r = arguments[2]), "function" != typeof r) throw new Error("Wrong parameters");
        window.Parsley.on(i(e), t(r, n))
    }, e.listenTo = function(e, r, n) {
        if (P(), !(e instanceof b || e instanceof g)) throw new Error("Must give Parsley instance");
        if ("string" != typeof r || "function" != typeof n) throw new Error("Wrong parameters");
        e.on(i(r), t(n))
    }, e.unsubscribe = function(e, t) {
        if (P(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
        window.Parsley.off(i(e), t.parsleyAdaptedCallback)
    }, e.unsubscribeTo = function(e, t) {
        if (P(), !(e instanceof b || e instanceof g)) throw new Error("Must give Parsley instance");
        e.off(i(t))
    }, e.unsubscribeAll = function(t) {
        P(), window.Parsley.off(i(t)), e("form,input,textarea,select").each(function() {
            var r = e(this).data("Parsley");
            r && r.off(i(t))
        })
    }, e.emit = function(e, t) {
        var r;
        P();
        var n = t instanceof b || t instanceof g,
            s = Array.prototype.slice.call(arguments, n ? 2 : 1);
        s.unshift(i(e)), n || (t = window.Parsley), (r = t).trigger.apply(r, _toConsumableArray(s))
    }, e.extend(!0, E, {
        asyncValidators: {
            default: {
                fn: function(e) {
                    return e.status >= 200 && e.status < 300
                },
                url: !1
            },
            reverse: {
                fn: function(e) {
                    return e.status < 200 || e.status >= 300
                },
                url: !1
            }
        },
        addAsyncValidator: function(e, t, i, r) {
            return E.asyncValidators[e] = {
                fn: t,
                url: i || !1,
                options: r || {}
            }, this
        }
    }), E.addValidator("remote", {
        requirementType: {
            "": "string",
            validator: "string",
            reverse: "boolean",
            options: "object"
        },
        validateString: function(t, i, r, n) {
            var s, a, o = {},
                l = r.validator || (!0 === r.reverse ? "reverse" : "default");
            if (void 0 === E.asyncValidators[l]) throw new Error("Calling an undefined async validator: `" + l + "`");
            (i = E.asyncValidators[l].url || i).indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(t)) : o[n.element.getAttribute("name") || n.element.getAttribute("id")] = t;
            var u = e.extend(!0, r.options || {}, E.asyncValidators[l].options);
            s = e.extend(!0, {}, {
                url: i,
                data: o,
                type: "GET"
            }, u), n.trigger("field:ajaxoptions", n, s), a = e.param(s), void 0 === E._remoteCache && (E._remoteCache = {});
            var d = E._remoteCache[a] = E._remoteCache[a] || e.ajax(s),
                h = function() {
                    var t = E.asyncValidators[l].fn.call(n, d, i, r);
                    return t || (t = e.Deferred().reject()), e.when(t)
                };
            return d.then(h, h)
        },
        priority: -1
    }), E.on("form:submit", function() {
        E._remoteCache = {}
    }), l.prototype.addAsyncValidator = function() {
        return a.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), E.addAsyncValidator.apply(E, arguments)
    }, E.addMessages("en", {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }), E.setLocale("en"), (new function() {
        var t = this,
            i = window || global;
        _extends(this, {
            isNativeEvent: function(e) {
                return e.originalEvent && !1 !== e.originalEvent.isTrusted
            },
            fakeInputEvent: function(i) {
                t.isNativeEvent(i) && e(i.target).trigger("input")
            },
            misbehaves: function(i) {
                t.isNativeEvent(i) && (t.behavesOk(i), e(document).on("change.inputevent", i.data.selector, t.fakeInputEvent), t.fakeInputEvent(i))
            },
            behavesOk: function(i) {
                t.isNativeEvent(i) && e(document).off("input.inputevent", i.data.selector, t.behavesOk).off("change.inputevent", i.data.selector, t.misbehaves)
            },
            install: function() {
                if (!i.inputEventPatched) {
                    i.inputEventPatched = "0.0.3";
                    for (var r = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], n = 0; n < r.length; n++) {
                        var s = r[n];
                        e(document).on("input.inputevent", s, {
                            selector: s
                        }, t.behavesOk).on("change.inputevent", s, {
                            selector: s
                        }, t.misbehaves)
                    }
                }
            },
            uninstall: function() {
                delete i.inputEventPatched, e(document).off(".inputevent")
            }
        })
    }).install(), E
}), Parsley.addMessages("ja", {
    defaultMessage: "無効な値です。",
    type: {
        email: "有効なメールアドレスを入力してください。",
        url: "有効なURLを入力してください。",
        number: "数値を入力してください。",
        integer: "整数を入力してください。",
        digits: "数字を入力してください。",
        alphanum: "英数字を入力してください。"
    },
    notblank: "この値を入力してください",
    required: "この値は必須です。",
    pattern: "この値は無効です。",
    min: "%s 以上の値にしてください。",
    max: "%s 以下の値にしてください。",
    range: "%s から %s の値にしてください。",
    minlength: "%s 文字以上で入力してください。",
    maxlength: "%s 文字以下で入力してください。",
    length: "%s から %s 文字の間で入力してください。",
    mincheck: "%s 個以上選択してください。",
    maxcheck: "%s 個以下選択してください。",
    check: "%s から %s 個選択してください。",
    equalto: "値が違います。"
}), Parsley.setLocale("ja");