<script setup lang="ts">
import { getTechColor } from '@/lib/constants'
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

interface Props {
  title?: string
  description?: string
  tags?: string[]
  imageUrl?: string
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Card Title',
  description: 'Card Description',
  tags: () => ['Vue', 'TypeScript'],
  imageUrl: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
  imageAlt: 'Product Image',
})
</script>

<template>
  <AspectRatio :ratio="13 / 9" class="bg-muted rounded-lg group">
    <img
      :src="imageUrl"
      :alt="imageAlt"
      class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
    >
    <Card class="absolute 
        bottom-0
        left-0
        right-0
        top-[50%]
        bg-white/50 
        backdrop-blur-md 
        opacity-0 
        transition-opacity 
        duration-300 
        group-hover:opacity-100"
    >
        <CardHeader>
            <CardTitle class="text-3xl">{{ title }}</CardTitle>
            <TagsInput 
                :model-value="tags" 
                class="w-full 
                bg-transparent 
                border-none 
                shadow-none 
                px-0 
                gap-2"
            >
                <TagsInputItem 
                    v-for="item in tags" 
                    :key="item" 
                    :value="item"
                    :class="[getTechColor(item), 'h-7 px-1']"
                >
                    <TagsInputItemText />
                </TagsInputItem>
            </TagsInput>
            </CardHeader>
            <CardFooter>
                <p>{{description}}</p>
            </CardFooter>
    </Card>
  </AspectRatio>
</template>