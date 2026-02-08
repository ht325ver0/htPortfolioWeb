<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'

</script>

<template>

    <h1>Home View</h1>
    <div class="grid grid-cols-3 gap-x-15 gap-y-20 p-20">
        <ProductCard v-for="n in 8" :key="n" />
    </div>
</template>