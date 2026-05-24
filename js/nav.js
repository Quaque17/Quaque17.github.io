// nav.js — inyecta la barra de navegación en todas las páginas
// Ajusta los href según la profundidad de carpeta si fuera necesario.
(function() {
  const nav = `
<nav>
  <a href="index.html" class="nav-logo">Quique &amp; Susana</a>
  <ul class="nav-links">
    <li><a href="nuestra-historia.html">Nuestra Historia</a></li>
    <li class="nav-dropdown">
      <a href="#">La Celebración ▾</a>
      <ul class="nav-dropdown-menu">
        <li><a href="la-ceremonia.html">La Ceremonia</a></li>
        <li><a href="el-fin-de-semana.html">El Fin de Semana</a></li>
      </ul>
    </li>
    <li><a href="nos-hemos-casado.html">¡Nos Hemos Casado!</a></li>
    <li><a href="lista-de-boda.html">Lista de Boda</a></li>
  </ul>
  <button class="hamburger" aria-label="Menú">
    <span></span><span></span><span></span>
  </button>
</nav>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
})();
