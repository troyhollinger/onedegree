/* angular-load.js / v0.2.0 / (c) 2014 Uri Shaked / MIT Licence */

(function () {
	'use strict';

	angular.module('angularLoad', [])
		.service('angularLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {

			/**
			 * Dynamically loads the given script
			 * @param src The url of the script to load dynamically
			 * @returns {*} Promise that will be resolved once the script has been loaded.
			 */
			this.loadScript = function (src) {
				var deferred = $q.defer();
				var script = $document[0].createElement('script');
				script.onload = script.onreadystatechange = function (e) {
					$timeout(function () {
						deferred.resolve(e);
					});
				};
				script.onerror = function (e) {
					$timeout(function () {
						deferred.reject(e);
					});
				};
				script.src = src;
				$document[0].body.appendChild(script);
				return deferred.promise;
			};

			/**
			 * Dynamically loads the given CSS file
			 * @param href The url of the CSS to load dynamically
			 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
			 */
			this.loadCSS = function (href) {
				var deferred = $q.defer();
				var style = $document[0].createElement('link');
				style.rel = 'stylesheet';
				style.type = 'text/css';
				style.href = href;
				style.onload = style.onreadystatechange = function (e) {
					$timeout(function () {
						deferred.resolve(e);
					});
				};
				style.onerror = function (e) {
					$timeout(function () {
						deferred.reject(e);
					});
				};
				$document[0].head.appendChild(style);
				return deferred.promise;
			};
		}]);
})();

/*!
 * Angular Datepicker v0.2.4
 *
 * Released by 720kb.net under the MIT license
 * www.opensource.org/licenses/MIT
 *
 * 2015-01-31
 */


!function(a){"use strict";a.module("720kb.datepicker",[]).directive("datepicker",["$window","$compile","$locale","$filter",function(b,c,d,e){var f=864e5;return{restrict:"AEC",scope:{dateSet:"@",dateMinLimit:"@",dateMaxLimit:"@"},link:function(g,h,i){var j,k,l,m,n=i.selector,o=a.element(n?h[0].querySelector("."+n):h[0].children[0]),p='<b class="datepicker-default-button">&lang;</b>',q='<b class="datepicker-default-button">&rang;</b>',r=i.buttonPrev||p,s=i.buttonNext||q,t=i.dateFormat,u=new Date,v=!1,w=!1,x=d.DATETIME_FORMATS,y='<div class="_720kb-datepicker-calendar" ng-blur="hideCalendar()"><div class="_720kb-datepicker-calendar-header" ng-hide="isMobile()"><div class="_720kb-datepicker-calendar-header-left"><a href="javascript:void(0)" ng-click="prevMonth()">'+r+'</a></div><div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-calendar-month">{{month}} <a href="javascript:void(0)" ng-click="showYearsPagination = !showYearsPagination"><span>{{year}} <i ng-if="!showYearsPagination">&dtrif;</i> <i ng-if="showYearsPagination">&urtri;</i> </span> </a></div><div class="_720kb-datepicker-calendar-header-right"><a href="javascript:void(0)" ng-click="nextMonth()">'+s+'</a></div></div><div class="_720kb-datepicker-calendar-header" ng-show="isMobile()"><div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month"><select ng-model="month" ng-change="selectedMonthHandle(month)"><option ng-repeat="item in months" ng-selected="month === item" ng-disabled=\'!isSelectableMaxDate(item + " " + day + ", " + year) || !isSelectableMinDate(item + " " + day + ", " + year)\' ng-value="item">{{item}}</option></select></div></div><div class="_720kb-datepicker-calendar-header" ng-show="isMobile()"><div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month"><select ng-model="mobileYear" ng-change="setNewYear(mobileYear)"><option ng-repeat="item in paginationYears" ng-selected="year === item" ng-value="item" ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)">{{item}}</option></select></div></div><div class="_720kb-datepicker-calendar-header" ng-show="showYearsPagination"><div class="_720kb-datepicker-calendar-years-pagination"><a ng-class="{\'_720kb-datepicker-active\': y === year, \'_720kb-datepicker-disabled\': !isSelectableMaxYear(y) || !isSelectableMinYear(y)}" href="javascript:void(0)" ng-click="setNewYear(y)" ng-repeat="y in paginationYears">{{y}}</a></div><div class="_720kb-datepicker-calendar-years-pagination-pages"><a href="javascript:void(0)" ng-click="paginateYears(paginationYears[0])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsPrevDisabled}">'+r+'</a><a href="javascript:void(0)" ng-click="paginateYears(paginationYears[paginationYears.length -1 ])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsNextDisabled}">'+s+'</a></div></div><div class="_720kb-datepicker-calendar-days-header"><div ng-repeat="d in daysInString"> {{d}} </div> </div><div class="_720kb-datepicker-calendar-body"><a href="javascript:void(0)" ng-repeat="px in prevMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">{{px}}</a><a href="javascript:void(0)" ng-repeat="item in days" ng-click="setDatepickerDay(item)" ng-class="{\'_720kb-datepicker-active\': day === item, \'_720kb-datepicker-disabled\': !isSelectableMinDate(year + \'/\' + monthNumber + \'/\' + item ) || !isSelectableMaxDate(year + \'/\' + monthNumber + \'/\' + item)}" class="_720kb-datepicker-calendar-day">{{item}}</a><a href="javascript:void(0)" ng-repeat="nx in nextMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">{{nx}}</a></div></div></div>';g.$watch("dateSet",function(a){a&&(u=new Date(a),g.month=e("date")(u,"MMMM"),g.monthNumber=Number(e("date")(u,"MM")),g.day=Number(e("date")(u,"dd")),g.year=Number(e("date")(u,"yyyy")))}),g.$watch("dateMinLimit",function(a){a&&(k=a)}),g.$watch("dateMaxLimit",function(a){a&&(l=a)}),g.month=e("date")(u,"MMMM"),g.monthNumber=Number(e("date")(u,"MM")),g.day=Number(e("date")(u,"dd")),g.year=Number(e("date")(u,"yyyy")),g.months=x.MONTH,g.daysInString=["0","1","2","3","4","5","6"].map(function(a){return e("date")(new Date(new Date("06/08/2014").valueOf()+f*a),"EEE")}),o.after(c(a.element(y))(g)),j=h[0].querySelector("._720kb-datepicker-calendar"),o.bind("focus click",function(){w=!0,g.showCalendar()}),o.bind("focusout",function(){w=!1}),a.element(j).bind("mouseenter",function(){v=!0}),a.element(j).bind("mouseleave",function(){v=!1}),a.element(j).bind("focusin",function(){v=!0}),a.element(b).bind("click focus",function(){v||w||g.hideCalendar()}),g.isMobile=function(){return navigator.userAgent&&(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))?!0:void 0},g.resetToMinDate=function(){g.month=e("date")(new Date(k),"MMMM"),g.monthNumber=Number(e("date")(new Date(k),"MM")),g.day=Number(e("date")(new Date(k),"dd")),g.year=Number(e("date")(new Date(k),"yyyy"))},g.resetToMaxDate=function(){g.month=e("date")(new Date(l),"MMMM"),g.monthNumber=Number(e("date")(new Date(l),"MM")),g.day=Number(e("date")(new Date(l),"dd")),g.year=Number(e("date")(new Date(l),"yyyy"))},g.nextMonth=function(){12===g.monthNumber?(g.monthNumber=1,g.nextYear()):g.monthNumber+=1,g.month=e("date")(new Date(g.year+"/"+g.monthNumber+"/01"),"MMMM"),g.setDaysInMonth(g.monthNumber,g.year),l&&(g.isSelectableMaxDate(g.year+"/"+g.monthNumber+"/"+g.day)||g.resetToMaxDate()),g.day=void 0},g.selectedMonthHandle=function(a){g.monthNumber=Number(e("date")(new Date("01 "+a+" 2000"),"MM")),g.setDaysInMonth(g.monthNumber,g.year),g.setInputValue()},g.prevMonth=function(){1===g.monthNumber?(g.monthNumber=12,g.prevYear()):g.monthNumber-=1,g.month=e("date")(new Date(g.year+"/"+g.monthNumber+"/01"),"MMMM"),g.setDaysInMonth(g.monthNumber,g.year),k&&(g.isSelectableMinDate(g.year+"/"+g.monthNumber+"/"+g.day)||g.resetToMinDate()),g.day=void 0},g.setNewYear=function(a){if(g.day=void 0,l&&g.year<Number(a)){if(!g.isSelectableMaxYear(a))return}else if(k&&g.year>Number(a)&&!g.isSelectableMinYear(a))return;g.year=Number(a),g.setDaysInMonth(g.monthNumber,g.year),g.paginateYears(a)},g.nextYear=function(){g.year=Number(g.year)+1},g.prevYear=function(){g.year=Number(g.year)-1},g.setInputValue=function(){if(!g.isSelectableMinDate(g.year+"/"+g.monthNumber+"/"+g.day)||!g.isSelectableMaxDate(g.year+"/"+g.monthNumber+"/"+g.day))return!1;var a=new Date(g.year+"/"+g.monthNumber+"/"+g.day);o.val(i.dateFormat?e("date")(a,t):a),o.triggerHandler("input"),o.triggerHandler("change")},g.showCalendar=function(){m=b.document.getElementsByClassName("_720kb-datepicker-calendar"),a.forEach(m,function(a,b){m[b].classList.remove("_720kb-datepicker-open")}),j.classList.add("_720kb-datepicker-open")},g.hideCalendar=function(){j.classList.remove("_720kb-datepicker-open")},g.setDaysInMonth=function(a,b){var c,d,e,f,h=new Date(b,a,0).getDate(),i=new Date(b+"/"+a+"/1").getDay(),j=new Date(b+"/"+a+"/"+h).getDay(),k=[],l=[];for(g.days=[],c=1;h>=c;c+=1)g.days.push(c);if(0!==i){for(e=i,f=1===Number(a)?12:a-1,c=1;c<=new Date(b,f,0).getDate();c+=1)k.push(c);g.prevMonthDays=k.slice(-e)}else g.prevMonthDays=[];if(6>j){for(d=6-j,c=1;d>=c;c+=1)l.push(c);g.nextMonthDays=l}else g.nextMonthDays=[]},g.setDatepickerDay=function(a){g.day=Number(a),g.setInputValue(),g.hideCalendar()},g.paginateYears=function(a){g.paginationYears=[];var b,c=[],d=10;for(g.isMobile()&&(d=50),b=d;b>0;b-=1)c.push(Number(a)-b);for(b=0;d>b;b+=1)c.push(Number(a)+b);g.paginationYearsNextDisabled=l&&c&&c.length&&!g.isSelectableMaxYear(Number(c[c.length-1])+1)?!0:!1,g.paginationYearsPrevDisabled=k&&c&&c.length&&!g.isSelectableMinYear(Number(c[0])-1)?!0:!1,g.paginationYears=c},g.isSelectableMinDate=function(a){return k&&new Date(k)&&new Date(a).getTime()<new Date(k).getTime()?!1:!0},g.isSelectableMaxDate=function(a){return l&&new Date(l)&&new Date(a).getTime()>new Date(l).getTime()?!1:!0},g.isSelectableMaxYear=function(a){return l&&a>new Date(l).getFullYear()?!1:!0},g.isSelectableMinYear=function(a){return k&&a<new Date(k).getFullYear()?!1:!0},k&&!g.isSelectableMinYear(g.year)&&g.resetToMinDate(),l&&!g.isSelectableMaxYear(g.year)&&g.resetToMaxDate(),g.paginateYears(g.year),g.setDaysInMonth(g.monthNumber,g.year)}}}])}(angular);
//# sourceMappingURL=angular-datepicker.sourcemap.map
angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },

      /**
       * Provides coordinates for the targetEl in relation to hostEl
       */
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

        var hostElPos,
          targetElWidth,
          targetElHeight,
          targetElPos;

        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');

        var shiftWidth = {
          center: function () {
            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
          },
          left: function () {
            return hostElPos.left;
          },
          right: function () {
            return hostElPos.left + hostElPos.width;
          }
        };

        var shiftHeight = {
          center: function () {
            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
          },
          top: function () {
            return hostElPos.top;
          },
          bottom: function () {
            return hostElPos.top + hostElPos.height;
          }
        };

        switch (pos0) {
          case 'right':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: shiftWidth[pos0]()
            };
            break;
          case 'left':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: hostElPos.left - targetElWidth
            };
            break;
          case 'bottom':
            targetElPos = {
              top: shiftHeight[pos0](),
              left: shiftWidth[pos1]()
            };
            break;
          default:
            targetElPos = {
              top: hostElPos.top - targetElHeight,
              left: shiftWidth[pos1]()
            };
            break;
        }

        return targetElPos;
      }
    };
  }]);

