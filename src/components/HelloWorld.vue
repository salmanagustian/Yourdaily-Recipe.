<template>
  <div class="hello">
    <h1 class="text-amber-200 text-2xl">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
