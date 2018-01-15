/*****************************************************************************/
/* Copyright (c) 2013 Autodesk, Inc.                                         */
/* All rights reserved.                                                      */
/*                                                                           */
/* These coded instructions, statements, and computer programs contain       */
/* unpublished proprietary information written by Autodesk, Inc., and are    */
/* protected by Federal copyright law. They may not be disclosed to third    */
/* parties or copied or duplicated in any form, in whole or in part, without */
/* the prior written consent of Autodesk, Inc.                               */
/*****************************************************************************/

/**
* @file
* @author  Kangyao Ren
* @version  1.0
* @date     Aug 19, 2014
* @description  This file is part of Homestyler Web new floorplan editor.
*
*
*/
/*** how to use this widget:
    var callback = function (clickedButtonIndex) {
        // @clickedButtonIndex, -1 = close
    };
    var msgBox = MessageBox.create("hello world !",["OK","Cancel"],0,{title:"test",disablemask:true});
    msgBox.show(callback);

***/
require('./msgBox.css');

const MessageBox = function(){};

MessageBox.create = function(msg,buttons,defaultbtnIndex,additional){
    var obj = new MessageBox();
    obj._init(msg,buttons,defaultbtnIndex,additional);
    return obj;
};

MessageBox.prototype._init = function(msg,buttons,defaultbtnIndex,additional){
    this.msg = msg || "";
    this.buttons = buttons || [];
    this.defaultbtnIndex = defaultbtnIndex || 0;
    additional = additional || {};
    this.title = additional.title || "";
    this.disablemask = additional.disablemask || false;
    this.contentsSelectable = additional.contentsSelectable || false;
    this.dontShowAgain = additional.dontShowAgain || false;
    this.tabindex = 0;
};

MessageBox.prototype.show = (function () {
    var createHtml = function (msg, buttons, defaultbtnIndex, title, contentsSelectable, dontShowAgain) {
        var buttonels = "";
        for(var i = 0, length = buttons.length ; i < length; i++){
            if(i === defaultbtnIndex){
                buttonels+= '<button tabindex="'+i+'" class="hsw-btn btn-primary msgboxactive">'+buttons[i]+'</button>';
            }else{
                buttonels+= '<button tabindex="'+i+'" class="hsw-btn btn-default msgboxdefault">'+buttons[i]+'</button>';
            }
        }
        var titleel = '<h2 class="title">'+title+'</h2>';
        // var dontShowTxt = ResourceManager.getString('popup_confirm_dont_show_again');
        var dontShowTxt = 'no more';

        var msgContentClasses = "";
        if (contentsSelectable) {
            msgContentClasses += " selectable";
        }
        var html = '<div id="MsgBoxWrapper" class="MsgBox">'
                        +'<div id="MsgBoxOverLay" class="MsgBoxOverLay"></div>'
                        +'<div class="MsgBoxMain">'
                        +'<div class="MsgBoxHeader">'
                        + titleel
                        +'<span class="closebtn">'
                        +        '<a href="javascript:void(0);" id="closemsgboxbtn">X</a>'
                        +    '</span>'
                        +'</div>'
                        +'<div class="MsgBoxContent">'
                        +    '<p class="' + msgContentClasses + '">' + msg + '</p>'
                        +'</div>'
                        +'<div class="MsgBoxCheckBox"><div id="dontShowInput"><input type="checkbox" id="dontShowChkBox"><label for="dontShowChkBox">'
                        + dontShowTxt
                        +'</label></div></div>'
                        +'<div class="MsgBoxBtns">'
                        + buttonels
                        +'</div>'
                        +'</div>'
                    +'</div>';
        var tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        var element = document.getElementById("MsgBoxWrapper");
        if (typeof(element) != 'undefined' && element != null){
          document.getElementById("MsgBoxWrapper").remove();
        }
        document.getElementsByTagName('body')[0].appendChild(tempElement.firstChild);
        if (!dontShowAgain) {
            $('.MsgBoxCheckBox').addClass('invisible');
        }
    };

    var close = function (callback, clickedBtnIndex, dontWantShowAgain) {
        if (!document.getElementById('MsgBoxWrapper')) {
            return;
        }
        removeEvents(document.body,"keydown",tabhandler);
        document.getElementById('MsgBoxWrapper').remove();

        if (callback) {
            callback(clickedBtnIndex, dontWantShowAgain);
        }

    };

    var tabhandler = function(e){
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 9 && document.getElementById("MsgBoxWrapper")) {
           var tab = document.querySelectorAll("#MsgBoxWrapper button");
            tab[this.tabindex].focus();
            if(this.tabindex == tab.length -1){
                this.tabindex = 0;
            }
            else{
                this.tabindex ++;
            }
            e.stopPropagation();
            e.preventDefault();
        }
    };
    var addEvents = function (element, eventname, funct) {
        if (!element) {
            return;
        }
        if (element.attachEvent)
            return element.attachEvent('on'+eventname, funct);
        else
            return element.addEventListener(eventname, funct, false);
    };
    var removeEvents = function(element, eventname, handler){
        if (!element) {
            return;
        }
        if (element.removeEventListener) {                   // For all major browsers, except IE 8 and earlier
            element.removeEventListener(eventname, handler, false);
        } else if (element.detachEvent) {                    // For IE 8 and earlier versions
            element.detachEvent("on"+eventname, handler);
        }
    };

    var dontWantToShowAgain = function() {
        var dontWantShowAgain = $('#dontShowChkBox') ? $('#dontShowChkBox').is(':checked') : false;
        return dontWantShowAgain;
    };

    return function (callback) {
        // for record clicked button, default is -1 - means no button clicked
        var clickedBtnIndex = -1;

        createHtml(this.msg, this.buttons, this.defaultbtnIndex, this.title, this.contentsSelectable, this.dontShowAgain);

        // hookup events
        addEvents(document.getElementById("closemsgboxbtn"),"click",function(event){
            close(callback, clickedBtnIndex, dontWantToShowAgain());
            event.stopPropagation();
        });
        if(!this.disablemask){
            addEvents(document.getElementById("MsgBoxOverLay"),"click",function(event){
                close(callback, clickedBtnIndex, dontWantToShowAgain());
                event.stopPropagation();
            });
        }
        addEvents(document.getElementsByClassName("msgboxactive")[0],"click",function(event){
            clickedBtnIndex = 0;
            close(callback, clickedBtnIndex, dontWantToShowAgain());
            event.stopPropagation();
        });

        addEvents(document.body,"keydown", tabhandler);

        addEvents(document.getElementsByClassName("msgboxdefault")[0],"click",function(event){
            clickedBtnIndex = 1;
            close(callback, clickedBtnIndex, dontWantToShowAgain());
            event.stopPropagation();
        });
    };
})();

export default MessageBox;
