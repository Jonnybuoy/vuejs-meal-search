<template>
  <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  <div class="flex flex-wrap justify-center gap-2 mt-2 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters.split('')"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'
import Meals from '../components/Meals.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<style></style>
