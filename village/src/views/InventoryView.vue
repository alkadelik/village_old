<template>
<body>
	<form class="upload-form">
		<h1>Upload Image</h1>
		<label for="image-name">Image Name:</label>
		<input type="text" name="image-name" v-model="product_name" required>
		<label for="image-file">Select Image:</label>
		<input type="file" name="image-file" accept="image/*" @change="getImage($event)" required>
		<button @click="addProduct()">Upload</button>
	</form>
	<div>
		<h4>Products</h4>
		<ul>
			<li v-for="product, i in products" :key="i">{{ product.name }} {{ product.img }} {{ product.qty }}</li>
		</ul>
	</div>
</body>
</template>

<script>
import { mapGetters } from 'vuex'
// import HelloWorld from '@/components/HelloWorld.vue'

import {
	addProduct,
	loadProducts,
} from '@/services/apiServices'

export default {
  name: 'InventoryView',
  components: {
    // HelloWorld
  },
	data: () => ({
		img_file: null,
		product_name: '',
	}),
	methods: {
		addProduct() {

		},
		getImage(event) {
			this.img_file = event.target.files[0]
			addProduct()
		}
	},
	computed: {
		...mapGetters({
			products: 'getProducts',
		})
	},
	mounted() {
		loadProducts()
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

input[type="text"], input[type="file"] {
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