<template>
  <div class="layout">
    <header class="header fixed top-0 left-0 w-full z-50">
      <nav class="nav mx-auto w-10/12 shadow-lg rounded-xl
	              bg-white glass-effect">
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
	<div class="content">
      <slot/>
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
	opacity: 0.9;
	backdrop-filter: blur(10px);
}

nav button{
	padding: 0.75rem 1.25rem;
	font-weight: bold;
}

.nav__link:hover button, .nav__link.active--exact button {
	@apply text-red-700;
}

.content{
	margin-top: 80px;
}
</style>
