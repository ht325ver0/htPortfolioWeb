<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const navItems = [
  { name: 'Home' },
  { name: 'History' },
  { name: 'About Me' },
]

</script>


<template>
    <header class="flex items-center gap-4 p-4 w-full sticky top-0 bg-white/50 backdrop-blur-md h-15">
        <h2 class="text-3xl font-bold mr-auto">
            Portfolio
        </h2>
        <template v-for="(item, index) in navItems" :key="item.name">
            <Button variant="ghost" size="lg">
                {{ item.name }}
            </Button>
            <Separator v-if="index < navItems.length - 1" orientation="vertical" />
        </template>
    </header>
</template>
