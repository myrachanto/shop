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
            <v-row >
              <v-col md="6" >
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    Name:<span class="greener">{{form.name}}</span>
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
                    Altertag:<span class="greener"> {{form.altertag}}</span>
                    </v-card>
                    </v-col>
                </v-row>  
                <v-row><v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                   Category:<span class="greener"> {{form.category}}</span>
                    </v-card>
                  </v-col><v-col cols="12" sm="6" md="6">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    Major category:<span class="greener"> {{form.majorcat}}</span>
                    </v-card>
                  </v-col>
                </v-row>  
                <v-row>
                  <v-col md="12">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                   Price:<span class="greener">{{form.buyprice}}</span>
                    </v-card>
                  </v-col>
                </v-row> 
                <v-row>
                  <v-col md="12" class="mt-2">
                   <div v-if="form.colors">
                     <label>Colors</label>
                    <ul class="fleet" v-for="(item,i) in form.colors" :key="i">
                        <li class="rod">{{item.name}}</li>
                    </ul>
                   </div>
                  </v-col>
                </v-row>  
                <hr class="my-2"/>
                <v-row>
                  <v-col md="12">
                     <label>Sizes</label>
                   <div v-if="form.sizes">
                    <ul class="fleet" v-for="(item,i) in form.sizes" :key="i">
                        <li class="rod">{{item.name}} </li>
                    </ul>
                   </div>
                  </v-col>
                </v-row>              
              </v-col>
                 <v-col
                  cols="12"
                  md="6"
                  v-if="form.images.length > 0"
                  >  
                  <v-card v-for="(img, i) in form.images" :key="i" >
                  <v-img
                    :src="`${host}/${img.name}`"
                    contain
                    max-height="200"
                    class="grey darken-4"
                  ></v-img>
                </v-card>
                  </v-col></v-row>                  
                <hr class="my-2" />
                  <v-row>
                 <v-col
                  cols="12"
                  md="12">
                  <h2>Footer</h2>
              <p class="greener" v-html="form.footer"></p> 

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
  name: "Customershow",
  data(){
    return{
        form:{
            name:'',
            title:'',
            description:'',
            services:[],
            colors:[],
            images:[]
        },
        show: false,
        errs:{},
        option:{},
        services:[],
        title:'Create',
        init:'api/products',
        redirect: '/products',
        store: 'api/products',
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

.greener{
  color: green;
  margin-left: 10px;
}
.fleet{
  display: inline-block;
}
.rod{
  list-style: none;
  border: olive;
  background-color: gray;
  color: white;
  padding: 2px;
  /* border-radius: 20%; */
  min-width: 70px;
  text-align: center;
}
</style>