<template> 
<v-container fluid>
                <v-row> 
               
  <v-card v-if="form"
            class="mx-auto"
          >
            <v-row>
              <v-col 
                  cols="12" md="6">
            <v-card-title class="display-1"> Name:   {{form.name}}</v-card-title>
            <v-card-title >Company:   {{form.company}}</v-card-title>
            <v-card-title >Phone:   {{form.phone}}</v-card-title>
            <v-card-title >Email:   {{form.email}}</v-card-title>
              <p v-html="form.description"></p>
              
              </v-col>
                 <v-col
                  cols="12"
                  md="6"
                  >  
                  <v-img
                    :src="`${host}/${form.picture}`"
                    contain
                    max-height="200"
                    class="grey darken-4"
                  ></v-img>
                  </v-col></v-row>
            
          </v-card>
  </v-row>
</v-container>
</template>
<script>
 import axios from '@/axios'
import cons from '@/helpers/myconstants'


export default {
  name: "Customershow",
  data(){
    return{
        form:{
        },
        show: false,
        errs:{},
        option:{},
        services:[],
        title:'Create',
        init:'api/supplier',
        redirect: '/suppliers',
        store: 'api/supplier',
        method: 'post',
        snackbar:false,
        timeout:3000
    }
  },
  created(){
      this.fetchData()
      this.host = cons.host
  },
  methods:{
    Edit(){
      this.$router.push(`${this.redirect}/${this.$route.params.code}/edit`)
    },
    Back(){
      this.$router.push(this.redirect)
    },
  
  async fetchData(){
      try{
              this.$store.commit("setLoaderTrue")
          const {data} = await axios.get(`${this.store}/${this.$route.params.code}`)
          this.form = data
          if (data.services == undefined){
            this.form.services = []
            this.$store.commit("setLoader")
            return
          }
          if (data.colors == undefined){
            this.form.colors = []
            this.$store.commit("setLoader")
            return
          }
          this.form.colors = data.colors
          this.form.services = data.services

          // console.log(this.services)
                this.$store.commit("setLoader")
        }catch(err){
         this.snackbar = true
        //   console.log(err)
        this.errs = err.response.data
                this.$store.commit("setLoader")
        }
    }
  },    
  }
</script>

<style>

.green{
color: green;
}
</style>