/*!
 * angular-dateParser 1.0.12
 * https://github.com/dnasir/angular-dateParser
 * Copyright 2014, Dzulqarnain Nasir
 * Licensed under: MIT (http://www.opensource.org/licenses/MIT)
 */

(function(angular) {
    angular.module("dateParser", []).factory("dateParserHelpers", [ function() {
        "use strict";
        var cache = {};
        return {
            getInteger: function(string, startPoint, minLength, maxLength) {
                var val = string.substring(startPoint);
                var matcher = cache[minLength + "_" + maxLength];
                if (!matcher) {
                    matcher = new RegExp("^(\\d{" + minLength + "," + maxLength + "})");
                    cache[minLength + "_" + maxLength] = matcher;
                }
                var match = matcher.exec(val);
                if (match) {
                    return match[1];
                }
                return null;
            }
        };
    } ]).factory("$dateParser", [ "$locale", "dateParserHelpers", function($locale, dateParserHelpers) {
        "use strict";
        var datetimeFormats = $locale.DATETIME_FORMATS;
        var monthNames = datetimeFormats.MONTH.concat(datetimeFormats.SHORTMONTH);
        var dayNames = datetimeFormats.DAY.concat(datetimeFormats.SHORTDAY);
        return function(val, format) {
            if (angular.isDate(val)) {
                return val;
            }
            try {
                val = val + "";
                format = format + "";
                if (!format.length) {
                    return new Date(val);
                }
                if (datetimeFormats[format]) {
                    format = datetimeFormats[format];
                }
                var now = new Date(), i_val = 0, i_format = 0, format_token = "", year = now.getFullYear(), month = now.getMonth() + 1, date = now.getDate(), hh = 0, mm = 0, ss = 0, sss = 0, ampm = "am", z = 0, parsedZ = false;
                while (i_format < format.length) {
                    format_token = format.charAt(i_format);
                    var token = "";
                    if (format.charAt(i_format) == "'") {
                        var _i_format = i_format;
                        while (format.charAt(++i_format) != "'" && i_format < format.length) {
                            token += format.charAt(i_format);
                        }
                        if (val.substring(i_val, i_val + token.length) != token) {
                            throw "Pattern value mismatch";
                        }
                        i_val += token.length;
                        i_format++;
                        continue;
                    }
                    while (format.charAt(i_format) == format_token && i_format < format.length) {
                        token += format.charAt(i_format++);
                    }
                    if (token == "yyyy" || token == "yy" || token == "y") {
                        var minLength, maxLength;
                        if (token == "yyyy") {
                            minLength = 4;
                            maxLength = 4;
                        }
                        if (token == "yy") {
                            minLength = 2;
                            maxLength = 2;
                        }
                        if (token == "y") {
                            minLength = 2;
                            maxLength = 4;
                        }
                        year = dateParserHelpers.getInteger(val, i_val, minLength, maxLength);
                        if (year === null) {
                            throw "Invalid year";
                        }
                        i_val += year.length;
                        if (year.length == 2) {
                            if (year > 70) {
                                year = 1900 + (year - 0);
                            } else {
                                year = 2e3 + (year - 0);
                            }
                        }
                    } else if (token === "MMMM" || token == "MMM") {
                        month = 0;
                        for (var i = 0; i < monthNames.length; i++) {
                            var month_name = monthNames[i];
                            if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) {
                                month = i + 1;
                                if (month > 12) {
                                    month -= 12;
                                }
                                i_val += month_name.length;
                                break;
                            }
                        }
                        if (month < 1 || month > 12) {
                            throw "Invalid month";
                        }
                    } else if (token == "EEEE" || token == "EEE") {
                        for (var j = 0; j < dayNames.length; j++) {
                            var day_name = dayNames[j];
                            if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) {
                                i_val += day_name.length;
                                break;
                            }
                        }
                    } else if (token == "MM" || token == "M") {
                        month = dateParserHelpers.getInteger(val, i_val, token.length, 2);
                        if (month === null || month < 1 || month > 12) {
                            throw "Invalid month";
                        }
                        i_val += month.length;
                    } else if (token == "dd" || token == "d") {
                        date = dateParserHelpers.getInteger(val, i_val, token.length, 2);
                        if (date === null || date < 1 || date > 31) {
                            throw "Invalid date";
                        }
                        i_val += date.length;
                    } else if (token == "HH" || token == "H") {
                        hh = dateParserHelpers.getInteger(val, i_val, token.length, 2);
                        if (hh === null || hh < 0 || hh > 23) {
                            throw "Invalid hours";
                        }
                        i_val += hh.length;
                    } else if (token == "hh" || token == "h") {
                        hh = dateParserHelpers.getInteger(val, i_val, token.length, 2);
                        if (hh === null || hh < 1 || hh > 12) {
                            throw "Invalid hours";
                        }
                        i_val += hh.length;
                    } else if (token == "mm" || token == "m") {
                        mm = dateParserHelpers.getInteger(val, i_val, token.length, 2);
                        if (mm === null || mm < 0 || mm > 59) {
                            throw "Invalid minutes";
                        }
                        i_val += mm.length;
                    } else if (token == "ss" || token == "s") {
                        ss = dateParserHelpers.getInteger(val, i_val, token.length, 2);
                        if (ss === null || ss < 0 || ss > 59) {
                            throw "Invalid seconds";
                        }
                        i_val += ss.length;
                    } else if (token === "sss") {
                        sss = dateParserHelpers.getInteger(val, i_val, 3, 3);
                        if (sss === null || sss < 0 || sss > 999) {
                            throw "Invalid milliseconds";
                        }
                        i_val += 3;
                    } else if (token == "a") {
                        if (val.substring(i_val, i_val + 2).toLowerCase() == "am") {
                            ampm = "AM";
                        } else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") {
                            ampm = "PM";
                        } else {
                            throw "Invalid AM/PM";
                        }
                        i_val += 2;
                    } else if (token == "Z") {
                        parsedZ = true;
                        if (val[i_val] === "Z") {
                            z = 0;
                            i_val += 1;
                        } else {
                            if (val[i_val + 3] === ":") {
                                var tzStr = val.substring(i_val, i_val + 6);
                                z = parseInt(tzStr.substr(0, 3), 10) * 60 + parseInt(tzStr.substr(4, 2), 10);
                                i_val += 6;
                            } else {
                                var tzStr = val.substring(i_val, i_val + 5);
                                z = parseInt(tzStr.substr(0, 3), 10) * 60 + parseInt(tzStr.substr(3, 2), 10);
                                i_val += 5;
                            }
                        }
                        if (z > 720 || z < -720) {
                            throw "Invalid timezone";
                        }
                    } else {
                        if (val.substring(i_val, i_val + token.length) != token) {
                            throw "Pattern value mismatch";
                        } else {
                            i_val += token.length;
                        }
                    }
                }
                if (i_val != val.length) {
                    throw "Pattern value mismatch";
                }
                year = parseInt(year, 10);
                month = parseInt(month, 10);
                date = parseInt(date, 10);
                hh = parseInt(hh, 10);
                mm = parseInt(mm, 10);
                ss = parseInt(ss, 10);
                sss = parseInt(sss, 10);
                if (month == 2) {
                    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                        if (date > 29) {
                            throw "Invalid date";
                        }
                    } else {
                        if (date > 28) {
                            throw "Invalid date";
                        }
                    }
                }
                if (month == 4 || month == 6 || month == 9 || month == 11) {
                    if (date > 30) {
                        throw "Invalid date";
                    }
                }
                if (hh < 12 && ampm == "PM") {
                    hh += 12;
                } else if (hh > 11 && ampm == "AM") {
                    hh -= 12;
                }
                var localDate = new Date(year, month - 1, date, hh, mm, ss, sss);
                if (parsedZ) {
                    return new Date(localDate.getTime() - (z + localDate.getTimezoneOffset()) * 6e4);
                }
                return localDate;
            } catch (e) {
                return undefined;
            }
        };
    } ]);
    angular.module("dateParser").directive("dateParser", [ "dateFilter", "$dateParser", function(dateFilter, $dateParser) {
        "use strict";
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {
                var dateFormat;
                attrs.$observe("dateParser", function(value) {
                    dateFormat = value;
                    ngModel.$render();
                });
                ngModel.$parsers.unshift(function(viewValue) {
                    var date = $dateParser(viewValue, dateFormat);
                    ngModel.$setValidity("date", angular.isDate(date));
                    return date;
                });
                ngModel.$render = function() {
                    element.val(ngModel.$modelValue ? dateFilter(ngModel.$modelValue, dateFormat) : undefined);
                    scope.ngModel = ngModel.$modelValue;
                };
                ngModel.$formatters.push(function(modelValue) {
                    ngModel.$setValidity("date", angular.isDate(modelValue));
                    return modelValue ? dateFilter(modelValue, dateFormat) : "";
                });
            }
        };
    } ]);
})(angular);
/*!
 * angular-timepicker 1.0.8
 * https://github.com/Geta/angular-timepicker
 * Copyright 2014, Geta AS
 * Contributors: Dzulqarnain Nasir <dzul@geta.no>
 * Licensed under: MIT (http://www.opensource.org/licenses/MIT)
 */

