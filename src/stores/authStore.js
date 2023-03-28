import axios from 'axios';
import { create } from 'zustand'

const authStore = create((set) => ({
    loginForm: {
        email: "",
        password: ""
    },

    loggedIn: null,

    signupForm: {
        email: "",
        password: ""
    },

    updateLoginForm: (e) => {
        const {name , value } = e.target;

        set((state) => {
            return{
                loginForm: {
                    ...state.loginForm,
                    [name] : value
                }
            }
        })
    },

    updateSignupForm: (e) => {
        const {name , value } = e.target;

        set((state) => {
            return{
                signupForm: {
                    ...state.signupForm,
                    [name] : value
                }
            }
        })
    },

    login: async () => {       
        const {loginForm} = authStore.getState();

        const res = await axios.post("/login", loginForm )
        console.log(res);

        set( {loggedIn : true} )

        set({loginForm: {
            email: "",
            password: ""
            }
        })
    },

    signup: async () => {
        const {signupForm} = authStore.getState();

        const res = await axios.post("/signup", signupForm )
        console.log(res);

        set({signupForm: {
            email: "",
            password: ""
            }
        })
    },

    checkAuth: async () => {
        try {
            await axios.get("/check-auth");
            set({loggedIn : true}); 
        } catch (error) {
            console.log(error);
            set({loggedIn : false});
        }
    },

    logout: async () => {
        await axios.get("/logout")
        set({loggedIn: false});
    }
}));

export default authStore;

