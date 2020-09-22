<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <ChildComponent title="pass to children" message="pass to children New Message" />
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  name: 'HelloWorld',
  components: {
    ChildComponent
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