(function(angular) {
    "use strict";
    angular.module("dnTimepicker", [ "ui.bootstrap.position", "dateParser" ]).factory("dnTimepickerHelpers", function() {
        return {
            stringToMinutes: function(str) {
                if (!str) {
                    return null;
                }
                var t = str.match(/(\d+)(h?)/);
                return t[1] ? t[1] * (t[2] ? 60 : 1) : null;
            },
            buildOptionList: function(minTime, maxTime, step) {
                var result = [], i = angular.copy(minTime);
                while (i <= maxTime) {
                    result.push(new Date(i));
                    i.setMinutes(i.getMinutes() + step);
                }
                return result;
            },
            getClosestIndex: function(value, from) {
                if (!angular.isDate(value)) {
                    return -1;
                }
                var closest = null, index = -1, _value = value.getHours() * 60 + value.getMinutes();
                for (var i = 0; i < from.length; i++) {
                    var current = from[i], _current = current.getHours() * 60 + current.getMinutes();
                    if (closest === null || Math.abs(_current - _value) < Math.abs(closest - _value)) {
                        closest = _current;
                        index = i;
                    }
                }
                return index;
            }
        };
    }).directive("dnTimepicker", [ "$compile", "$parse", "$position", "$document", "dateFilter", "$dateParser", "dnTimepickerHelpers", "$log", function($compile, $parse, $position, $document, dateFilter, $dateParser, dnTimepickerHelpers, $log) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngModel: "="
            },
            link: function(scope, element, attrs, ctrl) {
                var current = null, list = [], updateList = true;
                scope.timepicker = {
                    element: null,
                    timeFormat: "h:mm a",
                    minTime: $dateParser("0:00", "H:mm"),
                    maxTime: $dateParser("23:59", "H:mm"),
                    step: 15,
                    isOpen: false,
                    activeIdx: -1,
                    optionList: function() {
                        if (updateList) {
                            list = dnTimepickerHelpers.buildOptionList(scope.timepicker.minTime, scope.timepicker.maxTime, scope.timepicker.step);
                            updateList = false;
                        }
                        return list;
                    }
                };
                function getUpdatedDate(date) {
                    if (!current) {
                        current = angular.isDate(scope.ngModel) ? scope.ngModel : new Date();
                    }
                    current.setHours(date.getHours());
                    current.setMinutes(date.getMinutes());
                    current.setSeconds(date.getSeconds());
                    setCurrentValue(current);
                    return current;
                }
                function setCurrentValue(value) {
                    if (!angular.isDate(value)) {
                        value = $dateParser(scope.ngModel, scope.timepicker.timeFormat);
                        if (isNaN(value)) {
                            $log.warn("Failed to parse model.");
                        }
                    }
                    current = value;
                }
                attrs.$observe("dnTimepicker", function(value) {
                    if (value) {
                        scope.timepicker.timeFormat = value;
                    }
                    ctrl.$render();
                });
                attrs.$observe("minTime", function(value) {
                    if (!value) return;
                    scope.timepicker.minTime = $dateParser(value, scope.timepicker.timeFormat);
                    updateList = true;
                });
                attrs.$observe("maxTime", function(value) {
                    if (!value) return;
                    scope.timepicker.maxTime = $dateParser(value, scope.timepicker.timeFormat);
                    updateList = true;
                });
                attrs.$observe("step", function(value) {
                    if (!value) return;
                    var step = dnTimepickerHelpers.stringToMinutes(value);
                    if (step) scope.timepicker.step = step;
                    updateList = true;
                });
                scope.$watch("ngModel", function(value) {
                    setCurrentValue(value);
                    ctrl.$render();
                });
                ctrl.$render = function() {
                    element.val(angular.isDate(current) ? dateFilter(current, scope.timepicker.timeFormat) : ctrl.$viewValue ? ctrl.$viewValue : "");
                };
                ctrl.$parsers.unshift(function(viewValue) {
                    var date = angular.isDate(viewValue) ? viewValue : $dateParser(viewValue, scope.timepicker.timeFormat);
                    if (isNaN(date)) {
                        ctrl.$setValidity("time", false);
                        return undefined;
                    }
                    ctrl.$setValidity("time", true);
                    return getUpdatedDate(date);
                });
                scope.select = function(time) {
                    if (!angular.isDate(time)) {
                        return;
                    }
                    ctrl.$setViewValue(getUpdatedDate(time));
                    ctrl.$render();
                };
                scope.isActive = function(index) {
                    return index === scope.timepicker.activeIdx;
                };
                scope.setActive = function(index) {
                    scope.timepicker.activeIdx = index;
                };
                scope.scrollToSelected = function() {
                    if (scope.timepicker.element && scope.timepicker.activeIdx > -1) {
                        var target = scope.timepicker.element[0].querySelector(".active");
                        target.parentNode.scrollTop = target.offsetTop - 50;
                    }
                };
                scope.openPopup = function() {
                    scope.position = $position.position(element);
                    scope.position.top = scope.position.top + element.prop("offsetHeight");
                    scope.timepicker.isOpen = true;
                    scope.timepicker.activeIdx = dnTimepickerHelpers.getClosestIndex(scope.ngModel, scope.timepicker.optionList());
                    scope.$digest();
                    scope.scrollToSelected();
                };
                scope.closePopup = function() {
                    if (scope.timepicker.isOpen) {
                        scope.timepicker.isOpen = false;
                        scope.$apply();
                        element[0].blur();
                    }
                };
                element.after($compile(angular.element("<div dn-timepicker-popup></div>"))(scope));
                element.bind("focus", function() {
                    scope.openPopup();
                }).bind("keypress keyup", function(e) {
                    if (e.which === 38 && scope.timepicker.activeIdx > 0) {
                        scope.timepicker.activeIdx--;
                        scope.scrollToSelected();
                    } else if (e.which === 40 && scope.timepicker.activeIdx < scope.timepicker.optionList().length - 1) {
                        scope.timepicker.activeIdx++;
                        scope.scrollToSelected();
                    } else if (e.which === 13 && scope.timepicker.activeIdx > -1) {
                        scope.select(scope.timepicker.optionList()[scope.timepicker.activeIdx]);
                        scope.closePopup();
                    }
                    scope.$digest();
                });
                $document.bind("click", function(event) {
                    if (scope.timepicker.isOpen && event.target !== element[0]) {
                        scope.closePopup();
                    }
                });
                setCurrentValue(scope.ngModel);
            }
        };
    } ]).directive("dnTimepickerPopup", function() {
        return {
            restrict: "A",
            replace: true,
            transclude: false,
            template: '<ul class="dn-timepicker-popup dropdown-menu" ng-style="{display: timepicker.isOpen && \'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}"><li ng-repeat="time in timepicker.optionList()" ng-class="{active: isActive($index) }" ng-mouseenter="setActive($index)"><a ng-click="select(time)">{{time | date:timepicker.timeFormat}}</a></li></ul>',
            link: function(scope, element, attrs) {
                scope.timepicker.element = element;
                element.find("a").bind("click", function(event) {
                    event.preventDefault();
                });
            }
        };
    });
})(angular);
;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by CoffeeScript 1.6.3
var app;

app = angular.module('focusOn', []);

app.directive('focusOn', function() {
  return function(scope, elem, attr) {
    return scope.$on('focusOn', function(e, name) {
      if (name === attr.focusOn) {
        return elem[0].focus();
      }
    });
  };
});

app.factory('focus', [
  '$rootScope', '$timeout', (function($rootScope, $timeout) {
    return function(name) {
      return $timeout(function() {
        return $rootScope.$broadcast('focusOn', name);
      });
    };
  })
]);

},{}]},{},[1])
;
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


