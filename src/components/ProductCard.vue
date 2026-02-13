<script setup lang="ts">
import { ref } from 'vue'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { 
    TagsInput, 
    TagsInputItem, 
    TagsInputItemText } 
from '@/components/ui/tags-input'

const props = defineProps({
    title: String,
    description: String,
    tags: Array,
})

const frameworksRef = ref(['Vue', 'TypeScript'])
</script>

<template>
  <AspectRatio :ratio="13 / 9" class="bg-muted rounded-lg group">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
    >
    <Card class="absolute 
        bottom-0
        left-0
        right-0
        top-50
        bg-white/50 
        backdrop-blur-md 
        opacity-0 
        transition-opacity 
        duration-300 
        group-hover:opacity-100"
    >
        <CardHeader>
            <CardTitle class="text-3xl">Card Title</CardTitle>
            <TagsInput 
                v-model="frameworksRef" 
                class="w-full 
                bg-transparent 
                border-none 
                shadow-none 
                px-0 
                gap-2"
            >
                <TagsInputItem 
                    v-for="item in frameworksRef" 
                    :key="item" 
                    :value="item"
                    class="bg-white/100"
                >
                    <TagsInputItemText />
                </TagsInputItem>
            </TagsInput>
            </CardHeader>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
    </Card>
  </AspectRatio>
</template>