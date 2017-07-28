var editor;
var example = {"array":{"":3},"boolean":true,"null":null,"number":123,"object":{"a":"b","c":"d","e":"f"},"string":"Hello World"};
$(document).ready(function () {
    editor = ace.edit("editor");
    editor.getSession().setMode("ace/mode/json");
    editor.setValue(JSON.stringify(example));
	editor.clearSelection();

    editor.compact = function () {
        var e = JSON.parse(this.getValue())
            , t = JSON.stringify(e);
        this.setValue(t);
        this.clearSelection();
    };
    editor.format = function () {
        var e = JSON.parse(this.getValue())
            , t = JSON.stringify(e, null, 2);
        this.setValue(t);
        this.clearSelection();
    };

    $(".format").click(function () {
        editor.format();
    });

    $(".minify").click(function () {
        editor.compact();
    });

});

