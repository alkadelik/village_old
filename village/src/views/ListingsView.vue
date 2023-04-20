<template>
<div class="todo-list">
  <input type="text" placeholder="Search" v-model="search">
  <button @click="search">Search</button>
  <h2>To-Do List</h2>
  <ul>
    <li v-for="product, i in listings" :key="i">
      <label for="task1">{{ product.name }}</label>
      <label for="task1">{{ product.image }}</label>
      <label for="task1">{{ product.qty }}</label>
      <button class="done-btn" @click="confirmationModal('sold_out', 3)">Sold Out</button>
      <button class="snooze-btn">+</button>
      <button class="snooze-btn">-</button>
    </li>
  </ul>
</div>

</template>

<script>
import { mapGetters } from 'vuex';
import {searchListings} from '@/services/apiServices'
export default {
  name: 'ListingsView',
  components: {

  },
  data: ()=> ({
    search: '',
    callers: [{
      sold_out: 'sold_out',
    }],
  }),
  methods: {
    confirmationModal(caller, id) { // make accessible from all components and views
      // raise confirmation modal
      this.confirmationResponse(id)
    },
    confirmationResponse(id) {
      this.confirmation != true? '' : this.soldOut(id)
    },
    dosearch() {
      searchListings(this.search)
    },
    soldOut() {
      this.confirmModal()
      // confirm if user wants to mark as sold
        // cancel / continue

      // if continue, call sold out api on product
    }
  },
  computed: {
    ...mapGetters({
      listings: 'getListings'
    })
  }
}
</script>

<style scoped>
.todo-list {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.todo-list h2 {
  margin-top: 0;
}

.todo-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.todo-list input[type="checkbox"] {
  margin-right: 10px;
}

.todo-list label {
  flex-grow: 1;
}

.todo-list button {
  margin-left: 10px;
  border: none;
  background-color: #ccc;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.todo-list button:hover {
  background-color: #999;
}

.todo-list .done-btn {
  background-color: #008000;
}

.todo-list .done-btn:hover {
  background-color: #005000;
}

.todo-list .snooze-btn {
  background-color: #ffa500;
}

.todo-list .snooze-btn:hover {
  background-color: #ff8000;
}
</style>