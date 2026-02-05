<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
</script>


<template>
    <header class="justify-end flex items-center gap-4 p-4 w-full sticky top-0 bg-white/50 backdrop-blur-md h-20">
        <Button variant="ghost" size="lg">
            Home
        </Button>
        
        <Separator orientation="vertical" />
        
        <Button variant="ghost" size="lg">
            History
        </Button>
        
        <Separator orientation="vertical" />
        
        <Button variant="ghost" size="lg">
            About Me
        </Button>
    </header>
</template>
