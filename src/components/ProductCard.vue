<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <AspectRatio :ratio="13 / 9" class="bg-muted rounded-lg group">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
    >
    <Card class="absolute bottom-1 left-1 right-1 bg-white/50 backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <CardHeader>
      <CardTitle class="text-3xl">Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
  </AspectRatio>
</template>