(function () {    

    var Skippr = (function () {

        function Skippr(element, options) {

            var _ = this,
                timer;
            
            _.settings = $.extend($.fn.skippr.defaults, options);
            _.$element = $(element);
            _.$parent = _.$element.parent();
            _.$photos = _.$element.children();
            _.count = _.$photos.length;
            _.countString = String(_.count);
            _.touchOnThis = false;
            _.previousTouchX = null;
            _.swipeDirection = null;
            _.init();
    
        }

        Skippr.prototype.init = function() {

            var _ = this;

            _.setup();
            _.navClick();
            _.arrowClick();
            _.resize();
            _.keyPress();

            if(_.settings.autoPlay == true) {
                _.autoPlay();
                // _.autoPlayPause();
            }

            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                _.touch();
            }

            if (_.settings.navHover) {

                _.navHover();

            }

        }
        
        // Set event listeners for touch events.
        // 
        Skippr.prototype.touch = function() {

            var _ = this;

            _.$element.on('touchstart', function(ev) {

                var e = ev.originalEvent;
                var xcoord = e.pageX;

                // Record that this element is being touched.
                _.touchOnThis = true;
                // Record the current xcoord to be used as reference in
                // touchmove event listener.
                _.previousTouchX = xcoord;
            });

            _.$element.on('touchmove', function(ev) {

                var e = ev.originalEvent;
                var xcoord = e.pageX;

                if(_.touchOnThis) {
                    // e.preventDefault();

                    if(_.previousTouchX < xcoord) {
                        // swiping right to go backwards
                        _.swipeDirection = "backwards";

                    } else if(_.previousTouchX > xcoord) {
                        //swiping left to go forwards
                        _.swipeDirection = "forwards";

                    }

                }

            });

            _.$element.on('touchend', function() {

                _.touchOnThis = false;

                // Trigger arrow event listeners depending
                // on swipe direction.
                if(_.swipeDirection == "backwards") {

                    _.$element.find(".skippr-previous").trigger('click');
    
                } else if(_.swipeDirection == "forwards") {

                    _.$element.find(".skippr-next").trigger('click');
            
                }

                // Reset in order to prevent event listeners
                // from responding to taps.
                _.swipeDirection = null;

            }); 

        }

        Skippr.prototype.setup = function() {

            var _ = this;
            
            // if img elements are being used,
            // create divs with background images to use
            // Skippr as normal.  
            if (_.settings.childrenElementType == 'img') {

                var makeDivs = [];

                for (i = 0; i < _.count; i++) {
                    var src = _.$photos.eq(i).attr('src'),
                        insert = '<div style="background-image: url(' + src + ')"></div>';

                    makeDivs.push(insert);
                }
                 makeDivs.join("");
                 _.$element.append(makeDivs);
                 _.$element.find('img').remove();
                 _.$photos = _.$element.children();

            }

            // if an array of image url's is being used
            // create divs with background images to use
            // Skippr as normal.
            if (_.settings.childrenElementType == 'array') {
                
                var imageArray = _.settings.imgArray;
                var makeDivs = [];

                for (i = 0; i < imageArray; i++) {
                    var src = imageArray[i];
                    var insert = '<div style="background-image: url(' + src + ')"></div>';

                    makeDivs.push(insert);
                }

                makeDivs.join("");
                _.$element.children().remove();
                _.$element.append(makeDivs);
                _.$photos = _.$element.children();

            }

            if (_.settings.transition == 'fade') {
                _.$photos.not(":first-child").hide();
            }

            if (_.settings.transition == 'slide') {
                _.setupSlider();

            }

            _.$photos.eq(0).addClass('visible');
            _.$element.addClass('skippr');

            _.navBuild();

            if(_.settings.arrows == true) {
                _.arrowBuild();
            }

        };

        Skippr.prototype.resize = function() {

            var _ = this;

            if( _.settings.transition == 'slide') {
                
                $(window).resize(function() {
        
                    var currentItem = _.$element.find(".skippr-nav-element-active").attr('data-slider');

                    _.setupSlider();

                    _.$photos.each(function() {
                        var amountLeft = parseFloat($(this).css('left')),
                            parentWidth = _.$parent.width(),
                            moveAmount;

                        if( currentItem > 1 ) {
                            moveAmount = amountLeft - (parentWidth * (currentItem - 1));
                        }
                        $(this).css('left', moveAmount + 'px');
                    });

                    // Corrects autoPlay timer
                    if(_.settings.autoPlay === true ) {
                        clearInterval(timer);
                        _.autoPlay();
                    }    

                });
            }
        };

        Skippr.prototype.arrowBuild = function() {

            var _ = this,
                previous,
                next,
                startingPrevious = _.count, // what will be the first previous slide?
                previousStyles = '';

            if ( _.settings.hidePrevious === true ) {
                previousStyles = 'style="display:none;"'; 
            }

            previous = '<nav class="skippr-nav-item skippr-arrow skippr-previous" data-slider="' + startingPrevious + '" ' + previousStyles + '></nav>';
            next = '<nav class="skippr-nav-item skippr-arrow skippr-next" data-slider="2"></nav>';

            _.$element.append(previous + next);

        };

        Skippr.prototype.navBuild = function() {

            var _ = this,
                container,
                navElements = [];

            if (_.settings.navType == "block") {
                var styleClass = "skippr-nav-element-block";
            } else if(_.settings.navType == "bubble") {
               var styleClass = "skippr-nav-element-bubble"; 
            }

            for (var i = 0; i < _.count; i++) { 
                //cycle through slideshow divs and display correct number of bubbles.
                var insert;

                if (i == 0) {
                    //check if first bubble, add respective active class.
                    insert = "<div class='skippr-nav-element skippr-nav-item " + styleClass + " skippr-nav-element-active' data-slider='" + (i + 1) + "'></div>";
                } else {
                    insert = "<div class='skippr-nav-element skippr-nav-item " + styleClass + "' data-slider='" + (i + 1) + "'></div>";
                }
                //insert bubbles into an array.
                navElements.push(insert); 
            };
            //join array elements into a single string.
            navElements = navElements.join(""); 
            // append html to bubbles container div.
            container = '<nav class="skippr-nav-container">' + navElements + '</nav>';

            _.$element.append(container);

        };

        Skippr.prototype.navHover = function() {

            var _ = this;

            $(".skippr-nav-item").on({

                mouseenter : function() {

                    if (_.settings.autoPlay) {

                        _.change($(this), true);
                        clearInterval(timer);

                    } else {

                        _.change($(this), true);

                    }    

                }, 
                mouseleave : function() {

                    if (_.settings.autoPlay) {

                        _.autoPlay();

                    }

                }
            });

            /**
             * The following listener is SPECIFIC
             * to One Degree Advisors, should be kept out of skippr
             * master code.
             */

            $(".photo-content-button").on({

                mouseenter : function() {

                    if (_.settings.autoPlay) {
                       
                        clearInterval(timer);

                    } 

                }, 

                mouseleave : function() {

                    if (_.settings.autoPlay) {

                        _.autoPlay();

                    }

                }

            });


            

        };

        Skippr.prototype.arrowClick = function() {
            
            var _ = this,
                $arrows = _.$element.find(".skippr-arrow");
            
            $arrows.click(function(){
               
                if ( !$(this).hasClass('disabled') ) {
                    _.change($(this));  
                }
                
            });

        };

        Skippr.prototype.navClick = function() {

            var _ = this,
                $navs = _.$element.find('.skippr-nav-element');

            $navs.click(function(){

                if ( !$(this).hasClass('disabled') ) {
                    _.change($(this));
                }
            });

        };

        Skippr.prototype.change = function(element, navHover) {

            var _ = this,
                item = element.attr('data-slider'),
                allNavItems = _.$element.find(".skippr-nav-item"),
                currentItem = _.$element.find(".skippr-nav-element-active").attr('data-slider'),
                nextData = _.$element.find(".skippr-next").attr('data-slider'),
                previousData = _.$element.find(".skippr-previous").attr('data-slider');

            if(item != currentItem) { //prevents animation for repeat click.

                if (navHover === true) {

                    var showingSlide = _.$photos.eq(item - 1)

                    showingSlide.css('z-index', '10').siblings('div').css('z-index', '9');
                    showingSlide.show()
                    _.$element.find(".visible").hide().removeClass('visible');     
                    showingSlide.addClass('visible');
                                       
                } else if (_.settings.transition == 'fade') {

                    _.$photos.eq(item - 1).css('z-index', '10').siblings('div').css('z-index', '9');
                    
                    _.$photos.eq(item - 1).fadeIn(_.settings.speed, function() {
                        _.$element.find(".visible").fadeOut('fast',function(){
                            $(this).removeClass('visible');
                            _.$photos.eq(item - 1).addClass('visible');
                        });
                    });

                } else if (_.settings.transition == 'slide') {
                  
                    _.$photos.each(function(){

                        var amountLeft = parseFloat($(this).css('left')),
                            parentWidth = _.$parent.width(),
                            moveAmount;

                        if (item > currentItem) {
                            moveAmount = amountLeft - (parentWidth * (item - currentItem)); 
                        }

                        if (item < currentItem) {
                            moveAmount = amountLeft + (parentWidth * (currentItem - item));                           
                        }

                        allNavItems.addClass('disabled');
                        
                        $(this).velocity({'left': moveAmount + 'px'}, _.settings.speed, _.settings.easing, function(){

                            allNavItems.removeClass('disabled');

                        });

                        _.logs("slides sliding");

                    });
                }


                _.$element.find(".skippr-nav-element")
                          .eq(item - 1)
                          .addClass('skippr-nav-element-active')
                          .siblings()
                          .removeClass('skippr-nav-element-active');
                
                var nextDataAddString = Number(item) + 1,
                    previousDataAddString = Number(item) - 1;

                if ( item == _.count ){ 
                    _.$element.find(".skippr-next").attr('data-slider', '1' );
                } else {
                     _.$element.find(".skippr-next").attr('data-slider', nextDataAddString );
                }
                
                if (item == 1) {
                     _.$element.find(".skippr-previous").attr('data-slider', _.countString );
                }  else {
                    _.$element.find(".skippr-previous").attr('data-slider', previousDataAddString ); 
                }

                if( _.settings.arrows && _.settings.hidePrevious ) {
                    _.hidePrevious();
                }    
            }

        };

        Skippr.prototype.autoPlay = function() {

            var _ = this;

            timer = setInterval(function(){
                var activeElement =  _.$element.find(".skippr-nav-element-active"),
                    activeSlide = activeElement.attr('data-slider');

                if( activeSlide == _.count ) {
                  var elementToInsert =  _.$element.find(".skippr-nav-element").eq(0); 
                } else {
                    var elementToInsert = activeElement.next();
                }

                _.change(elementToInsert);
                    
            },_.settings.autoPlayDuration);

        };

        Skippr.prototype.autoPlayPause = function() {

            var _ = this;

            // Set up a few listeners to clear and reset the autoPlay timer.

            _.$parent.hover(function(){
                clearInterval(timer);

                _.logs("clearing timer on hover");

            }, function() {
                _.autoPlay();

                _.logs("resetting timer on un-hover");

            });

            // Checks if this tab is not being viewed, and pauses autoPlay timer if not. 
            $(window).on("blur focus", function(e) {

                var prevType = $(this).data("prevType");

                if (prevType != e.type) {   //  reduce double fire issues
                    switch (e.type) {
                        case "blur":
                            clearInterval(timer);
                            _.logs('clearing timer on window blur'); 
                            break;
                        case "focus":
                            _.autoPlay();
                            _.logs('resetting timer on window focus');
                            break;
                    }
                }

                $(this).data("prevType", e.type);
            });

        };

        Skippr.prototype.setupSlider = function() {

            var _ = this,
                parentWidth = _.$parent.width(),
                amountLeft;

            _.$photos.css('position', 'absolute');

            for (i = 0; i < _.count; i++) {

                amountLeft = parentWidth * i;
                _.$photos.eq(i).css('left', amountLeft);
            }


        }

        Skippr.prototype.keyPress = function() {

            var _ = this;

            if(_.settings.keyboardOnAlways == true) {

                $(document).on('keydown', function(e) {
                    if(e.which == 39) {
                         _.$element.find(".skippr-next").trigger('click');
                    }
                    if(e.which == 37) {
                         _.$element.find(".skippr-previous").trigger('click');
                    }

                });
            }

            if (_.settings.keyboardOnAlways == false) {

                _.$parent.hover(function(){

                    $(document).on('keydown', function(e) {
                        if(e.which == 39) {
                             _.$element.find(".skippr-next").trigger('click');
                        }
                        if(e.which == 37) {
                             _.$element.find(".skippr-previous").trigger('click');
                        }

                    });
                    
                }, function(){
                    $(document).off('keydown');
                });
            }
            
        }

        Skippr.prototype.hidePrevious = function() {

            var _ = this;

            if ( _.$element.find(".skippr-nav-element").eq(0).hasClass('skippr-nav-element-active')) {
                 _.$element.find(".skippr-previous").fadeOut();
            } else {
                 _.$element.find(".skippr-previous").fadeIn();
            }
        }

        Skippr.prototype.logs = function(message) {

            var _ = this;

            _.settings.logs === true && console.log(message);

        }



        return Skippr;

    })();

    $.fn.skippr = function (options) {

        var instance;

        instance = this.data('skippr');
        if (!instance) {
            return this.each(function () {
                return $(this).data('skippr', new Skippr(this,options));
            });
        }
        if (options === true) return instance;
        if ($.type(options) === 'string') instance[options]();
        return this;
    };

    $.fn.skippr.defaults = {
        transition: 'slide',
        speed: 1000,
        easing: 'easeOutQuart',
        navType: 'block',
        childrenElementType : 'div',
        arrows: true,
        autoPlay: false,
        autoPlayDuration: 5000,
        keyboardOnAlways: true,
        hidePrevious: false,
        imgArray : null,
        navHover : false,
        logs: false
       
    };

}).call(this);

