<template>
  <v-container>
    
<DataViewer :source="source" :headers="headers" :create="create" :title="title" :show="show" />
  </v-container>

</template>
<script>
import DataViewer from '@/components/viewers/dataviewer.vue'
export default {
      name: 'supplierIndex',
    components:{
        DataViewer,
        
    },
      data(){
          return{
              title:'Suppliers',
              source: '/api/supplier',
              create: '/suppliers/create',
              show: '/suppliers',
              headers:[
                { text: 'Code', value: 'code' },
                { text: 'Name', value: 'name' },
                { text: 'Company', value: 'company' },
                { text: 'Address', value: 'address' },
                { text: 'Phone', value: 'phone' },
                { text: 'Email', value: 'email' },
                { text: 'Actions', value: 'actions', sortable: false },
              ]
          }
      },
}
</script>

<style>

</style>