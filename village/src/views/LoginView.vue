<template>
	<form class="login-form">
		<h1>Login</h1>
		<label for="username">Username:</label>
		<input type="text" id="username" name="username" required>
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required>
		<button type="submit">Login</button>
	</form>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'InventoryView',
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

h1 {
	margin-bottom: 1rem;
	font-weight: bold;
	font-size: 2rem;
}

label {
	display: block;
	margin-bottom: 0.5rem;
}

input[type="text"], input[type="password"] {
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 1rem;
	width: 100%;
}

button[type="submit"] {
	background-color: #333;
	color: #fff;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

button[type="submit"]:hover {
	background-color: #666;
}

</style>