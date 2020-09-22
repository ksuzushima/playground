<template>
  <h1>props: {{title}}</h1>
  <div>props: {{message}}</div>
  <div>data: {{dataString}}</div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

type Props = {
  title: string
  message?: string
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: ''
    },
  },
  setup(props: Props) {
    const {title, message} = props
    const dataString = ref('data string')
    return {
      title,
      message,
      dataString
    }
  },
  mounted() {
    console.log('Mounted !')
  }
})
</script>