<template>
  <v-container>
    
<DataViewer :source="source" :headers="headers" :title="title" :show="show"/>
  </v-container>

</template>
<script>
import DataViewer from '@/components/viewers/dataviewerorder.vue'
export default {
      name: 'Products',
    components:{
        DataViewer,
    },
      data(){
          return{
              title:'Orders',
              source: '/api/orders', 
              show: '/orders',
              headers:[
                { text: 'Name', value: 'name' },
                { text: 'Phone', value: 'phone' },
                { text: 'Email', value: 'email' },
                { text: 'Order Id', value: 'order' },
                { text: 'Amount', value: 'amount' },
                { text: 'Status', value: 'status' },
                { text: 'Delivered', value: 'delivered' },
                { text: 'Action', value: 'actions' }
              ]
          }
      },
}
</script>

<style>

</style>