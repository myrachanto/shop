<template>
  <div>
    <v-form>
      <v-container class="fill-height">
          <h1>Order</h1><v-spacer></v-spacer>
          <h1 v-if="form.delivered ==='delivered'" class="design">{{form.delivered}}</h1>
          <h1 v-if="form.delivered ==='canceled'" class="cancel">{{form.delivered}}</h1>
          <h1 v-if="form.delivered ==='pending'" class="pending">{{form.delivered}}</h1>

         <!-- <v-btn class="ma-2" 
      depressed
      color="success"
      @click="GetPdf()"
    >
      PDF
    </v-btn> -->
        <v-row align="center" justify="center" v-if="form">
          <v-col cols="12" sm="8" md="4">
            <v-card class="mx-auto">
              <v-card-title>Name: <span class="design">{{form.name}}</span> </v-card-title>
              <v-card-subtitle>Email: <span class="design">{{form.email}}</span> </v-card-subtitle>
              <v-card-title>Code: <span class="design">{{form.code}}</span></v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8" md="4">
            <v-card class="mx-auto">
              <v-card-title>Phone: <span class="design">{{form.phone}}</span></v-card-title>
              <v-card-title>House: <span class="design">{{form.house}}</span></v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8" md="4">
            <v-card class="mx-auto" min-height="130">
              <v-card-title> Location:<span class="design">{{form.location}}</span></v-card-title>
              <v-card-title> Street:<span class="design">{{form.street}}</span></v-card-title>
            </v-card>
          </v-col>
        </v-row>

        <v-row  v-if="form.cart">
          <v-col cols="12" md="12">
            <v-card>
                 <div><h1>Products</h1></div>
              <v-data-table :headers="cartheader" :items="form.cart" item-key="ID" class="elevation-1 display-2" style="font-size:10rem" :footer-props="{
                  'items-per-page-options': [5,10, 20, 30, 40, 50]
                }" :items-per-page="10">  
          <template v-slot:[`item.price`]="{ item }">
              
                ksh{{ formatcurrency(item.price) }}
            </template>  
          <template v-slot:[`item.total`]="{ item }">
              
                ksh{{ formatcurrency(item.quantity * item.price) }}
            </template></v-data-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <p>Instruction: <br />{{form.instructions}}</p>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto">
              <v-card-title>Amount: ksh{{formatcurrency(form.amount)}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

  </div>
</template>

<script>
import moment from 'moment'
import formatMoney from '@/helpers/currencyformat'
import axios from '@/axios'

export default {
  name: "Customershow",
  data() {
    return {
      form: {},
      errs: {},
      option: {},
      title: 'Create',
      init: 'api/orders',
      redirect: '/orders',
      store: 'api/orders',
      method: 'post',
      snackbar: false,
      timeout: 3000,
      customer: {},
      invoice: {},
      transactions: [],
      expences: [],
      credits:[],
      cartheader: [{
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Specs',
          value: 'specs'
        },
        {
          text: 'Quantity',
          value: 'quantity'
        },
        {
          text: 'Price',
          value: 'price'
        },
        {
          text: 'Total',
          value: 'total'
        }
      ]

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    formatcurrency(d) {
          return formatMoney(d)
        },
      formatdate(d) {
          return moment(d).format('L');
        },
    Edit(id) {
      this.$router.push(`${this.redirect}/${id}/edit`)
    },
    Back() {
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
  //  async GetPdf(){
  //     try{
  //        const res =  await axios.get(`api/invoice/download/${this.invoice.code}`,{ responseType: 'blob' })
  //       const blob = new Blob([res.data], { type: 'application/pdf' })
  //       const link = document.createElement('a')
  //       link.href = URL.createObjectURL(blob)
  //       link.download = this.invoice.code
  //       link.click()
  //       URL.revokeObjectURL(link.href)
  //     } catch (err) {
  //       this.snackbar = true
  //       //   console.log(err)
  //       this.errs = err.response.data 
  //               this.$store.commit("setLoader")
  //     }
  //   }
  },
}
</script>

<style>

.design{
  color: green;
}
.cancel{
  color: red
}
.pending{
  color:grey
}
</style>
