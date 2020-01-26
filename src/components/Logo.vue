<template>
  <h2 class="title">ctrl<span class="cv">cv</span></h2>
</template>

<style scoped>
.cv {
  position: relative;
  background-color: #00d1b2;
  color: #fff;
  margin: 0;
  padding: 0px 5px 3px 5px;
  margin-left: 6px;
  border-radius: 2px;
}

.cv:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-style: solid;
  border-width: 0 10px 10px 0;
  border-color: #ddd #fff;
  transition: all ease 0.5s;
}
</style>
