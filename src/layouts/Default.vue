<template>
  <div class="layout">
    <header class="header fixed top-0 left-0 w-full z-50">
      <nav
        class="nav mx-auto w-11/12 sm:w-10/12 shadow-lg rounded-xl glass-effect"
      >
        <g-link class="nav__link" to="/">
          <button aria-label="Home">
            <span class="icon-zettabit"></span>
          </button>
        </g-link>
        <g-link class="nav__link" to="/categories">
          <button>Categorie</button>
        </g-link>
        <!--         <g-link class="nav__link" to="/about/">
		  <button>About</button>
		</g-link> -->
      </nav>
    </header>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.layout {
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

nav button {
  padding: 0.75rem 1.25rem;
  font-weight: bold;
}

.nav__link:hover button,
.nav__link.active--exact button {
  @apply text-red-700;
}

.content {
  margin-top: 80px;
}
</style>
