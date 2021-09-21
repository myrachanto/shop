<template>
<div>
 <router-view></router-view>
 <loaders />
  </div>
</template>

<script>
import loaders from './components/ui/loaders.vue';

export default {
  components: { loaders },
  name: "Chantosweb",

  data: () => {
    return{

      }
  }
};
</script>
