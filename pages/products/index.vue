<template>
<div>


</div>
</template>


  <script>  
  definePageMeta({
    layout: "products"
  })

export default {
  data () {
    return {
      data: '',
    }
  },
  async fetch() {
    const res = await this.$axios.get('https://fakestoreapi.com/products/')
    console.log(res.data)
  },
}
</script>