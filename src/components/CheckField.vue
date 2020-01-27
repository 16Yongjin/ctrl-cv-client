<template lang="pug">
.check-field.md.is-horizontal
  .label
    label {{ label }}
  .body
    .check-field
      .control {{ value }}
</template>

<script>
export default {
  props: ["label", "value"]
};
</script>

<style scoped>
.label {
  color: #4a4a4a;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
}

.check-field.is-horizontal {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.body > .check-field {
  -ms-flex-negative: 1;
  flex-shrink: 1;
}

.label {
  text-align: right;
}

.label {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-right: 1.5rem;
  text-align: right;
}

.body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 5;
  -ms-flex-positive: 5;
  flex-grow: 5;
  -ms-flex-negative: 1;
  flex-shrink: 1;
}

.control {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  color: #000;
  position: relative;
  text-align: left;
}
</style>
