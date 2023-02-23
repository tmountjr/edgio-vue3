<script setup lang="ts">
import { ref, onMounted } from "vue";

interface ICoffee {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}

const coffees = ref<ICoffee[]>([]);

onMounted(async () => {
  const resp = await fetch("/api/coffee");
  try {
    coffees.value = await resp.json();
  } catch (e) {
    coffees.value = [
      {
        title: "Black",
        description:
          "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
        ingredients: ["Coffee"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        id: 1,
      },
    ];
  }
});
</script>

<template>
  <div class="coffee">
    <ul>
      <li v-for="coffee in coffees" :key="coffee.id">
        <p><strong>Title: </strong> {{ coffee.title }}</p>
        <p><strong>Description: </strong> {{ coffee.description }}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li
            v-for="(ingredient, index) in coffee.ingredients"
            :key="`${coffee.id}-${index}`"
          >
            {{ ingredient }}
          </li>
        </ul>
        <p><strong>Image: </strong></p>
        <img :src="coffee.image" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .coffee {
    min-height: 100vh;
  }

  ul li {
    display: flex;
    flex-direction: column;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
}
</style>
