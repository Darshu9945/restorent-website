import { useEffect, useReducer } from "react"
import React from 'react'
import axios from "axios"
const Contextdata=React.createContext({
    item:[],
    Totalamount:0,
    product:[],
    itemprice:0,
    additem:()=>{},
    removeitem:()=>{},
})
const defaultstate={
    item:[],
    Totalamount:0,
    itemprice:0,
    product:[]
}
const reducerhandler=(state,action)=>{
if(action.type==="ADD"){
    const size=action.size
    let addedtotalamout;
    let addeditemindex = state.item.findIndex((item)=> item.name===action.item.name)
    let price=action.item.price
const addeditem=state.item[addeditemindex]
let updateitems;

let data;
let  getdata
if(size==="L"){
   data= {...action.item,amount:{...action.item.amount,L:action.item.amount.L-1}}
    getdata=[...state.product]
    getdata[data.index]=data
}
if(size==="M"){
    data= {...action.item,amount:{...action.item.amount,M:action.item.amount.M-1}}
    getdata=[...state.product]
    getdata[data.index]=data
}
if(size==="S"){
    data= {...action.item,amount:{...action.item.amount,S:action.item.amount.S-1}}
    getdata=[...state.product]
    getdata[data.index]=data
}

if(addeditem){
   
    if(size==="L")
   { 
     addedtotalamout=state.Totalamount+action.item.price*action.item.amount1.L
    const updateitem={
        ...addeditem,
        amount1:{...addeditem.amount1,[size]:addeditem.amount1.L+1,}
    }
    price=updateitem.amount1.L*updateitem.price+updateitem.amount1.M*updateitem.price+updateitem.amount1.S*updateitem.price
    const kb={...updateitem,price:price}
     updateitems=[...state.item]
     updateitems[addeditemindex]=kb
}
    else if(size==="M")
    { 
        
        addedtotalamout=state.Totalamount+action.item.price*action.item.amount1.M
        const updateitem={
         ...addeditem,
         amount1:{...addeditem.amount1,[size]:addeditem.amount1.M+1}
     }
     price=updateitem.amount1.L*updateitem.price+updateitem.amount1.M*updateitem.price+updateitem.amount1.S*updateitem.price
     const kb={...updateitem,price:price}
     updateitems=[...state.item]
     updateitems[addeditemindex]=kb
    }
    else if(size==="S")
     {
        addedtotalamout=state.Totalamount+action.item.price*action.item.amount1.S
        const updateitem={
          ...addeditem,
          amount1:{...addeditem.amount1,[size]:addeditem.amount1.S+1}
      }
      price=updateitem.amount1.L*updateitem.price+updateitem.amount1.M*updateitem.price+updateitem.amount1.S*updateitem.price
      const kb={...updateitem,price:price}
      updateitems=[...state.item]
      updateitems[addeditemindex]=kb
    }    
   
}

else{
    if(size==="L"){
        addedtotalamout=state.Totalamount+action.item.price*action.item.amount1.L
    }
    else if(size==="M"){
         addedtotalamout=state.Totalamount+action.item.price*action.item.amount1.M
    }
   else if(size==="S"){
         addedtotalamout=state.Totalamount+action.item.price*action.item.amount1.S
    }
    
    const updateitem={...action.item}
    price=updateitem.amount1.L*updateitem.price+updateitem.amount1.M*updateitem.price+updateitem.amount1.S*updateitem.price
      updateitems=state.item.concat(action.item)

}

return {
    item:updateitems,
    Totalamount:addedtotalamout,
    product:getdata,
    itemprice:price
}
}

if(action.type==="ADDDATA"){
   axios.post("https://for-tshirt-website-default-rtdb.firebaseio.com/products.json",action.item).then(res=>{
    console.log(res)
   }).catch(err=>{
    console.log(err.message)
   })
   const updateproduct=state.product.concat(action.item)
   return{
    item:state.item,
    Totalamount:state.Totalamount,
    product:updateproduct,
        itemprice:state.itemprice
   }
   
}



if(action.type==="REMOVE"){
    let removedtotalamount=state.Totalamount-action.item.price*action.item.amount
    let removeditems=[];
    console.log(action.item)
    if(action.item.amount>1){
       state.item.map((items)=>{
        if(items.name===action.item.name){
            
           const kb={...items,amount:items.amount-1}
           removeditems.push(kb)
          
           removedtotalamount=state.Totalamount-action.item.price*1
        }
        else{
            removeditems.push(items)
        }
    })
    }
    else{
       removeditems=state.item.filter((item)=>{
            return item.price!=action.item.price
        })
    }
    return {
        item:removeditems,
        Totalamount:removedtotalamount,
        product:state.product,
        itemprice:state.itemprice
    }
}
if(action.type==="DATAGOT"){

    let getdata=[]
    
for (const key in action.product){
const data={...action.product[key],key:key}
getdata.push(data)
}

 return{
      item:state.item,
        Totalamount:state.Totalamount,
        product:getdata,
        itemprice:state.itemprice
 }
}
    return defaultstate
}




 export const Creatcontext = (props) => {
    const [statedata,datadispacth]=useReducer(reducerhandler,defaultstate)
    console.log(statedata)
    const additemhandler=(items,k)=>{
      datadispacth({type:"ADD", item:items,size:k})
    }
    const removeitemhandler=(item)=>{
       datadispacth({type:"REMOVE",item:item})
    }
    const datahandler=(product)=>{
        console.log(product)
        datadispacth({type:"ADDDATA",item:product})
    }
    const creatdata={
        item:statedata.item,
        Totalamount:statedata.Totalamount,
        product:statedata.product,
        itemprice:statedata.itemprice,
        additem:additemhandler,
        removeitem:removeitemhandler,
        adddata:datahandler
    }
    useEffect(()=>{
axios.get("https://for-tshirt-website-default-rtdb.firebaseio.com/products.json").then((res)=>{
    console.log(res,"grur")
    datadispacth({type:"DATAGOT",product:res.data})
}).catch(err=>console.log(err.message))
    },[])
  return (
      <Contextdata.Provider value={creatdata}>{props.children}</Contextdata.Provider>
  )
}


export  default Contextdata
