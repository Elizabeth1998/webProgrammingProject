<template>
  <div>
    <div class="home">
      <h1>Welcome to Charile the Chore Checker!</h1>
      <h2>What chores do we have to do today?</h2>
    </div>
    <trackerTable />
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
