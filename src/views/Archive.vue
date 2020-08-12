<template>
  <div>
    <Archive />
    <hr />
  </div>
</template>

<script>
import Archive from "../components/Archive";

export default {
  name: "archive",
  components: {
    Archive
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
