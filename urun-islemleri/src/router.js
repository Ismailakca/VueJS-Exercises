import vueRouter from "vue-router"
import Vue from "vue"
import ProductList from "./components/products/productList"
import ProductSell from "./components/products/productSell"
import ProductPhrase from "./components/products/productPurchase"

Vue.use(vueRouter)

const routes = [
    {path:'/', component:ProductList},
    {path:'/urun-islemleri', component:ProductPhrase},
    {path:'/urun-cikisi', component:ProductSell},
    {path:'*', redirect :"/"},
]

export const router = new vueRouter({
    mode:"history",
    routes
})