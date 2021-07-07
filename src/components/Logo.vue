<template>
  <!-- a 태그와 같은 역할 -->
  <RouterLink
    to="/"
    class="logo">
    <span>SAKURaAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
   font-family: "Oswald", sans-serif;
   font-size: 20px;
   color: $black;
   text-decoration: none;
   &:hover {
     color: $black; 
   }
   span {
     color: $primary;
   }
}
</style>