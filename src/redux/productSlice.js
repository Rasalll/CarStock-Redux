import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Home/data";


const productSlice=createSlice({
    name:"products",
    initialState:data,
    reducers:{

        add:(state,action)=>{
            console.log(action)
            state.push(action.payload)
        },

        edit:(state,action)=>{
            const {id,imageurl,model,make,price}=action.payload
            const pro = state.find(product=>product.id==id)
            if(pro){
                pro.imageurl=imageurl;
                pro.model=model;
                pro.make=make;
                pro.price=price
            }
            else{

            }
        },

        delet:(state,action)=>{
            const {id}=action.payload
            return state.filter(product=>product.id !==id)
            
        }
    }
})

export default productSlice.reducer;
export const {add,edit,delet}=productSlice.actions