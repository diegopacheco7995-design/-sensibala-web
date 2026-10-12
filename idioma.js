// Elige el idioma: el guardado, o el del navegador (es / pt / en).
(function () {
  var guardado = null;
  try { guardado = localStorage.getItem('idioma'); } catch (e) {}
  var nav = (navigator.language || 'es').slice(0, 2);
  var idioma = guardado || (nav === 'pt' || nav === 'en' ? nav : 'es');

  function aplicar(i) {
    document.documentElement.lang = i;
    document.querySelectorAll('.idiomas button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.elegir === i));
    });
    try { localStorage.setItem('idioma', i); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.idiomas button').forEach(function (b) {
      b.addEventListener('click', function () { aplicar(b.dataset.elegir); });
    });
    aplicar(idioma);
  });
  document.documentElement.lang = idioma;
})();