/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.11.2
* @docs http://VelocityJS.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(e){"function"==typeof define&&define.amd?window.Velocity?define(e):define(["jquery"],e):e("object"==typeof exports?window.Velocity?void 0:require("jquery"):window.jQuery)}(function(e){return function(t,r,a,o){function i(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}function n(e){var t=$.data(e,p);return null===t?o:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,t){var r=e;return y.isString(e)?v.Easings[e]||(r=!1):r=y.isArray(e)&&1===e.length?s.apply(null,e):y.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):y.isArray(e)&&4===e.length?S.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:f),r}function u(e){if(e)for(var t=(new Date).getTime(),r=0,a=v.State.calls.length;a>r;r++)if(v.State.calls[r]){var i=v.State.calls[r],s=i[0],l=i[2],p=i[3];p||(p=v.State.calls[r][3]=t-16);for(var d=Math.min((t-p)/l.duration,1),f=0,g=s.length;g>f;f++){var m=s[f],S=m.element;if(n(S)){var x=!1;l.display&&"none"!==l.display&&b.setPropertyValue(S,"display",l.display),l.visibility&&"hidden"!==l.visibility&&b.setPropertyValue(S,"visibility",l.visibility);for(var V in m)if("element"!==V){var P=m[V],w,C=y.isString(P.easing)?v.Easings[P.easing]:P.easing;if(w=1===d?P.endValue:P.startValue+(P.endValue-P.startValue)*C(d),P.currentValue=w,b.Hooks.registered[V]){var T=b.Hooks.getRoot(V),k=n(S).rootPropertyValueCache[T];k&&(P.rootPropertyValue=k)}var E=b.setPropertyValue(S,V,P.currentValue+(0===parseFloat(w)?"":P.unitType),P.rootPropertyValue,P.scrollData);b.Hooks.registered[V]&&(n(S).rootPropertyValueCache[T]=b.Normalizations.registered[T]?b.Normalizations.registered[T]("extract",null,E[1]):E[1]),"transform"===E[0]&&(x=!0)}l.mobileHA&&n(S).transformCache.translate3d===o&&(n(S).transformCache.translate3d="(0px, 0px, 0px)",x=!0),x&&b.flushTransformCache(S)}}l.display&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(i[1],i[1],d,Math.max(0,p+l.duration-t),p),1===d&&c(r)}v.State.isTicking&&(v.mock?u(!0):h(u))}function c(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],a=v.State.calls[e][1],i=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||i.loop||("none"===i.display&&b.setPropertyValue(p,"display",i.display),"hidden"===i.visibility&&b.setPropertyValue(p,"visibility",i.visibility)),($.queue(p)[1]===o||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&n(p)){n(p).isAnimating=!1,n(p).rootPropertyValueCache={};var d=!1;$.each(n(p).transformCache,function(e,t){var r=/^scale/.test(e)?1:0;new RegExp("^\\("+r+"[^.]").test(t)&&(d=!0,delete n(p).transformCache[e])}),i.mobileHA&&(d=!0,delete n(p).transformCache.translate3d),d&&b.flushTransformCache(p),b.Values.removeClass(p,"velocity-animating")}if(!t&&i.complete&&!i.loop&&u===c-1)try{i.complete.call(a,a)}catch(f){setTimeout(function(){throw f},1)}s&&i.loop!==!0&&s(a),i.loop!==!0||t||v.animate(p,"reverse",{loop:!0,delay:i.delay}),i.queue!==!1&&$.dequeue(p,i.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var p="velocity",d=400,f="swing",g=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return o}(),m=function(){var e=0;return r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),h=r.requestAnimationFrame||m,y={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==o&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||r.Zepto&&r.Zepto.zepto.isZ(e))},isSVG:function(e){return r.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$;if(e&&e.fn!==o?$=e:r.Velocity&&r.Velocity.Utilities&&($=r.Velocity.Utilities),!$)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(t.Velocity!==o&&t.Velocity.Utilities==o)throw new Error("Velocity: Namespace is occupied.");if(7>=g){if(e)return void(e.fn.velocity=e.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===g&&!e)throw new Error("Velocity: For IE8, Velocity requires jQuery proper to be loaded; Velocity's jQuery shim does not work with IE8.");var v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:r.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Sequences:{},Easings:{},Promise:r.Promise,defaults:{queue:"",duration:d,easing:f,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,p,{isSVG:y.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},animate:function(){},hook:function(e,t,r){var a=o;return y.isWrapped(e)&&(e=[].slice.call(e)),$.each(y.isNode(e)?[e]:e,function(e,i){if(n(i)===o&&v.init(i),r===o)a===o&&(a=v.CSS.getPropertyValue(i,t));else{var s=v.CSS.setPropertyValue(i,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(i),a=s}}),a},mock:!1,version:{major:0,minor:11,patch:2},debug:!1};r.pageYOffset!==o?(v.State.scrollAnchor=r,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var S=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,o,i){return((e(o,i)*a+t(o,i))*a+r(o))*a}function o(a,o,i){return 3*e(o,i)*a*a+2*t(o,i)*a+r(o)}return function(e,t,r,i){function n(t){for(var i=t,n=0;8>n;++n){var s=o(i,e,r);if(0===s)return i;var l=a(i,e,r)-t;i-=l/s}return i}if(4!==arguments.length)return!1;for(var s=0;4>s;++s)if("number"!=typeof arguments[s]||isNaN(arguments[s])||!isFinite(arguments[s]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(o){return e===t&&r===i?o:a(n(o),t,i)}}}(),x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},i=t(r,.5*a,o),n=t(r,.5*a,i),s=t(r,a,n),l=1/6*(o.dx+2*(i.dx+n.dx)+s.dx),u=1/6*(o.dv+2*(i.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,o){var i={x:-1,v:0,tension:null,friction:null},n=[0],s=0,l=1e-4,u=.016,c,p,d;for(e=parseFloat(e)||500,t=parseFloat(t)||20,o=o||null,i.tension=e,i.friction=t,c=null!==o,c?(s=a(e,t),p=s/o*u):p=u;;)if(d=r(d||i,p),n.push(1+d.x),s+=16,!(Math.abs(d.x)>l&&Math.abs(d.v)>l))break;return c?function(e){return n[e*(n.length-1)|0]}:s}}();!function(){v.Easings.linear=function(e){return e},v.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},v.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},v.Easings.ease=S(.25,.1,.25,1),v.Easings["ease-in"]=S(.42,0,1,1),v.Easings["ease-out"]=S(0,0,.58,1),v.Easings["ease-in-out"]=S(.42,0,.58,1);var e={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),$.each(e,function(e,t){v.Easings["easeIn"+e]=t,v.Easings["easeOut"+e]=function(e){return 1-t(1-e)},v.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var b=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<b.Lists.colors.length;e++)b.Hooks.templates[b.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(g)for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");var o=r[1].match(b.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),o.push(o.shift()),b.Hooks.templates[t]=[a.join(" "),o.join(" ")])}for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var i=t+a[e],n=e;b.Hooks.registered[i]=[t,n]}}},getRoot:function(e){var t=b.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return b.RegEx.valueUnwrap.test(t)&&(t=t.match(b.Hooks.RegEx.valueUnwrap)[1]),b.Values.isCSSNullValue(t)&&(t=b.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=b.Hooks.registered[e];if(r){var a=r[0],o=r[1];return t=b.Hooks.cleanRootPropertyValue(a,t),t.toString().match(b.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=b.Hooks.registered[e];if(a){var o=a[0],i=a[1],n,s;return r=b.Hooks.cleanRootPropertyValue(o,r),n=r.toString().match(b.RegEx.valueSplit),n[i]=t,s=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return b.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(b.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=g)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=g||v.State.isGingerbread||(b.Lists.transformsBase=b.Lists.transformsBase.concat(b.Lists.transforms3D));for(var e=0;e<b.Lists.transformsBase.length;e++)!function(){var t=b.Lists.transformsBase[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return"transform";case"extract":return n(r)===o||n(r).transformCache[t]===o?/^scale/i.test(t)?1:0:n(r).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":v.State.isAndroid&&n(r).transformCache[t]===o&&1>a&&(a=1),i=!/(\d)$/i.test(a);break;case"skew":i=!/(deg|\d)$/i.test(a);break;case"rotate":i=!/(deg|\d)$/i.test(a)}return i||(n(r).transformCache[t]="("+a+")"),n(r).transformCache[t]}}}();for(var e=0;e<b.Lists.colors.length;e++)!function(){var t=b.Lists.colors[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return t;case"extract":var i;if(b.RegEx.wrappedValueAlreadyExtracted.test(a))i=a;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?n=s[a]!==o?s[a]:s.black:b.RegEx.isHex.test(a)?n="rgb("+b.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(n=s.black),i=(n||a).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=g||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return 8>=g?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=g?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(g||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),y.isString(v.State.prefixElement.style[o]))return v.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,a,i){function s(e,t){function a(){u&&b.setPropertyValue(e,"display","none")}var l=0;if(8>=g)l=$.css(e,t);else{var u=!1;if(/^(width|height)$/.test(t)&&0===b.getPropertyValue(e,"display")&&(u=!0,b.setPropertyValue(e,"display",b.Values.getDisplayType(e))),!i){if("height"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(b.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(b.getPropertyValue(e,"paddingBottom"))||0);return a(),c}if("width"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(b.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(b.getPropertyValue(e,"paddingRight"))||0);return a(),p}}var d;d=n(e)===o?r.getComputedStyle(e,null):n(e).computedStyle?n(e).computedStyle:n(e).computedStyle=r.getComputedStyle(e,null),(g||v.State.isFirefox)&&"borderColor"===t&&(t="borderTopColor"),l=9===g&&"filter"===t?d.getPropertyValue(t):d[t],(""===l||null===l)&&(l=e.style[t]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(t)){var f=s(e,"position");("fixed"===f||"absolute"===f&&/top|left/i.test(t))&&(l=$(e).position()[t]+"px")}return l}var l;if(b.Hooks.registered[t]){var u=t,c=b.Hooks.getRoot(u);a===o&&(a=b.getPropertyValue(e,b.Names.prefixCheck(c)[0])),b.Normalizations.registered[c]&&(a=b.Normalizations.registered[c]("extract",e,a)),l=b.Hooks.extractValue(u,a)}else if(b.Normalizations.registered[t]){var p,d;p=b.Normalizations.registered[t]("name",e),"transform"!==p&&(d=s(e,b.Names.prefixCheck(p)[0]),b.Values.isCSSNullValue(d)&&b.Hooks.templates[t]&&(d=b.Hooks.templates[t][1])),l=b.Normalizations.registered[t]("extract",e,d)}return/^[\d-]/.test(l)||(l=n(e)&&n(e).isSVG&&b.Names.SVGAttribute(t)?/^(height|width)$/i.test(t)?e.getBBox()[t]:e.getAttribute(t):s(e,b.Names.prefixCheck(t)[0])),b.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+t+": "+l),l},setPropertyValue:function(e,t,a,o,i){var s=t;if("scroll"===t)i.container?i.container["scroll"+i.direction]=a:"Left"===i.direction?r.scrollTo(a,i.alternateValue):r.scrollTo(i.alternateValue,a);else if(b.Normalizations.registered[t]&&"transform"===b.Normalizations.registered[t]("name",e))b.Normalizations.registered[t]("inject",e,a),s="transform",a=n(e).transformCache[t];else{if(b.Hooks.registered[t]){var l=t,u=b.Hooks.getRoot(t);o=o||b.getPropertyValue(e,u),a=b.Hooks.injectValue(l,a,o),t=u}if(b.Normalizations.registered[t]&&(a=b.Normalizations.registered[t]("inject",e,a),t=b.Normalizations.registered[t]("name",e)),s=b.Names.prefixCheck(t)[0],8>=g)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else n(e)&&n(e).isSVG&&b.Names.SVGAttribute(t)?e.setAttribute(t,a):e.style[s]=a;v.debug>=2&&console.log("Set "+t+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(b.getPropertyValue(e,t))}var r="";if((g||v.State.isAndroid&&!v.State.isChrome)&&n(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(n(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,i;$.each(n(e).transformCache,function(t){return o=n(e).transformCache[t],"transformPerspective"===t?(i=o,!0):(9===g&&"rotateZ"===t&&(t="rotate"),void(r+=t+o+" "))}),i&&(r="perspective"+i+" "+r)}b.setPropertyValue(e,"transform",r)}};b.Hooks.register(),b.Normalizations.register(),v.animate=function(){function e(){return p?C.promise||null:f}function t(){function e(e){function d(e,r){var a=o,i=o,n=o;return y.isArray(e)?(a=e[0],!y.isArray(e[1])&&/^[\d-]/.test(e[1])||y.isFunction(e[1])||b.RegEx.isHex.test(e[1])?n=e[1]:(y.isString(e[1])&&!b.RegEx.isHex.test(e[1])||y.isArray(e[1]))&&(i=r?e[1]:l(e[1],s.duration),e[2]!==o&&(n=e[2]))):a=e,r||(i=i||s.easing),y.isFunction(a)&&(a=a.call(t,V,x)),y.isFunction(n)&&(n=n.call(t,V,x)),[a||0,i,n]}function f(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=b.Values.getUnitType(e)),[a,r]}function g(){var e={myParent:t.parentNode||a.body,position:b.getPropertyValue(t,"position"),fontSize:b.getPropertyValue(t,"fontSize")},o=e.position===N.lastPosition&&e.myParent===N.lastParent,i=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(i&&o)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=n(t).isSVG?a.createElementNS("http://www.w3.org/2000/svg","rect"):a.createElement("div");v.init(u),e.myParent.appendChild(u),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"overflow","hidden"),v.CSS.setPropertyValue(u,"overflowX","hidden"),v.CSS.setPropertyValue(u,"overflowY","hidden"),v.CSS.setPropertyValue(u,"boxSizing","content-box"),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),v.CSS.setPropertyValue(u,"minWidth",s+"%"),v.CSS.setPropertyValue(u,"maxWidth",s+"%"),v.CSS.setPropertyValue(u,"width",s+"%"),v.CSS.setPropertyValue(u,"minHeight",s+"%"),v.CSS.setPropertyValue(u,"maxHeight",s+"%"),v.CSS.setPropertyValue(u,"height",s+"%"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(b.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(b.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(b.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(b.getPropertyValue(a.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(r.innerWidth)/100,N.vhToPx=parseFloat(r.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),t),l}if(s.begin&&0===V)try{s.begin.call(m,m)}catch(P){setTimeout(function(){throw P},1)}if("scroll"===T){var w=/^x$/i.test(s.axis)?"Left":"Top",k=parseFloat(s.offset)||0,E,F,A;s.container?y.isWrapped(s.container)||y.isNode(s.container)?(s.container=s.container[0]||s.container,E=s.container["scroll"+w],A=E+$(t).position()[w.toLowerCase()]+k):s.container=null:(E=v.State.scrollAnchor[v.State["scrollProperty"+w]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===w?"Top":"Left")]],A=$(t).offset()[w.toLowerCase()]+k),c={scroll:{rootPropertyValue:!1,startValue:E,currentValue:E,endValue:A,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:w,alternateValue:F}},element:t},v.debug&&console.log("tweensContainer (scroll): ",c.scroll,t)}else if("reverse"===T){if(!n(t).tweensContainer)return void $.dequeue(t,s.queue);"none"===n(t).opts.display&&(n(t).opts.display="block"),"hidden"===n(t).opts.visibility&&(n(t).opts.visibility="visible"),n(t).opts.loop=!1,n(t).opts.begin=null,n(t).opts.complete=null,S.easing||delete s.easing,S.duration||delete s.duration,s=$.extend({},n(t).opts,s);var j=$.extend(!0,{},n(t).tweensContainer);for(var L in j)if("element"!==L){var z=j[L].startValue;j[L].startValue=j[L].currentValue=j[L].endValue,j[L].endValue=z,y.isEmptyObject(S)||(j[L].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(j[L]),t)}c=j}else if("start"===T){var j;n(t).tweensContainer&&n(t).isAnimating===!0&&(j=n(t).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+b.Lists.colors.join("$|^")+"$").test(e)){var r=d(t,!0),a=r[0],i=r[1],n=r[2];if(b.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=b.Values.hexToRgb(a),u=n?b.Values.hexToRgb(n):o,c=0;c<s.length;c++)h[e+s[c]]=[l[c],i,u?u[c]:u];delete h[e]}}});for(var M in h){var R=d(h[M]),q=R[0],B=R[1],O=R[2];M=b.Names.camelCase(M);var W=b.Hooks.getRoot(M),X=!1;if(n(t).isSVG||b.Names.prefixCheck(W)[1]!==!1||b.Normalizations.registered[W]!==o){(s.display&&"none"!==s.display||s.visibility&&"hidden"!==s.visibility)&&/opacity|filter/.test(M)&&!O&&0!==q&&(O=0),s._cacheValues&&j&&j[M]?(O===o&&(O=j[M].endValue+j[M].unitType),X=n(t).rootPropertyValueCache[W]):b.Hooks.registered[M]?O===o?(X=b.getPropertyValue(t,W),O=b.getPropertyValue(t,M,X)):X=b.Hooks.templates[W][1]:O===o&&(O=b.getPropertyValue(t,M));var Y,G,I,U=!1;if(Y=f(M,O),O=Y[0],I=Y[1],Y=f(M,q),q=Y[0].replace(/^([+-\/*])=/,function(e,t){return U=t,""}),G=Y[1],O=parseFloat(O)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(M)?(q/=100,G="em"):/^scale/.test(M)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(M)&&(q=q/100*255,G="")),/[\/*]/.test(U))G=I;else if(I!==G&&0!==O)if(0===q)G=I;else{p=p||g();var D=/margin|padding|left|right|width|text|word|letter/i.test(M)||/X$/.test(M)?"x":"y";switch(I){case"%":O*="x"===D?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:O*=p[I+"ToPx"]}switch(G){case"%":O*=1/("x"===D?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:O*=1/p[G+"ToPx"]}}switch(U){case"+":q=O+q;break;case"-":q=O-q;break;case"*":q=O*q;break;case"/":q=O/q}c[M]={rootPropertyValue:X,startValue:O,currentValue:O,endValue:q,unitType:G,easing:B},v.debug&&console.log("tweensContainer ("+M+"): "+JSON.stringify(c[M]),t)}else v.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}c.element=t}c.element&&(b.Values.addClass(t,"velocity-animating"),H.push(c),n(t).tweensContainer=c,n(t).opts=s,n(t).isAnimating=!0,V===x-1?(v.State.calls.length>1e4&&(v.State.calls=i(v.State.calls)),v.State.calls.push([H,m,s,null,C.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,u())):V++)}var t=this,s=$.extend({},v.defaults,S),c={},p;if(n(t)===o&&v.init(t),parseFloat(s.delay)&&s.queue!==!1&&$.queue(t,s.queue,function(e){v.velocityQueueEntryFlag=!0,n(t).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),v.mock===!0)s.duration=1;else switch(s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=d;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}s.easing=l(s.easing,s.duration),s.begin&&!y.isFunction(s.begin)&&(s.begin=null),s.progress&&!y.isFunction(s.progress)&&(s.progress=null),s.complete&&!y.isFunction(s.complete)&&(s.complete=null),s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(t))),s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(t,s.queue,function(t,r){return r===!0?(C.promise&&C.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(t)[0]||$.dequeue(t)}var s=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||y.isString(arguments[0].properties)),p,f,g,m,h,S;if(y.isWrapped(this)?(p=!1,g=0,m=this,f=this):(p=!0,g=1,m=s?arguments[0].elements:arguments[0]),m=y.isWrapped(m)?[].slice.call(m):m){s?(h=arguments[0].properties,S=arguments[0].options):(h=arguments[g],S=arguments[g+1]);var x=y.isArray(m)||y.isNodeList(m)?m.length:1,V=0;if("stop"!==h&&!$.isPlainObject(S)){var P=g+1;S={};for(var w=P;w<arguments.length;w++)!y.isArray(arguments[w])&&/^\d/.test(arguments[w])?S.duration=parseFloat(arguments[w]):y.isString(arguments[w])||y.isArray(arguments[w])?S.easing=arguments[w]:y.isFunction(arguments[w])&&(S.complete=arguments[w])}var C={promise:null,resolver:null,rejecter:null};p&&v.Promise&&(C.promise=new v.Promise(function(e,t){C.resolver=e,C.rejecter=t}));var T;switch(h){case"scroll":T="scroll";break;case"reverse":T="reverse";break;case"stop":$.each(y.isNode(m)?[m]:m,function(e,t){n(t)&&n(t).delayTimer&&(clearTimeout(n(t).delayTimer.setTimeout),n(t).delayTimer.next&&n(t).delayTimer.next(),delete n(t).delayTimer)});var k=[];return $.each(v.State.calls,function(e,t){t&&$.each(y.isNode(t[1])?[t[1]]:t[1],function(t,r){$.each(y.isNode(m)?[m]:m,function(t,a){if(a===r){if(n(a)&&$.each(n(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),S===!0||y.isString(S)){var o=y.isString(S)?S:"";$.each($.queue(a,o),function(e,t){y.isFunction(t)&&t(null,!0)}),$.queue(a,o,[])}k.push(e)}})})}),$.each(k,function(e,t){c(t,!0)}),C.promise&&C.resolver(m),e();default:if(!$.isPlainObject(h)||y.isEmptyObject(h)){if(y.isString(h)&&v.Sequences[h]){var E=S.duration,F=S.delay||0;return S.backwards===!0&&(m=(y.isWrapped(m)?[].slice.call(m):m).reverse()),$.each(m,function(e,t){parseFloat(S.stagger)?S.delay=F+parseFloat(S.stagger)*e:y.isFunction(S.stagger)&&(S.delay=F+S.stagger.call(t,e,x)),S.drag&&(S.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:d),S.duration=Math.max(S.duration*(S.backwards?1-e/x:(e+1)/x),.75*S.duration,200)),v.Sequences[h].call(t,t,S||{},e,x,m,C.promise?C:o)}),e()}var A="Velocity: First argument ("+h+") was not a property map, a known action, or a registered sequence. Aborting.";return C.promise?C.rejecter(new Error(A)):console.log(A),e()}T="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},H=[];$.each(y.isNode(m)?[m]:m,function(e,r){y.isNode(r)&&t.call(r)});var j=$.extend({},v.defaults,S),L;if(j.loop=parseInt(j.loop),L=2*j.loop-1,j.loop)for(var z=0;L>z;z++){var M={delay:j.delay};z===L-1&&(M.display=j.display,M.visibility=j.visibility,M.complete=j.complete),v.animate(m,"reverse",M)}return e()}},v.State.isMobile||a.hidden===o||a.addEventListener("visibilitychange",function(){a.hidden?(h=function(e){return setTimeout(function(){e(!0)},16)},u()):h=r.requestAnimationFrame||m});var V;return e&&e.fn?V=e:r.Zepto&&(V=r.Zepto),(V||r).Velocity=v,V&&(V.fn.velocity=v.animate,V.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},u=s.begin,c=s.complete,p=!1;null!==s.display&&(s.display="Down"===t?s.display||"auto":s.display||"none"),s.begin=function(){function r(){l.height=parseFloat(v.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(v.CSS.getPropertyValue(e,"height"))===l.height&&(p=!0),v.CSS.setPropertyValue(e,"height",l.height+"px")}if("Down"===t){l.overflow=[v.CSS.getPropertyValue(e,"overflow"),0],l.overflowX=[v.CSS.getPropertyValue(e,"overflowX"),0],l.overflowY=[v.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in l)if(!/^overflow/.test(a)){var o=v.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[o,0]}}else{r();for(var a in l){var o=v.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[0,o]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}u&&u.call(e,e)},s.complete=function(e){var r="Down"===t?0:1;p===!0?l.height[r]="auto":l.height[r]+="px";for(var a in l)e.style[a]=l[a][r];c&&c.call(e,e),n&&n.resolver(i||e)},v.animate(e,l,s)}}),$.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={opacity:"In"===t?1:0};if(a!==o-1)s.complete=s.begin=null;else{var u=s.complete;s.complete=function(){u&&u.call(e,e),n&&n.resolver(i||e)}}null!==s.display&&(s.display=s.display||("In"===t?"auto":"none")),v.animate(this,l,s)}}),v}(e||window,window,document)});

