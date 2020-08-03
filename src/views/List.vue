<template>
  <div>
    <List />
    <hr />
  </div>
</template>

<script>
import List from "../components/List";

export default {
  name: "list",
  components: {
    List
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
