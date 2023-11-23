<script setup lang="ts">
import type { ExtractPublicPropTypes } from 'vue';
import { RouterView } from 'vue-router'
const propsOptions = {
  foo: String,
  bar: Boolean,
  baz: {
    type: Number,
    required: true
  },
  qux: {
    type: Number,
    default: 1
  }
} as const

type Props = ExtractPublicPropTypes<typeof propsOptions>
// {
//   foo?: string,
//   bar: boolean,
//   baz: number,
//   qux: number
// }
</script>

<template>
  <RouterView />
</template>
