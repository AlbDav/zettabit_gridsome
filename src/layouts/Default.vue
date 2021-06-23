<template>
  <div class="layout">
    <header class="header">
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

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  overflow-y: scroll;
  @apply bg-gray-50;
  @apply text-gray-800;
}

.layout {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
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
