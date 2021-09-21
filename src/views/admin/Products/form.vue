<template>  
<div>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="12">
          <v-card class="elevation-12">
                  <ValidationObserver
                    ref="observer"
                    v-slot="{}"
                  >
               <v-row class="fill-height">
                 
                 <v-col cols="12" md="12">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 teal--text text--accent-3">
                        {{title}}
                      </h1>
                      
                      <template >  
                                  <v-snackbar
                                  :timeout="timeout"
                                  v-model="snackbar"
                                  :value="true"
                                  right
                                  shaped
                                  bottom
                                  dismisable
                                  color="red"
                                >
                              <h2>{{errs.error}}</h2>
                              <p>{{errs.message}}</p>
                                </v-snackbar>
                            
                          </template>
                        <v-form>
                                 <v-container>
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      md="6"
                                    > <validation-provider
                                        v-slot="{ errors }"
                                        name="name"
                                        rules="required"
                                      >
                                      <v-text-field
                                        v-model="form.name"
                                        :error-messages="errors"      
                                        label="Name"
                                        required
                                      ></v-text-field>
                                      </validation-provider>
                                    </v-col>

                                    <v-col
                                      cols="12"
                                      md="6"
                                    ><validation-provider
                                        v-slot="{ errors }"
                                        name="Title"
                                        rules="required|"
                                      >
                                      <v-text-field
                                        v-model="form.title"
                                        label="Title"
                                        :error-messages="errors"   
                                        required
                                      ></v-text-field>
                                      </validation-provider>
                                    </v-col> 
                                  </v-row>
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      md="6"
                                    > <validation-provider
                                        v-slot="{ errors }"
                                        name="meta"
                                        rules="required"
                                      >
                                      <v-text-field
                                        v-model="form.meta"
                                        :error-messages="errors"      
                                        label="Meta"
                                        required
                                      ></v-text-field>
                                      </validation-provider>
                                    </v-col>

                                    <v-col
                                      cols="12"
                                      md="6"
                                    ><validation-provider
                                        v-slot="{ errors }"
                                        name="altertag"
                                        rules="required|"
                                      >
                                      <v-text-field
                                        v-model="form.altertag"
                                        label="Altertag"
                                        :error-messages="errors"   
                                        required
                                      ></v-text-field>
                                      </validation-provider>
                                    </v-col> 
                                  </v-row>
                                      <v-row>
                                  <v-col
                                    cols="12"
                                    md="6"
                                    v-if="supercategory"
                                  >
                                   <v-autocomplete
                                        v-model="supercats"
                                        :items="supercategory"
                                        auto-select-first
                                        chips
                                        clearable
                                        deletable-chips
                                        multiple
                                        small-chips
                                        dense
                                        item-text="name"
                                        item-value="name"
                                        label="Search super Category..."
                                        @change="GetMajorcategory(supercats)"
                                      >
                                      </v-autocomplete>
                                  </v-col>
                                  <v-col
                                      cols="12"
                                      md="6"
                                      v-if="supercati"
                                    >
                                   <v-autocomplete
                                        v-model="categori"
                                        :items="categis"
                                        auto-select-first
                                        chips
                                        clearable
                                        deletable-chips
                                        multiple
                                        small-chips
                                        dense
                                        item-text="name"
                                        item-value="name"
                                        label="Search super Category..."
                                      >
                                      </v-autocomplete>
                                    </v-col>
                                   </v-row>
                                   <v-row>
                                  <v-col
                                    cols="12"
                                    md="6"
                                  >
                                   <v-autocomplete
                                        v-model="majorcat"
                                        :items="majorcategory"
                                        auto-select-first
                                        chips
                                        clearable
                                        deletable-chips
                                        multiple
                                        small-chips
                                        dense
                                        item-text="name"
                                        item-value="name"
                                        label="Search NAv Menu..."
                                      >
                                        
                                      </v-autocomplete>
                                  </v-col>
                                   </v-row>
                                   <v-row>
                                    <v-col
                                      cols="12"
                                      md="6"
                                    >
                                    <v-btn class="primary" @click="createitem">Add Specifications</v-btn>
                                    <div v-if="form.services">
                                          <ul v-for="(item,i) in form.services" :key="i" >
                                            <li>{{item.name}} at {{item.price}}<v-btn color="red" class="ma-1" @click="remove(i)">X</v-btn></li>
                                          </ul>
                                    </div>
                                    <div v-else>Add Specs</div>
                                    </v-col>                                    
                                    <v-col
                                      cols="12"
                                      md="4"
                                    ><input type="checkbox"  v-model="form.newarrivals" name="newarrivals">
                                      <label for="newarrivals"> Newarrivals</label>                                    
                                    </v-col>
                                   </v-row>
                                   <v-row>
                                    <v-col
                                      cols="12"
                                      md="12"
                                    > 
                                    <vue-editor v-model="form.description"></vue-editor>
                                    </v-col>
                                   </v-row>
                                   
                                   <v-row>
                                    <v-col
                                      cols="12"
                                      md="12"
                                    > 
                                    <h2>Product footer</h2>
                                    <vue-editor v-model="form.footer"></vue-editor>
                                    </v-col>
                                   </v-row>
                                   <v-row>
                                    <v-col
                                      cols="12"
                                      md="12"
                                    >   <v-file-input
                                        accept="image/*"
                                        label="Change Image"
                                        required
                                        type="file"
                                        ref="file" 
                                        multiple="multiple"
                                        @change="onFile"
                                      ></v-file-input>
                                      </v-col>
                                   </v-row>
                                  
                                </v-container>
                        
                      </v-form>
                      <!-- <h3 class="text-center mt-3">have an account with us </h3> -->
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn class="ma-3" dark @click="Back()">Back</v-btn>
                      <v-btn class="ma-3" color="teal accent-3" @click="save()">Save</v-btn>
                    </div>
                    </v-col>
               </v-row>
                  </ValidationObserver>
              
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <item /> -->
    <itemmodal :dialogitemi="dialogitemi" :itemiclose="itemiclose" :savor="savor"/>
    <!--<tax :dialogtax="dialogtax" :taxclose="taxclose" :taxs="taxs"/> -->
  <categorymodal :dialogcategory="dialogcategory" :categoryclose="categoryclose" :majorcode="majorc"/>
  <majorcatmodal :dialogmajorcat="dialogmajorcat" :majorcatclose="majorcatclose"/>

