import { useReducer } from "react"
import React from 'react'
const Contextdata=React.createContext({
    item:[],
    Totalamount:0,
    product:[],
    additem:()=>{},
    removeitem:()=>{},
})
const defaultstate={
    item:[],
    Totalamount:0,
    product:[]
}
const reducerhandler=(state,action)=>{
if(action.type==="ADD"){
    const addedtotalamout=state.Totalamount+action.item.price*action.item.amount
    let addeditemindex = state.item.findIndex((item)=> item.name===action.item.name)
    
const addeditem=state.item[addeditemindex]
let updateitems;
if(addeditem){
    const updateitem={
        ...addeditem,
        amount:addeditem.amount+action.item.amount
    }
    updateitems=[...state.item]
    updateitems[addeditemindex]=updateitem
   
}

else{
    const updateitem={...action.item}
      updateitems=state.item.concat(action.item)

}

return {
    item:updateitems,
    Totalamount:addedtotalamout,
    product:state.product
}
}

if(action.type==="ADDDATA"){
   const updateproduct=state.product.concat(action.item)
   return{
    item:state.item,
    Totalamount:state.Totalamount,
    product:updateproduct
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
        product:state.product
    }
}
    return defaultstate
}




 export const Creatcontext = (props) => {
    const [statedata,datadispacth]=useReducer(reducerhandler,defaultstate)
    console.log(statedata)
    const additemhandler=(items)=>{
      datadispacth({type:"ADD", item:items})
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
        additem:additemhandler,
        removeitem:removeitemhandler,
        adddata:datahandler
    }
  return (
      <Contextdata.Provider value={creatdata}>{props.children}</Contextdata.Provider>
  )
}


export  default Contextdata
