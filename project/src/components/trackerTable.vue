<template>
  <div class="vue-table">
    <table>
      <tr>
        <td><a><i class="material-icons">edit</i></a></td>
        <td>Item</td>
        <td>
          <a><i class="material-icons">check_box_outline_blank</i></a>
          <a><i class="material-icons">check_box</i></a>
        </td>
        <td><a><i class="material-icons">delete</i></a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';



table, th, td {
  border: 1px solid black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
