<template>
  <v-dialog
          v-model="dialogproducts"
          max-width="800px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">{{title}}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                   <v-col v-if="items"
                                      cols="12"
                                      md="12"
                                    >
                                   <v-autocomplete
                                        v-model="product"
                                        :items="items"
                                        chips
                                        clearable
                                        hide-details
                                        hide-selected
                                        item-text="name"
                                        item-value="title"
                                        label="Search Product..."
                                        solo
                                        @change="getproduct(product)"
                                      >
                                        <template v-slot:no-data>
                                          <v-list-item>
                                            <v-list-item-title>
                                              Search for 
                                              <strong>Supplier</strong>
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
                      md="12"
                    >
                      <v-textarea
                        v-model="form.description"
                        label="Description"
                        required
                      ></v-textarea>
                    </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save" 
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>
 import axios from '@/axios'
export default {
    props: ['dialogproducts','productsclose', "getproductlist"],
    data(){
      return{
        form:{
          product: {},
          description:''
        },
        items: [],
        product: '',
        store:'api/productss',
        title: 'products',
        // majorcode: props.majorcode
      }
    },
    created (){
      this.fetchData()
    },
    methods:{
      getproduct(name){
        // console.log("product", name)
        const product = this.items.find(item => item.name === name)
        // console.log("product", product)
        this.form.product = product
        // console.log(product.code)
      },
      close(){
          this.productsclose()
      },
      async save(){
           try{
              this.$store.commit("setLoaderTrue")
                 this.getproductlist({name:this.form.product.name, code: this.form.product.code, description: this.form.description})
                this.close()
                this.$store.commit("setLoader")
          }catch(err){
            this.close()
            console.log(err)
                this.$store.commit("setLoader")
          }
        },        
      async fetchData () {
            try{
                  this.$store.commit("setLoaderTrue")
                // console.log(token)
              const {data} = await axios.get(`/api/products`)
                this.items = data
                    this.$store.commit("setLoader")
            }catch(err){
              console.log(err)
                    this.$store.commit("setLoader")
            }
        }, 

    }

}
</script>

<style>

</style>