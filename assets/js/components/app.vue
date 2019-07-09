<template>
    <h1> {{title}} </h1>
    <h5> greeting() </h5>
</template>
<script>
  module.export ={
    data: function{
      return {
        title: 'درمانکده'
      }
    },
    methods: {
      greeting : function () {
        return 'سلام این یه فانکشن رندمه'
      }
    }
  }
</script>


