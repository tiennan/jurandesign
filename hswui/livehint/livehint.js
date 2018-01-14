/*****************************************************************************/
/* Copyright (c) 2014 Autodesk, Inc.                                         */
/* All rights reserved.                                                      */
/*                                                                           */
/* These coded instructions, statements, and computer programs contain       */
/* unpublished proprietary information written by Autodesk, Inc., and are    */
/* protected by Federal copyright law. They may not be disclosed to third    */
/* parties or copied or duplicated in any form, in whole or in part, without */
/* the prior written consent of Autodesk, Inc.                               */
/*****************************************************************************/


/***
    This widget display a hint message on the top of canvas and fade out
    in a given time.

    how to use this widget:
    LiveHint.show("Hello LiveHint! <a></a>", 6000, callback, {
    status:"warning",
    canclose:true,
    append:"<span class='action'>Re-open</span>",
    effect: "shake"
    });
***/
import './res/livehint.css';

const LiveHint = {
    _defaultClassName: "liveHintLine",
    _showtimer: undefined,
    _hidetimer: undefined,
    _element: undefined,
    _hintDuration: undefined,
    _sildeDuration: 600,
    _offsetTopShow: function () {
        // if (!hsw.core.Config.IS_TOOLBAR_SHOW_TOOLTIP) return 107;
        return 120;
    }(),
    _offsetTopHide: -100,
    // _app: undefined,
    statusEnum: { loading: "loading", warning: "warning", completed: "completed", canops: "canops" },

    _init: function () {
        var html = '<div class="liveHint noprint">'
            + '<div class="icon"></div>'
            + '<div class="msg"><p></p></div>'
            + '</div>';
        this._element = document.createElement('div');
        this._element.className = LiveHint._defaultClassName;
        this._element.innerHTML = html;
        if (!document.body.contains(this._element)) {
            document.body.appendChild(this._element);
        }
        // this._app = hsw.app.Base.getApp();
    },

    _show: function (message) {
        // update text
        this.updateText(message);
        // if (this._app.appParams.mode === hsw.app.setting.ModeTypeEnum.iframe) {
        //     this._offsetTopShow = 46;
        // }
        this._element.style.top = this._offsetTopShow + "px";
    },
    _setduration: function (duration) {
        duration = duration + "ms" || "600ms"
        this._element.style.cssText = "-webkit-transition-duration: " + duration + ";";
        this._element.style.cssText += "-moz-transition-duration: " + duration + ";";
        this._element.style.cssText += "-o-transition-duration: " + duration + ";";
        this._element.style.cssText += "-ms-transition-duration: " + duration + ";";
        this._element.style.cssText += "transition-duration: " + duration + ";";

    },
    _hide: function (force) {
        if (!this._element) {
            return;
        }
        clearTimeout(this._hidetimer);
        clearTimeout(this._showtimer);
        clearTimeout(this._hintDuration);
        this._hintDuration = undefined;
        this._showtimer = undefined;
        //force hide
        // animate
        var self = this;
        this._hidetimer = setTimeout(function () {
            if (force) {
                self._setduration(0);
            } else {
                self._setduration();
            }
            self._element.style.top = self._offsetTopHide + "px";
        });
    },
    _isShown: function () {
        if (!this._element) return false;
        return parseInt(this._element.style.top) >= 0;
    },
    show: function (message, duration, callback, options) {
        if (!this._element) this._init();
        this._hide(true); // if Livehint alreay shown, force it hide.

        var self = this, status, effect, canclose, appendtxt;
        this._showtimer = setTimeout(function () {
            if (options) {
                status = options.status;
                canclose = options.canclose;
                effect = options.effect;
                appendtxt = options.append;
            }
            if (canclose) {
                self._addclosebtn();
            } else {
                self._removeclosebtn();
            }
            if (status) {
                self.updateStatus(status);
            } else {
                self.updateStatus("default");
            }
            if (appendtxt) {
                message += appendtxt;
            }
            if (effect) {
                self._setduration(0);
            } else {
                self._setduration();
            }
            self._show(message);
            self.bindDefaultAction(callback);

            if (effect && effect == "shake") {
                self._shake();
            }
        }, 10);

        if (duration != undefined) {
            self._hintDuration = setTimeout(function () {
                self._hide();
            }, duration);
        }
    },
    bindDefaultAction: function (callback) {
        var self = this;
        if (!this._element) {
            return;
        }
        var actionitem = this._element.querySelectorAll("span.action");
        if (actionitem && actionitem.length > 0 && callback) {
            actionitem[0].addEventListener("click", callback, false);
        }
        var closebtn = this._element.querySelector("span.remove");
        if (closebtn) {
            closebtn.addEventListener("click", function () {
                self.hide();
            }, false);
        }
    },
    isStatus: function (status) {
        if (!status) return false;
        var element = this._element;
        if (element.classList.contains(status)) {
            return true;
        }
        return false;
    },
    updateStatus: function (status) {
        if (!status) return;
        var defaultClassName = LiveHint._defaultClassName;
        var element = this._element;
        element.querySelector(".icon").innerHTML = "";
        switch (status) {
            case LiveHint.statusEnum.loading:
                element.className = defaultClassName + " " + LiveHint.statusEnum.loading;
                element.querySelector(".icon").innerHTML = "<span></span>";
                break;
            case LiveHint.statusEnum.warning:
                element.className = defaultClassName + " " + LiveHint.statusEnum.warning;
                break;
            case LiveHint.statusEnum.completed:
                element.className = defaultClassName + " " + LiveHint.statusEnum.completed;
                break;
            case LiveHint.statusEnum.canops:
                element.className = defaultClassName + " " + LiveHint.statusEnum.canops;
                break;
            default:
                element.className = defaultClassName;
                break;
        }
    },
    _addclosebtn: function () {
        if (!this._element.querySelector("span.remove")) {
            this._element.querySelector(".msg").innerHTML += '<span class="remove"></span>';
        }
    },
    _removeclosebtn: function () {
        if (this._element.querySelector("span.remove")) {
            this._element.querySelector(".msg").innerHTML = '<p></p>';
        }
    },
    updateText: function (txt) {
        this._element.querySelector(".msg p").innerHTML = txt;
    },
    hide: function () {
        this._hide();
    },
    _shake: function () {
        if (!this._element) {
            return;
        }
        var self = this;
        setTimeout(function () {
            self._element.classList.remove("shake");
            self._element.classList.add("shake");
        });// after show animation ,run shake effect
    }
}

export default LiveHint;
