<template>
  <div>
  <div class="text center" v-if="$auth.isAuthenticated">
    <h1 class="mb-4">Days Since</h1>
    Hello
  </div>
  </div>
</template>

<script>
export default {
  name: "List"
};
</script>
