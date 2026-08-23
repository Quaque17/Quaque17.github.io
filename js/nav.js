(function () {
  const nav = `
<nav>
  <a href="index.html" class="nav-logo">Quique &amp; Susana</a>
  <ul class="nav-links">
    <li><a href="nuestra-historia.html">Nuestra Historia</a></li>
    <li><a href="el-fin-de-semana.html">El Fin de Semana</a></li>
    <li><a href="alojamientos.html">Alojamientos</a></li>
    <li><a href="dudas.html">Dudas</a></li>
  </ul>
  <button class="hamburger" aria-label="Menú">
    <span></span><span></span><span></span>
  </button>
</nav>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
})();
