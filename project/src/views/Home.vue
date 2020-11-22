<template>
  <div id="home">
    <div class="Intro">
      <h1>Welcome to Charile the Chore Checker!</h1>
      <h2>What chores do we have to do today?</h2>
    </div>
    <div id="table">
      <trackerTable />
    </div>
  </div>
</template>

<script>
import trackerTable from '@/components/trackerTable.vue'

export default {
  name: 'Home',
  components: {
    trackerTable
  }
}
</script>

<style scoped>
.Intro{
  text-align:center;
}

#table{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
