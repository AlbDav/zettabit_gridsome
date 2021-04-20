<template>
  <div class="layout">
    <header class="header">
      <nav class="nav shadow-2xl">
        <g-link class="nav__link" to="/">
		  <button>
			  <span class="icon-zettabit"></span>
		  </button>
		</g-link>
        <g-link class="nav__link" to="/home">
		  <button>Home</button>
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
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

nav {
	border-radius: 15px;
	background: linear-gradient(145deg, #ba181b, #a4161a);
	/*box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);*/
}

nav button{
	padding: 0.75rem 1.25rem;
	color: #d3d3d3;
	font-weight: bold;
}

.nav__link:hover button, .nav__link.active--exact button {
	color: white;
}
</style>
