var selector = '.birds';

function traverse(sel) {
    var start = document.querySelector(selector);
    traverseNode(start, '');

    function traverseNode(node, indent) {
        var result = indent + node.nodeName.toLowerCase() + ': ', i, attributes = node.attributes.length;
        for (i = 0; i < attributes; i++) {
            result += node.attributes[i].name + '="' + node.attributes[i].value + '"';
        }
        console.log(result);
        var length = node.childNodes.length, child;
        for (i = 0; i < length; i++) {
            child = node.childNodes[i];
            if (child.nodeType === 1) {
                traverseNode(child, indent + '\t');
            }
        }
    }
}

traverse(selector);
