<template>  
<div>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="10">
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
                                      md="4"
                                    ><validation-provider
                                        v-slot="{ errors }"
                                        name="Price"
                                        rules="required|"
                                      >
                                      <v-text-field
                                        v-model="form.buyprice"
                                        label="price"
                                        :error-messages="errors"   
                                        required
                                        type="number"
                                      ></v-text-field>
                                      </validation-provider>
                                    </v-col>
                                  <v-col
                                    cols="12"
                                    md="4"
                                    v-if="majorcats"
                                  >
                                   <v-autocomplete
                                        v-model="majorcati"
                                        :items="majorcategory"
                                        chips
                                        clearable
                                        hide-details
                                        hide-selected
                                        item-text="name"
                                        item-value="name"
                                        label="Search majorcat..."
                                        @change="GetMajorcategory(majorcati)"
                                      >
                                        <template v-slot:no-data>
                                          <v-list-item>
                                            <v-list-item-title>
                                              Search for 
                                              <strong>majorcat</strong>
                                            </v-list-item-title>
                                          </v-list-item>
                                        </template>
                                        <template v-slot:selection="{ attr, on, item, selected }">
                                          <v-chip
                                            v-bind="attr"
                                            :input-value="selected"
                                            color="blue-grey"
                                            class="white--text"
                                            v-on="on"
                                          >
                                            <v-icon left>
                                              mdi-check-box-outline
                                            </v-icon>
                                            <span v-text="item.name"></span>
                                          </v-chip>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-avatar
                                            color="indigo"
                                            class="headline font-weight-light white--text"
                                          >
                                            {{ item.name.charAt(0) }}
                                          </v-list-item-avatar>
                                          <v-list-item-content>
                                            <v-list-item-title v-text="item.name"></v-list-item-title>
                                            <v-list-item-subtitle >{{item.title}}</v-list-item-subtitle>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <v-icon>mdi-check-box-outline</v-icon>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>
                                  </v-col>
                                  
                                  <v-col
                                      cols="12"
                                      md="4"
                                    >
                                   <v-autocomplete
                                        v-model="categoryi"
                                        :items="category"
                                        chips
                                        clearable
                                        hide-details
                                        hide-selected
                                        item-text="name"
                                        item-value="title"
                                        label="Search category..."
                                        @change="Getcategory(categoryi)"
                                      >
                                        <template v-slot:no-data>
                                          <v-list-item>
                                            <v-list-item-title>
                                              Search for 
                                              <strong>category</strong>
                                            </v-list-item-title>
                                          </v-list-item>
                                        </template>
                                        <template v-slot:selection="{ attr, on, item, selected }">
                                          <v-chip
                                            v-bind="attr"
                                            :input-value="selected"
                                            color="blue-grey"
                                            class="white--text"
                                            v-on="on"
                                          >
                                            <v-icon left>
                                              mdi-check-box-outline
                                            </v-icon>
                                            <span v-text="item.name"></span>
                                          </v-chip>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-avatar
                                            color="indigo"
                                            class="headline font-weight-light white--text"
                                          >
                                            {{ item.name.charAt(0) }}
                                          </v-list-item-avatar>
                                          <v-list-item-content>
                                            <v-list-item-title v-text="item.name"></v-list-item-title>
                                            <v-list-item-subtitle >{{item.title}}</v-list-item-subtitle>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <v-icon>mdi-check-box-outline</v-icon>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>
                                    </v-col>
                                   </v-row>
                                   <v-row>
                                    <v-col
                                      cols="12"
                                      md="4"
                                    >
                                    <v-btn class="primary" @click="createsizing">Add Size</v-btn>
                                    <div v-if="sizings">
                                          <ul v-for="(item,i) in sizings" :key="i" >
                                            <li>{{item.name}} <v-btn x-small color="red" class="ma-1" @click="removesizing(i)">X</v-btn></li>
                                          </ul>
                                    </div>
                                    </v-col>  
                                    <v-col
                                      cols="12"
                                      md="4"
                                    >
                                    <v-btn class="primary" @click="createcolor">Add Colors</v-btn>
                                    <div v-if="colors">
                                          <ul v-for="(col,i) in colors" :key="i" >
                                            <li>{{col.name}}<v-btn x-small color="red" class="ma-1" @click="removec(i)">X</v-btn></li>
                                          </ul>
                                    </div>
                                    </v-col>                                     
                                    <v-col
                                      cols="12"
                                      md="4"
                                    ><input type="checkbox"  v-model="form.newarrivals" name="newarrivals">
                                      <label for="newarrivals"> Newarrivals</label>                                    
                                    </v-col>
                                   </v-row>
                                   <!-- <v-row>
                                    <v-col
                                      cols="12"
                                      md="12"
                                    >
                                    <vue-editor v-model="form.description"></vue-editor>
                                    </v-col>
                                   </v-row>                                    -->
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
                                   <v-row v-if="form.images">
                                      <v-col
                                      cols="12"
                                      md="3"
                                      v-for="(img, i) in form.images" :key="i"
                                    >  
                                     <v-card  >
                                      <v-img
                                        :src="`${host}/${img.name}`"
                                        contain
                                        max-height="100"
                                        class="grey darken-4"
                                      ></v-img>
                                    </v-card>
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
    <itemmodal :dialogitemi="dialogitemi" :itemiclose="itemiclose" :savor="savor"/>
    <colort :dialogcolori="dialogcolori" :coloriclose="coloriclose" :colorsavor="colorsavor"/>
    <sizing :dialogsizingi="dialogsizingi" :sizingiclose="sizingiclose" :sizingsavor="sizingsavor"/>

