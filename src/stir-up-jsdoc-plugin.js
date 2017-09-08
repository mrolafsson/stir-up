StirUp.JsDoc = function () {

};

StirUp.JsDoc.prototype.create_jsdoc = function () {

    function namespace(name) {
        return '\n/**@namespace ' + name + '*/';
    }

    function helper(name) {
        return '\n/**@name ' + name + '*/';
    }

    var jsdoc = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            jsdoc.push(helper(i));
            if (typeof this[i] == 'object') {
                jsdoc.push(namespace(i));
                for (var o in this[i]) {
                    if (this[i].hasOwnProperty(o)) {
                        jsdoc.push(helper(o));
                    }
                }
            }
        }
    }

    return jsdoc.join('');
};