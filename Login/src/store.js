import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";
import {router}  from "./router"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        token:"",
        fbAPIKey : 'AIzaSyB-wDrGAcGYOOBHPk2QVkq_lfxhzdMjNhE'
    },
    mutations:{
        setToken(state,token){
            state.token = token
        },
        clearToken(state){
            state.token = ""
        }
    },
    actions:{
        initAuth({dispatch,commit}){
            let token = localStorage.getItem("token")
                if (token){
                    commit("setToken",token)
                    router.push("/")
                }
                else{
                    router.push("/auth")
                    return false
                }
        },
        login({commit,dispatch,state},authData){
            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if (authData.isUser){
                authLink = " https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }
           return axios.post( authLink + "AIzaSyB-wDrGAcGYOOBHPk2QVkq_lfxhzdMjNhE",
                {email:authData.email,password:authData.password,returnSecureToken:true})
                .then(response => {
                  commit("setToken",response.data.idToken)
                    localStorage.setItem("token",response.data.idToken)
                    dispatch("setTimeOutTimer",+response.data.expiresIn)
                }).catch(() => {
                alert("Lütfen Bilgilerinizi kontrol ediniz")
            })
        },
        logOut({commit,dispatch,state}){
            commit("clearToken")
            localStorage.removeItem("token")
            router.replace("/auth")
        },
        setTimeOutTimer({dispatch},expressIn){
            setTimeout(() =>{
                dispatch("logOut")
            },expressIn)
        }
    },
    getters:{
        isAuthenticated(state){
            return state.token !== ""
        }
    }
})

export default store