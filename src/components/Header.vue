<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'


const navItems = [
  { name: 'Home', url: '/' },
  { name: 'History', url: '/history' },
  { name: 'About Me', url: '/about' },
]

</script>


<template>
    <header class="flex items-center gap-4 p-4 w-full sticky top-0 bg-white/50 backdrop-blur-md h-15">
        <h2 class="text-3xl font-bold mr-auto">
            Portfolio
        </h2>
        <template v-for="(item, index) in navItems" :key="item.name" >
            <Button asChild variant="ghost" size="lg" >
                <router-link :to="item.url" class="text-black">
                    {{ item.name }}
                </router-link>
            </Button>
            <Separator v-if="index < navItems.length - 1" orientation="vertical" />
        </template>
    </header>
</template>
