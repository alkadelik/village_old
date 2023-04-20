<template>
<body>
	<header>
		<nav>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	</header>

	<section class="hero">
		<div class="hero-content">
			<h1>Welcome to our website</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum orci vel nisl rhoncus, in venenatis metus gravida. Suspendisse ornare urna non efficitur finibus.</p>
      <RouterLink :to="{ name: 'LoginPage'}">Login</RouterLink>
		</div>
	</section>

	<section class="features">
		<div class="feature">
			<img src="icon-1.png">
			<h2>Feature 1</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum orci vel nisl rhoncus, in venenatis metus gravida. Suspendisse ornare urna non efficitur finibus.</p>
		</div>

		<div class="feature">
			<img src="icon-2.png">
			<h2>Feature 2</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum orci vel nisl rhoncus, in venenatis metus gravida. Suspendisse ornare urna non efficitur finibus.</p>
		</div>

		<div class="feature">
			<img src="icon-3.png">
			<h2>Feature 3</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum orci vel nisl rhoncus, in venenatis metus gravida. Suspendisse ornare urna non efficitur finibus.</p>
		</div>
	</section>

	<footer>
		<p>&copy; 2023 My Company</p>
	</footer>
</body>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'LandingView',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
/* Reset styles */

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* Typography */

body {
	font-family: Arial, sans-serif;
	font-size: 16px;
	line-height: 1.5;
	color: #333;
}

h1, h2 {
	margin-bottom: 1rem;
	font-weight: bold;
}

h1 {
	font-size: 3rem;
}

h2 {
	font-size: 2rem;
}

p {
	margin-bottom: 1rem;
}

/* Header */

header {
	background-color: #333;
	color: #fff;
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}

nav ul {
	list-style: none;
	display: flex;
}

nav li {
	margin-left: 1rem;
}

nav a {
	color: #fff;
	text-decoration: none;
}

/* Hero */

.hero {
	/* background-image: url('hero-bg.jpg'); */
	background-size: cover;
	background-position: center;
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.hero-content {
	/* max-width:  */
}
</style>
