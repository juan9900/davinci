(function () {
  var target = document.querySelector('.club-form-container');
  if (!target) return;
  var ids = ['123368', '30754'];
  var moved = false;

  function tryMove() {
    if (moved) return true;
    for (var i = 0; i < ids.length; i++) {
      var node = document.getElementById(ids[i]);
      if (node && node.children.length > 0) {
        target.appendChild(node);
        moved = true;
        return true;
      }
    }
    return false;
  }

  if (tryMove()) return;
  var obs = new MutationObserver(function () { if (tryMove()) obs.disconnect(); });
  obs.observe(document.body, { childList: true, subtree: true });
  setTimeout(function () { obs.disconnect(); }, 15000);
})();
