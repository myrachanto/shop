<template> 
<v-container class="">
                <v-row>
                  <v-col cols="12" sm="10" md="10">
               <v-card v-if="form"
            class="mx-auto"
          >
           <!-- <div
           class="height=300px"
           style="background:#CFD8DC"
           >
            <div class="d-flex justify-center">
              
            </div>  
            </div> -->
            <v-container>
            <v-row>
              <v-col cols="12" md="10" sm="10">
                 <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    Page:<span class="greener">{{form.page}}</span>
                    </v-card>
                  </v-col><v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    Title:<span class="greener">{{form.title}}</span>
                    </v-card>
                  </v-col>
                </v-row>   
                <v-row><v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    Meta:<span class="greener">{{form.meta}}</span>
                    </v-card>
                  </v-col><v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    Header one:<span class="greener">{{form.header_1}}</span>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row><v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    header two:<span class="greener">{{form.header_2}}</span>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row><v-col cols="12" sm="12" md="12">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    Footer:<span class="greener">{{form.footer}}</span>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              </v-row>
            </v-container>

          
          <div class="text-center mt-3">
                      <v-btn class="ma-3" dark @click="Back()">Back</v-btn>
                      <v-btn class="ma-3" color="blue accent-3" dark @click="Edit(form.code)">Edit</v-btn>
                    </div>
          </v-card>
                  </v-col>
  </v-row>
</v-container>
</template>
<script>
 import axios from '@/axios'
import cons from '@/helpers/myconstants'


export default {
  name: "seosinfo",
  data(){
    return{
        form:{
        },
        show: false,
        errs:{},
        option:{},
        title:'Create',
        init:'api/seos',
        redirect: '/seos',
        store: 'api/seos',
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

</style>