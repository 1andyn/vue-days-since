<template>
  <div>
    <Settings />
    <hr />
  </div>
</template>

<script>
import Settings from "../components/Settings";

export default {
  name: "settings",
  components: {
    Settings
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