'use strict';


var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


var app = angular.module(['onedegree'], ['angularLoad', '720kb.datepicker', 'dnTimepicker', 'focusOn']);


app.factory('Video', ['$http', function($http) {
	return {
		get : function() {
			return $http.get(base + '/api/videos');
		}
	}
}]);

app.factory('Email', ['$http', function($http) {

	return {

		speaker : function(data) {

			return $http.post('/email/speaker', data);

		},

		inquiry : function(data) {

			return $http.post('/email/inquire', data);

		}

	}

}]);

app.controller('InquireFormController', ['$scope', 'Email', function($scope, Email) {

	$scope.buttonText = "SEND INQUIRY";

	$scope.submitForm = function() {

		$scope.buttonText = "Sending....";

		Email.inquiry($scope.form).success(function(response) {

			$scope.buttonText = "THANK YOU!";
			$scope.form = {};

		}).error(function(response) {



		});

	}

}]);

app.controller('SpeakerFormController', ['$scope', 'focus', 'Email', function($scope, focus, Email) {

	$scope.buttonText = "INQUIRE";

	$scope.focusDate = function($event) {

		$event.preventDefault();
		focus('date');

	}

	$scope.focusTime = function($event) {

		$event.preventDefault();
		focus('time');

	}


	$scope.submitForm = function() {

		$scope.buttonText = "Sending..."

		Email.speaker($scope.form).success(function(response) {

			$scope.buttonText = "Success!";
			$scope.form = {};

		}).error(function(response) {

			console.log("there was an error");

		});

	}

}]);