</div>
</template>

<script>
 import axios from '../../../axios'
import cons from '@/helpers/myconstants'
import categorymodal from '@/components/modals/category'
import majorcatmodal from '@/components/modals/majorcat'
import itemmodal from '@/components/modals/item'
import { VueEditor } from "vue2-editor"
import { supercategory, majorcategory, category } from '@/helpers/data'

  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
// import Item from '../../../components/modals/item.vue'
 setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

export default {
  name: "login",
  components: {
      ValidationProvider,
      ValidationObserver,
      categorymodal,
      majorcatmodal,
      VueEditor,
      itemmodal,
    },
  data(){
    return{
        form:{
            name:'',
            title:'',
            description:'',
            footer: '',
            supercategory: '',
            majorcat:'',
            meta: '',
            altertag: '',
            category:'',
            price:'',
            newarrivals: '',
            picture:null,
            services: []
        },
        dialogcategory: false,
        dialogmajorcat: false,
        dialogitemi: false,
        dialogcolori: false,
        host:'',
        majorcati:'',
        majorcat:[],
        supercati: {},
        supercats: [],
        categis: [],
        majorc: '',
        categori: [],
        majorcats:[],
        categorylist:[],
        services: [],
        files: [],
        filesa: [],
        errs:{},
        option:[],
        suppliers: [],
        title:'Create Product',
        init:'api/products/view',
        redirect: '/products',
        store: 'api/products',
        categs: 'api/categorys',
        snackbar:false,
        timeout:3000,
        superc: {},
        category,
        majorcategory,
        supercategory
    }
  },
  created(){
      this.host = cons.host
  },
  methods:{
    GetMajorcategory(name) {
      if (name) {
        // console.log('555555555555555555', name)
        name.map((item) => {
          return this.getresults(item)
        })
        // console.log('fffffffffffff', this.categis)
      }
    },
    getresults (name) {
      this.superc = this.supercategory.find(m => {
          return m.name == name
      })
      this.categis.push(...this.superc.category)
    },
    GetMajcategory(name) {
      if (name) {
        // console.log('++++++++++++++++++++++++++', name)
        // console.log(this.majorcats)
        // let majorcatinfo = this.majorcategory.find(m => {
        //   return m.name == name
        // })
        // console.log(majorcatinfo)
        // this.majorcati = majorcatinfo.name
        // this.categorylist = majorcatinfo.category
      }
    },
    onFile(e){
      console.log(e)
      this.form.picture = "true"
      this.files = e
    },
    Back(){
      this.$router.push(this.redirect)
    },
    View(code){
      this.$router.push(`${this.redirect}/show/${code }`)
    },
    savor(payload){
      this.form.services.push(payload)
      console.log("services", this.form.services)
    },
    remove(index){
      this.form.services.splice(index,1)
    },
    dashurl(array) {
      return  array.map((item) => {
        return {name:item.split(' ').join('-')}
      })
    },
   async save(){
          try{
            if ( this.form.picture === "true"){
                this.$store.commit("setLoaderTrue")
                  let fd = new FormData();
                  console.log("this.files", this.files)
                  // fd.append("pictures", this.files)
                  for( var i = 0; i < this.files.length; i++ ){
                      let file = this.files[i];
                      fd.append('pictures', file);
                  }
                  // fd.append("picture", this.form.picture, this.form.picture.name)
                  fd.append("name", this.form.name)
                  fd.append("title", this.form.title)
                  fd.append("meta", this.form.meta)
                  fd.append("altertag", this.form.name.split(' ').join('-'))
                  fd.append("url", this.form.name.split(' ').join('-'))
                  fd.append("description", this.form.description)
                  fd.append("footer", this.form.footer)
                  fd.append("majorcategory", JSON.stringify(this.dashurl(this.majorcat)))
                  fd.append("supercategory", JSON.stringify(this.dashurl(this.supercats)))
                  fd.append("category", JSON.stringify(this.dashurl(this.categori)))
                  fd.append("newarrivals", this.form.newarrivals)
                  fd.append("services", JSON.stringify(this.form.services))
                  // fd.append("colors", JSON.stringify(this.form.colors))
              // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
              const {data} = await axios.post(`${this.store}`, 
                fd ,{'Content-Type': 'multipart/form-data'})

                  if(data){
                  this.$router.push(this.redirect)
                  }
                  this.$store.commit("setLoader")
            } else{
                this.$store.commit("setLoaderTrue")
                console.log(this.form.newarrivals)
                  let fd = new FormData();
                  fd.append("name", this.form.name)
                  fd.append("title", this.form.title)
                  fd.append("description", this.form.description)
                  fd.append("footer", this.form.footer)
                  fd.append("meta", this.form.meta)
                  fd.append("url", this.form.name.split(' ').join('-'))
                  fd.append("altertag", this.form.name.split(' ').join('-'))
                  fd.append("majorcategory", JSON.stringify(this.dashurl(this.majorcat)))
                  fd.append("supercategory", JSON.stringify(this.dashurl(this.supercats)))
                  fd.append("category", JSON.stringify(this.dashurl(this.categori)))
                  fd.append("newarrivals", this.form.newarrivals)
                  fd.append("services", JSON.stringify(this.form.services))
                  // fd.append("colors", JSON.stringify(this.form.colors))
              // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
              const {data} = await axios.post(`${this.store}`, 
                fd ,{'Content-Type': 'multipart/form-data'})

                  if(data){
                  this.$router.push(this.redirect)
                  }
                  this.$store.commit("setLoader")

            }
        }catch(err){
            this.snackbar = true
            this.errs = err
                this.$store.commit("setLoader")

        }

  },
  // async Getdata () {
  //   try{
  //     const {data} = await axios.get('api/supplier')
  //         this.suppliers = data
  //         console.log(data)

  //   }catch(err){
  //     console.log(err)
  //   }
  // },
    createcategory(){
      this.dialogcategory = true
    },
      categoryclose() {
        this.dialogcategory = false
      },
    createmajorcat(){
      this.dialogmajorcat = true 
    },
      majorcatclose() {
        this.dialogmajorcat = false
      },
    createitem(){
      this.dialogitemi = true
    },
      itemiclose() {
        this.dialogitemi = false
      },
    createcolor(){
      this.dialogcolori = true
    },
      coloriclose() {
        this.dialogcolori = false
      },
  }
  }
</script>

<style>

</style>