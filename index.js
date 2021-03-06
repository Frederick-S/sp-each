/// <reference path="./typings/index.d.ts"/>
"use strict";
function each(collection, iteratee, context) {
    if (typeof collection.getEnumerator === 'function') {
        var index = 0;
        var current = null;
        var enumerator = collection.getEnumerator();
        while (enumerator.moveNext()) {
            current = enumerator.get_current();
            iteratee.call(context, current, index, collection);
            index++;
        }
    }
}
exports.each = each;