app.controller('VideoController', ['$scope', 'Video', '$sce', function($scope, Video, $sce) {

	$scope.videos = [];

	$scope.activeVideo = {};

	$scope.setActiveVideo = function(index) {
		var embedToBeTrusted = String($scope.videos[index].link);

		$scope.activeVideo = $scope.videos[index];
		$scope.activeVideo.link = $sce.trustAsResourceUrl(embedToBeTrusted);

		document.body.scrollTop = document.documentElement.scrollTop = 0;

	}

	$scope.getVideos = function() {

		Video.get().success(function(response) {

			$scope.videos = response.data;
			squarify();
			ResponsiveVideo.init();
			$scope.setActiveVideo(0);

			console.log($scope.videos);


		}).error(function(response) {


		});
	}

	$scope.getVideos();

}]);


app.controller('MediumController', ['$scope', 'angularLoad', function($scope, angularLoad) {

	var embeds = [
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/87709bfc4d0b">A Spending Plan</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/4827ec319f97">A Game Plan for 2015</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ed143692496c">Conquer the Clutter</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/ac7af39debac">Step Back to Go Forward</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/1de1f5b6a748">Keep the Woe, Woe, Woe Out of your Ho, Ho, Ho</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/f73d6aed4802">Is it Time for Another Recession?</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/c8ec0bfe26e0">Radical Generosity</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/23e3b4e3d321">Don’t Let These Years Casually Pass…</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/cc3bbd2d10e1">Leaving a Legacy of Love</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/4c6eb613654">The Education of Money</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/1064fa00a1fb">Selecting a Financial Professional</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/73ecded7d503">What is the Real Treasure?</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ff3d62bd92e7">The Power of Possessions</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/7367503e7775">Thinking for Tomorrow, Today.</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/79cb346e490d">Empowering Women</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/6add96b70ba7">The Beginning &amp; End of Wisdom</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ec5f0be58320">The Power of ONE</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/4a0ce3f113f1">Generosity Shows Leadership</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/d50da548a211">Avoid the Use of Debt</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/5a38fdd9e74">Redefining Retirement</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/806d8c85774a">The Power of Contentment</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/2c27372d62bd">Taking Steps of Faith</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/468491f571f0">The Power of a Paradigm Shift</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/80b56580d42b">The Plans of the Diligent</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/b8402db02446">The Power of Planning</a>'

	];

	$scope.offsetIndex = 0;
	$scope.offsetAmount = 6;
	$scope.ready

	$scope.init = function() {

		angularLoad.loadScript('https://static.medium.com/embed.js').then(function() {

			$scope.loadPosts();

		}).catch(function() {

			console.log("there was an error loading the script");

		});
	}

	$scope.loadPosts = function() {

		var tempArray = [];
		var html;
		var mediumContainer = document.getElementById('medium-container');

		for(var i = 0; i < $scope.offsetAmount; i++) {

			var skipIndex = $scope.offsetIndex * $scope.offsetAmount;
			var pushIndex = i + skipIndex;

			// If appropriate, insert closing tag to first row.
			if (i === 3) {

				tempArray.push('</div>');

			}

			// intert opening row tag if this article is the first of a row.
			if (i === 0 || i === 3) {

				tempArray.push('<div class="medium-row">');

			}

			tempArray.push(embeds[pushIndex]);

			// insert closing div tag
			if (i === $scope.offsetAmount - 1) {

				tempArray.push('</div>');

			}

		}

		html = tempArray.join('');

		mediumContainer.innerHTML += html;

		MediumPosts.init();

		$scope.offsetIndex++;

	}



	function watchScrollPosition() {

		var distance = $(document).scrollTop();

	}

	$scope.init();

}]);

function isTouchDevice() {

    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);

}


function isIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

function mobile() {

	if ($(window) < 1100) {

		return true;

	} else {

		return false;

	}

}


function squarify() {
	$('.square').each(function() {
		$(this).height($(this).width());
	});

	requestAnimationFrame(squarify);
}



