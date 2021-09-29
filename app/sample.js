(function () {
  var s = document.createElement("script");
  s.src = "/src/build/index_bundle.js";
  s.setAttribute("data-tenent-uid", "kapilpande");
  var parent_node = document.head || document.body;
  parent_node.appendChild(s);
  s.addEventListener("load", function () {
    window.first();
  });
})();
