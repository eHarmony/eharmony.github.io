(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['projects'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <li id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.github : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.platform || (depth0 != null ? depth0.platform : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"platform","hash":{},"data":data}) : helper)))
    + "\">\n            <figure></figure>\n            <section>\n                <aside>\n                    "
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "\n                    <span class=\"stars\"></span>\n                    <span class=\"forks\"></span>\n                </aside>\n                <h1>";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1>\n                <time class=\"updated\"></time>\n                <main>";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</main>\n                <a class=\"button alt\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.github : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\"_blank\">View on GitHub</a>\n            </section>\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.projects : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});
})();