var Navigation = {

	init : function() {

		var _ = this;

		if (isTouchDevice()) {

			_.navButton.on('touchstart', function() {

				if (_.element.hasClass('open')) {

					_.close();

				} else {

					_.open();

				}

				return false;
			});

			_.outerContainer.on('touchstart', function() {

				if (_.element.hasClass('open')) {

					_.close();

				}

			});

		} else {

			_.navButton.click(function() {

				if (_.element.hasClass('open')) {

					_.close();

				} else {

					_.open();

				}

			});

			_.outerContainer.click(function() {

				if (_.element.hasClass('open')) {

					_.close();

				}

			});
		}

	},

	navButton : $("#nav-button"),
	element : $(".nav-container"),
	outerContainer : $('#outer-container'),
	mast : $(".mast"),
	title : $(".title"),
	logo : $("#logo"),

	open : function() {

		var _ = this;

		_.element.removeClass('closed').addClass('open');
		_.navButton.removeClass('fa-bars').addClass('fa-close');
		_.outerContainer.addClass('shifted');
		_.mast.addClass('shifted');
		_.title.hide();
		_.logo.addClass('shifted');

		setTimeout(function() {

			_.navButton.css('color', 'white');

		}, 50);


	},

	close : function() {

		var _ = this;

		_.navButton.removeClass('fa-close').addClass('fa-bars');
		_.outerContainer.removeClass('shifted');
		_.mast.removeClass('shifted');
		_.logo.removeClass('shifted');


		setTimeout(function() {

			_.title.show();

		}, 100);

		setTimeout(function() {

			_.navButton.attr('style', '');


		}, 150);

		_.element.removeClass('open').addClass('closed');


	}

}



var Mast = {

	init : function() {

		Mast.internetExplorerFix();

	},

	element : $(".mast"),
	logo : $('#logo'),
	navButton : $("#nav-button"),
	topContainer : $(".mast").children('.top-container'),
	bottomContainer : $(".mast").children('.bottom-container'),
	title : $('.title'),

	coloring : function() {

		var _ = this;

		var bannerHeight = $('.top-banner').height();

		if ($(window).scrollTop() > (bannerHeight - 60)) {

			$(".mast-logo-letters").attr('class', 'mast-logo-letters');
			$(".title").removeClass('above-fold');
			$("#nav-button").removeClass("above-fold");
			Mast.element.attr('style', '');

			if ($(window).width() < 1100) {

				Mast.element.addClass('white');

			}

		} else {

			$(".mast-logo-letters").attr('class', 'mast-logo-letters above-fold');
			$("#nav-button").addClass('above-fold');
			$(".title").addClass('above-fold');
			Mast.element.css('background-color', 'transparent')
			Mast.element.removeClass('white');

		}

		Mast.loop = requestAnimationFrame(Mast.coloring);

	},

	internetExplorerFix : function() {

		if (isIE !== false) {

			Mast.logo.height(50);

		}

	}

}

var SecondaryTeamMemberOverlay = {

	init : function() {
		_ = this;

		$('.secondary-team-member').hover(function() {

			_.slideIn($(this));

		}, function() {

			_.slideOut($(this));

		});

	},

	slideIn : function(element) {

		var overlay = element.find('.overlay');

		overlay.css({top : '0%', right : '0%'});

	},

	slideOut : function(element) {

		var overlay = element.find('.overlay');

		overlay.attr('style', '');

	}

}


var ProcessLine = {

	init : function() {

		var _ = this;

		_.setPathLength();
		_.draw();

	},

	element : document.querySelector('.process-line .animated-process-line'),

	colorTransitionPoints : [4777, 3155, 1724, 709, 163],

	colorTransitionElements : [
		{ icon : '#discover-icon', title : '#discover-title' },
		{ icon : '#analyze-icon', title : '#analyze-title' },
		{ icon : '#strategize-icon', title : '#strategize-title' },
		{ icon : '#implement-icon', title : '#implement-title' },
		{ icon : '#monitor-icon', title : '#monitor-title' }
	],

	setPathLength : function() {

		var path = ProcessLine.element;
		var length = path.getTotalLength();

		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;

	},

	draw : function() {

		var path = ProcessLine.element;
		var length = path.getTotalLength();
		var distance = $(document).scrollTop();

		for(var i = 0; i < ProcessLine.colorTransitionPoints.length; i++) {

			if (parseInt(path.style.strokeDashoffset) < ProcessLine.colorTransitionPoints[i]) {

				$(ProcessLine.colorTransitionElements[i].icon).css({color: '#6bbb6f', fontSize : '7rem'});
				$(ProcessLine.colorTransitionElements[i].title).css('width','150px');

			} else {

				$(ProcessLine.colorTransitionElements[i].icon).attr('style', '');
				$(ProcessLine.colorTransitionElements[i].title).attr('style', '');

			}

		}

		path.style.strokeDashoffset = (length - (distance * 2.65));

		console.log(path.style.strokeDashoffset);

		ProcessLine.loop = requestAnimationFrame(ProcessLine.draw)

	}
}



var MediumPosts = {

	init : function() {

		// requestAnimationFrame(MediumPosts.setWidth);

		MediumPosts.setWidth();

		setInterval(function() {

			MediumPosts.setWidth();


		}, 4000);

	},

	initialElements : $(".m-story"),

	setWidth : function() {

		var loadedElements = $(".medium-container iframe");

		if ($(window).width() > 1100) {

			MediumPosts.initialElements.each(function() {

				$(this).attr('data-width', "33%");

			});
			loadedElements.each(function() {

				$(this).attr('width', "33%");
				$(this).css('width', "33%");

			});

		} else {

			MediumPosts.initialElements.each(function() {

				$(this).attr('data-width', "100%");


			});

			loadedElements.each(function() {

				$(this).attr('width', "100%");
				$(this).css('width', "100%");

			});
		}

	}
}

var HomeBanner = {

	init : function() {

		this.slideshow();

	},

	element : $(".home-banner"),

	sizing : function() {

		var windowHeight = $(window).height();
		var mastHeight = 160;
		var bannerHeight = windowHeight - mastHeight - (mastHeight * 0.666);

		this.element.css('height', bannerHeight + 'px' );

	},

	slideshow : function() {

		$("#skippr-target").skippr({

			transition : 'fade',
			arrows : false,
			autoPlay : true,
			autoPlayDuration : 6000,
			navHover : true

		});

	}

}

var ResponsiveVideo = {

	init : function() {

		this.responsive();

	},

	responsive : function() {

		$(".active-video-container").fitVids();

		requestAnimationFrame(ResponsiveVideo.responsive);

	}

}


var EthicsSlideshow  = {

	init : function() {

		this.slideshow();

	},

	elements : $(".ethics-slide"),

	slideshow : function() {

		var i = 0;

		setInterval(function() {

			if (i >= EthicsSlideshow.elements.length) {

				i = 0;

			}

			for(var e = 0; e < EthicsSlideshow.elements.length; e++) {

				if (e === i) {

					EthicsSlideshow.elements.eq(e).addClass('ethics-slide-visible');

				} else {

					EthicsSlideshow.elements.eq(e).removeClass('ethics-slide-visible');

				}

			}

			i++;

		}, 2000);

	}

}

var SectionIndicators = {

	init : function() {

		SectionIndicators.setIndicators();

		SectionIndicators.loop = requestAnimationFrame(SectionIndicators.track);

	},

	elements : $(".indicator-parent"),

	indicatorElements : $(".indicator-element"),

	inquireLink : $("#inquire-link"),


	setIndicators : function() {

		var html = '';

		SectionIndicators.elements.each(function() {

			var text = $(this).attr('data-indicator');
			var anchor = $(this).attr('id');

			// in order to be able to use this code snippet for the single inquiry link
			// on the home page, this conditional checks for that one instance, else
			// assigns normal behavior

			if (anchor === 'inquiry') {

				html += '<a href="' + base + '/inquiry"class="indicator-element">' + text + '</a>';


			}else if(anchor === 'client-login'){
				html += '<a href="' + base + '/client-login"class="indicator-element inquire-link-login">' + text + '</a>';
			} else {

				html += '<a href="#' + anchor + '"class="indicator-element">' + text + '</a>';

			}


		});

		// For some reason, the code directly below causes errors galore. WHY?
		// document.getElementById('outer-container').innerHTML += html;

		$("#outer-container").append(html);

		SectionIndicators.indicatorElements = $(".indicator-element");

	},

	track : function() {

		var distance = $(document).scrollTop();

		$(".indicator-parent").each(function(index) {

			var position = $(this).offset().top + parseInt($(this).css('padding-top'));
			var indicatorLockPosition = parseInt(SectionIndicators.inquireLink.css('top')) + (SectionIndicators.inquireLink.height() * (index + 1));
			var lockPoint = position - indicatorLockPosition;

			if (distance > lockPoint) {

				SectionIndicators.indicatorElements.eq(index).css({'position' : 'fixed', 'top': indicatorLockPosition + 'px'});

			} else {

				SectionIndicators.indicatorElements.eq(index).css({'position' : 'absolute', 'top': position + 'px'});

			}

		});

		SectionIndicators.loop = requestAnimationFrame(SectionIndicators.track);

	}

}



$(document).ready(function() {

	Mast.init();
	squarify();
	Navigation.init();

	if (thisPage === 'home') {

		HomeBanner.init();
		Mast.coloring();
		MediumPosts.init();

		if ($(window).width() > 1100) {

			SectionIndicators.init();

		}


	}

	if (thisPage === 'services') {

		EthicsSlideshow.init();


		if ($(window).width() > 1100) {

			SectionIndicators.init();

		}

	}

	if (thisPage === 'team') {

		// turned off per Troy's request
		// SecondaryTeamMemberOverlay.init();

	}

	if (thisPage === 'process' && $(window).width() > 1100) {

		ProcessLine.init();
		SectionIndicators.init();

	}

	if (thisPage === 'videos') {

		// Video.init();

	}

	if (thisPage === 'client-login') {
		var $img = jQuery('img.footer-logo');
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {

            var $svg = jQuery(data).find('svg');
            $svg = $svg.removeAttr('xmlns:a');
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            $img.replaceWith($svg);
        }, 'xml');

	}

	if (thisPage === 'blog') {

		MediumPosts.init();

	}



	if (thisPage === 'speaker' || thisPage === 'inquiry') {

		if (Modernizr.input.placeholder) {

			$("label:not(.input-tab)").hide();

		}

	}


	// Smooth scrolling to anchor tag
	$('a[href*=#]:not([href=#])').on('click', function() {

	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			var target = $(this.hash);

			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {

				$('html,body').animate({ scrollTop: target.offset().top }, 1000);

	        	return false;

			}

	    }

	});


});

$(window).resize(function() {

	squarify();

	if (thisPage === '/') {

		HomeBanner.init();

	}

	if (thisPage === '/' || thisPage === 'blog') {

		MediumPosts.init();

	}

});







