var input = '<ul>\n <li>\n <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>';

var match = /<a.+<\/a>/g.exec(input).toString();
var replaced = match.replace(/</g, '[').replace(/>/g, ']').replace(/a/g, 'URL');
var result = input.replace(match, replaced);

console.log(result);
