<template>
  <div class="layout">
    <header class="header mx-auto w-10/12">
      <nav class="nav shadow-lg rounded-xl w-full bg-white">
        <g-link class="nav__link" to="/">
		  <button>
			  <span class="icon-zettabit"></span>
		  </button>
		</g-link>
        <g-link class="nav__link" to="/categories">
		  <button>Categories</button>
		</g-link>
        <g-link class="nav__link" to="/about/">
		  <button>About</button>
		</g-link>
      </nav>
    </header>
    <slot/>
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

nav button{
	padding: 0.75rem 1.25rem;
	font-weight: bold;
}

.nav__link:hover button, .nav__link.active--exact button {
	@apply text-red-700;
}
</style>