</div>
</template>

<script>
// import Vue from 'vue'
 import axios from '../../../axios'
import cons from '@/helpers/myconstants'
import {majorcategory, category } from '@/helpers/data'
import itemmodal from '@/components/modals/item'
import { VueEditor } from "vue2-editor";

  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import Colort from '../../../components/modals/colort.vue'
import Sizing from '../../../components/modals/sizing.vue'
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
      // categorymodal,
      // majorcatmodal,
      Colort,
      VueEditor,
      itemmodal,
    Sizing
    },
  data(){
    return{
        form:{
            name:'',
            title:'',
            description:'',
            footer: '',
            meta: '',
            altertag: '',
            majorcat:'',
            category:'',
            buyprice:'',
            picture:null,
            services: [],
            newarrivals: '',
            colors: []
        },
        dialogsizingi: false,
        dialogitemi: false,
        dialogcolori: false,
        host:'',
        majorcati:{},
        majorc: '',
        categoryi:{},
        majorcats:[],
        categorylist:[],
        files: [],
        filesa: [],
        errs:{},
        option:[],
        colors: [],
        sizings: [],
        // services: [],
        title:'Edit Product',
        init:'api/products/view',
        redirect: '/products',
        store: 'api/products',
        majorcategs: 'api/majorcategorys',
        categs: 'api/categorys',
        snackbar:false,
        timeout:3000,
        category,
        majorcategory
    }
  },
  created(){
      this.fetchData(),
      this.host = cons.host
  },
  methods:{
    GetMajorcategory(name) {
      if (name) {
        console.log(name)
        // console.log(this.majorcats)
        const majorcatinfo = this.majorcategory.find(m => {
          return m.name == name
        })
        console.log("ccccccccccccc", majorcatinfo)
        this.majorc = majorcatinfo.majorcode
        this.form.majorcat = majorcatinfo.name
        this.categorylist = majorcatinfo.category
        // console.log(this.majorc)
      }
    },
    Getcategory(name) {
      if (name) {
        // console.log(name)
        // console.log(this.majorcats)
        const majorcatinfo = this.category.find(m => {
          return m.name == name
        })
        console.log("fffffffffff", majorcatinfo)
        this.form.category = majorcatinfo.name
        // console.log(this.majorc)
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
    } ,
    savor(payload){
      this.form.services.push(payload)
      console.log("services", this.form.services)
    },
    colorsavor(payload){
      const initArray = []
      initArray.push(payload)
      this.colors = [...this.colors, ...initArray]
      console.log("colors", this.colors)
    },
    sizingsavor(payload){
      this.sizings.push(payload)
      console.log("sizings", this.sizings)
    },
    remove(index){
      this.form.services.splice(index,1)
    },
    removec(i){
      this.form.colors.splice(i,1)
    },
    removesizing(index){
      this.sizings.splice(index,1)
    },
    setUrl (name) {
      console.log(name)
      this.url = name.split(' ').join('-')
    },
   async save(){
          try{
            console.log("mmmmmmmmmmmmmmmmmmmm", this.form.picture)
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
                  fd.append("image", "yes")
                  fd.append("name", this.form.name)
                  fd.append("title", this.form.title)
                  fd.append("meta", this.form.meta)
                  fd.append("url", this.form.name.split(' ').join('-'))
                  fd.append("altertag", this.form.altertag)
                  fd.append("description", this.form.description)
                  fd.append("footer", this.form.footer)
                  fd.append("majorcategory", this.form.majorcat)
                  fd.append("category", this.form.category)
                  fd.append("newarrivals", this.form.newarrivals)
                  fd.append("services", JSON.stringify(this.form.services))
                  fd.append("colors", JSON.stringify(this.colors))
                  fd.append("buyprice", this.form.buyprice)
                  fd.append("sizes", JSON.stringify(this.sizings))
              // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
              const {data} = await axios.put(`${this.store}/${this.$route.params.code}`, 
                fd ,{'Content-Type': 'multipart/form-data'})

                  if(data){
                   this.$router.push(`${this.redirect}/show/${this.$route.params.code }`)
                  // this.$router.push(this.redirect)
                  }
                  this.$store.commit("setLoader")
            } else{
              console.log("////////////////////")
                this.$store.commit("setLoaderTrue")
                console.log("services", this.form.services)
                  let fd = new FormData();
                  fd.append("name", this.form.name)
                  fd.append("image", "no")
                  fd.append("title", this.form.title)
                  fd.append("meta", this.form.meta)
                  fd.append("url", this.form.name.split(' ').join('-'))
                  fd.append("altertag", this.form.altertag)
                  fd.append("description", this.form.description)
                  fd.append("footer", this.form.footer)
                  fd.append("majorcategory", this.form.majorcat)
                  fd.append("newarrivals", this.form.newarrivals)
                  fd.append("category", this.form.category)
                  fd.append("services", JSON.stringify(this.form.services))
                  fd.append("colors", JSON.stringify(this.colors))
                  fd.append("buyprice", this.form.buyprice)
                  fd.append("sizes", JSON.stringify(this.sizings))
                  // fd.append("pictures", JSON.stringify(this.files))
              // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
              const {data} = await axios.put(`${this.store}/${this.$route.params.code}`, 
                fd ,{'Content-Type': 'multipart/form-data'})

                  if(data){
                   this.$router.push(`${this.redirect}/show/${this.$route.params.code }`)
                  }
                  this.$store.commit("setLoader")

            }
        }catch(err){
            this.snackbar = true
            this.errs = err
                this.$store.commit("setLoader")

        }

  },
  async fetchData(){
        try{
              this.$store.commit("setLoaderTrue")
            const response = await axios.get(`${this.store}/${this.$route.params.code}`)
            // this.categorylist = data.categorys
            const prod = response.data
            if(response){
            this.form = prod
            }
            if (prod.sizes == undefined){
            this.sizing = []
            this.$store.commit("setLoader")
            return
          }
            if (prod.colors == undefined){
            this.colors = []
            this.$store.commit("setLoader")
            return
          }
          console.log(">>>>>>>>>>>>>>>>>", this.sizing)
            this.sizings = prod.sizes
            this.colors = prod.colors
                this.$store.commit("setLoader")
          }catch(err){
          this.snackbar = true
            console.log(err)
            
          // this.errs = err.response.data
                this.$store.commit("setLoader")
          } 
      },
    createitem(){
      this.dialogitemi = true
    },
      itemiclose() {
        this.dialogitemi = false
      },
    createcolor(){
      console.log("............")
      this.dialogcolori = true
    },
      coloriclose() {
        this.dialogcolori = false
      },
    createsizing(){
      this.dialogsizingi = true
    },
      sizingiclose() {
        this.dialogsizingi = false
      },
  }
  }
</script>

<style>
</style>