<template lang="html">
  <section class="row">
    <rocket v-for="rocket in rockets" :rocket="rocket" :removeRocket="removeRocket"></rocket>
  </section>
</template>

<script>
import Rocket from "./Rocket";

export default {
  name: "rocket-list",
  props: ["rockets", "removeRocket"],
  components: {
    Rocket
  }
};
</script>
