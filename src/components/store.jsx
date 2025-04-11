import axios from 'axios'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useProductDetail = create(
   persist(
    (set,get)=>(
        {
            products:[],
            loading:true,
            error:null,
            singleProduct:[],
            cart:{},
            total:0,
            fetchProducts: async()=>{
                const products = get().products;
                if(products.length > 0){
                    return;
                }
                set({loading:true})
                try {
                    const response  = await axios.get("https://dummyjson.com/products");
                    set({products:response.data.products,loading:false})
                } catch (error) {
                    set({error:error.message,loading:false})
                }
            },
            fetchSingleProduct:(payload)=>{
                set({loading:true})
                try {
                    const currentProd = get().products;
                    const prod = currentProd.find((prod)=>prod.id === parseInt(payload))
                    if (prod) {
                        set({ singleProduct: prod, loading: false });
                    } else {
                        set({ error: "Product not found", loading: false });
                    }
                } catch (error) {
                    set({error:error.message,loading:false})
                }
            },
           
            addToCart:(productId)=>{
                const product = get().products.find((item)=>item.id === productId)
                if(!product) return ;
                const cart = get().cart
                const item = cart[productId]
                if(item){
                    set({
                        cart:{
                            ...cart,
                            [productId]:{
                                ...item,
                                quantity:item.quantity+1
                            }
                        }
                    })
                }else{
                    set({
                        cart:{
                            ...cart,
                            [productId]:{
                                product,
                                quantity:1
                            }
                        }
                    })
                }
                    // update total
                    get().updateTotal()
            },
            decrementItem:(productId)=>{
                const cart = get().cart
                const item = cart[productId]

                if(item){
                    if(item.quantity >1){
                        set({
                            cart:{
                                ...cart,
                                [productId]:{
                                    ...item,
                                    quantity:item.quantity-1
                                }
                            }
                        })
                    }else{
                        const {[productId]:_,...restCart} = cart
                        set({cart:restCart})
                    }
                    // update total
                    get().updateTotal()
                }
            },
            updateTotal:()=>{
                const cart = get().cart;
                const total = Object.values(cart).reduce((sum, item) => {
                    if (item && item.product && typeof item.product.price === 'number') {
                        return sum + item.quantity * item.product.price;
                    }
                    return sum; // Skip invalid entries
                }, 0);
                set({ total });
            }
               
        
        }),
        {
            name:'product',
            getStorage:()=>localStorage
        }
    )
)