"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSlideItemInfo=exports.getSlideInfo=exports.getSlideIndexForMultipleItems=exports.getSlideIndexForNonMultipleItems=exports.getActiveSlideDotsLength=exports.getActiveSlideIndex=void 0,exports.getActiveSlideIndex=function(e,t){var i=t||{},o=i.itemsInSlide,t=i.itemsCount,i=i.activeIndex+o;return 1===o?exports.getSlideIndexForNonMultipleItems(i,o,t):exports.getSlideIndexForMultipleItems(i,o,t,e)},exports.getActiveSlideDotsLength=function(e,t){if(void 0===t&&(t=1),(e=void 0===e?0:e)&&t){var i=Math.floor(e/t);return e%t==0?i-1:i}return 0},exports.getSlideIndexForNonMultipleItems=function(e,t,i){return e<t?i-t:i<e?0:e-1},exports.getSlideIndexForMultipleItems=function(e,t,i,o){var n=exports.getActiveSlideDotsLength(i,t);return e===i+t?0:o||e<t&&0!==e?n:0===e?i%t==0?n:n-1:0<t?Math.floor(e/t)-1:0},exports.getSlideInfo=function(e,t){void 0===t&&(t=0);e=(e=void 0===e?0:e)+1;return e<1?e=t:t<e&&(e=1),{item:e,itemsCount:t}},exports.getSlideItemInfo=function(e){var t=e||{},i=t.activeIndex,e=t.infinite;return t.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:!1===e&&0===i,isNextSlideDisabled:!1===e&&t.itemsCount-t.itemsInSlide<=i}};