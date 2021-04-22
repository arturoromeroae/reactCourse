function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

var FocusController = /*#__PURE__*/ function() {
    "use strict";

    function FocusController() {
        _classCallCheck(this, FocusController);

        this.mouseDown = false;
        this.prevElementFocus = null;
        this.blockClass = "has-dropdown";
        this.arrBlockClass = ["js-nearest-store-toggle"];
        this.currentBlock = null;
        this.currentBlockLastChild = null;
        this.currentBlockFirstChild = null;
        this.tempEval = null;
    }

    _createClass(FocusController, [{
        key: "detectJsElements",
        value: function detectJsElements(container) {
            /*
            var _this = this;

            console.log("-- detectJsElements");
            var jsClasses = "js-";
            var elmts = document.querySelectorAll(container);
            elmts.forEach(function(el) {
                el.addEventListener('mousedown', function(event) {
                    _this.mouseDown = true;

                    if (el == _this.prevElementFocus) {
                        el.blur();
                    }
                });
                el.addEventListener('mouseup', function(event) {
                    _this.prevElementFocus = el;
                    _this.mouseDown = false;

                    if (el == _this.prevElementFocus) {
                        el.blur();
                    }
                });
                el.addEventListener('focus', function(event) {
                    if (_this.mouseDown) {
                        event.target.blur();
                    }
                });
                el.addEventListener('click', _this.handleClick.bind(_this));
            });
            */
            document.addEventListener('keydown', this.handleKeyDown.bind(this));
            document.addEventListener('keyup', this.handleKeyUp.bind(this));
        }
    }, {
        key: "initBlockFocus",
        value: function initBlockFocus(el, currentBlock) {
            console.log("-- initBlockFocus");
            var parent = el.parentNode == undefined ? jQuery(el).parent() : el.parentNode;

            if (!jQuery(parent).hasClass('block-active')) {
                //jQuery(parent).addClass('block-active');
                this.currentBlock = currentBlock == undefined ? parent : currentBlock;
                var childList = jQuery(parent).find("select,input,a,button");
                var lastChild = childList[childList.length - 1];
                this.currentBlockLastChild = lastChild;
                this.currentBlockFirstChild = null;
                var temp_ = "";
                jQuery(childList).each(function(index, item) {
                    if (jQuery(el)[0] != jQuery(item)[0] && temp_ == "") {
                        temp_ = item;
                    }
                });
                this.currentBlockFirstChild = temp_; //jQuery(this.currentBlockFirstChild).tabIndex = 0;
                //jQuery(this.currentBlockFirstChild).attr('tabindex', 0);

                jQuery(this.currentBlockFirstChild).trigger("focus");
            }
        }
    }, {
        key: "loadCurrentBlock",
        value: function loadCurrentBlock() {}
    }, {
        key: "clearCurrenBlock",
        value: function clearCurrenBlock() {
            this.currentBlockFirstChild = null;
            this.currentBlockLastChild = null;
            this.currentBlock = null;
        }
    }, {
        key: "handleClick",
        value: function handleClick(event) {
            console.log("-- handleClick");
            var el = event.currentTarget;

            this.processAction(el);
            //jQuery(el).parent()[0].blur();
            el.blur(); //console.log(el.classList);
        }
    }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
            console.log("-- handleKeyDown");
            var code = event.keyCode ? event.keyCode : event.which;

            if (code == 9) {
                if (jQuery(".block-active").length) {
                    var el = document.activeElement;
                    this.handleBlockTabs(event, el);
                }
            }

            if (code == 9 && this.prevElementFocus != null) { // tab pressed 
                //this.prevElementFocus.focus();
                //this.prevElementFocus = null;
            }
        }
    }, {
        key: "handleKeyUp",
        value: function handleKeyUp(event) {
            console.log("-- handleKeyUp");
            var code = event.keyCode ? event.keyCode : event.which;

            if (code == 9 && jQuery(".block-active").length == 0) { // tab pressed
                //this.prevElementFocus = document.activeElement;
                //let el = event.currentTarget;
            }

            if (code == 13) {
                // enter pressed
                var el = document.activeElement; //console.log(el);

                this.processAction(el);
            }

            if (code === 27) {
                //ESCAPE button pressed
                this.processCancel();
            }
        }
    }, {
        key: "handleBlockTabs",
        value: function handleBlockTabs(event, el) {
            console.log("-- handleBlockTabs"); //console.log(event);

            var target = jQuery(event.target);
            this.tempEval = target;

            if (event.shiftKey) {
                if (target[0] == this.currentBlockFirstChild) {
                    event.preventDefault();
                    this.currentBlockLastChild.focus(); //this.currentBlockFirstChild.focus();
                }
            }

            if (jQuery(this.currentBlock).find(target).length == 0) {
                event.preventDefault();
                this.currentBlockFirstChild.focus();
            }

            if (el == this.currentBlockLastChild) {
                if (!event.shiftKey) {
                    //console.log("-- go to first");
                    event.preventDefault();
                    this.currentBlockFirstChild.focus();
                }
            }
        }
    }, {
        key: "processAction",
        value: function processAction(el) {
            var _this2 = this;

            console.log("-- processAction");

            if (!jQuery(el).parent().hasClass('block-active')) {
                if (el.classList.contains(this.blockClass)) {
                    this.initBlockFocus(el);
                }

                this.arrBlockClass.forEach(function(itemClass) {
                    if (el.classList.contains(itemClass)) {
                        _this2.initBlockFocus(el);
                    }
                });
            }
        }
    }, {
        key: "processCancel",
        value: function processCancel() {
            console.log("-- processCancel");

            if (this.currentBlock != null) {
                var parent = jQuery(this.currentBlock).parent();
                console.log(parent); //document.activeElement.blur();

                if (jQuery('.is-open').length) {
                    console.log("is-open");
                    var container = jQuery('.is-open');
                    console.log(container);
                    var closeButton = container.find("[class$=__close],.js-nearest-store-close");
                    console.log(closeButton);

                    if (closeButton.length != 0) {
                        closeButton.trigger('click');
                    } else {
                        parent.find('.is-open').removeClass('is-open');
                        parent.find('.is-active').removeClass('is-active');
                        parent.find('.block-active').removeClass('block-active');
                    }
                } //this.clearCurrenBlock();

            }
        }
    }, {
        key: "processShowModal",
        value: function processShowModal(el) {
            console.log("-- processShowModal");
            var modal = jQuery('.is-open');

            if (el == null) {
                previousActiveElement = document.activeElement;
            } else {
                previousActiveElement = el;
            }

            jQuery("body > *").each(function(index, value) {
                if (value !== modal[0]) {
                    value.inert = true;
                }
            });
        }
    }, {
        key: "processCloseModal",
        value: function processCloseModal() {
            console.log("-- processCloseModal");
            var modal = jQuery('.is-open');
            jQuery("body > *").each(function(index, value) {
                if (value !== modal[0]) {
                    value.inert = false;
                }
            });
            jQuery(modal).removeClass('is-open');
            jQuery(this.prevElementFocus).focus();
        }
    }]);

    return FocusController;
}();
//# sourceMappingURL=focuscontroller.js.map
