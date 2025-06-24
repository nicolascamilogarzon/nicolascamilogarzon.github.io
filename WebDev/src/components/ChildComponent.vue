<template>
    <div>
      <h2>{{ title }}</h2>
      <p>Hello from child component!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildComponent',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: blue;
  }

  p {
    color:grey
   }
  </style>
  