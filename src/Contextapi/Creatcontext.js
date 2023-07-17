import { useReducer } from "react"
import React from 'react'
const Contextdata=React.createContext({
    item:0,
    Totalamount:0,
    additem:()=>{},
    removeitem:()=>{},
})
const defaultstate={
    item:[],
    Totalamount:0
}
const reducerhandler=(state,action)=>{
if(action.type==="ADD"){
const addeditem=state.item.concat(action.item)
const addedtotalamout=state.Totalamount+action.item.price*action.item.amount
return {
    item:addeditem,
    Totalamount:addedtotalamout
}
}
if(action.type==="REMOVE"){
    const removeditems=state.item.filter((item)=>{
        return item.price!=action.price
    })
const removedtotalamount=state.Totalamount-action.price
    return {
        item:removeditems,
        Totalamount:removedtotalamount
    }
}
    return defaultstate
}
 export const Creatcontext = (props) => {
    const [statedata,datadispacth]=useReducer(reducerhandler,defaultstate)
    const additemhandler=(items)=>{
      datadispacth({type:"ADD", item:items})
    }
    const removeitemhandler=(price)=>{
       datadispacth({type:"REMOVE",price:price})
    }
    const creatdata={
        item:statedata.item,
        Totalamount:statedata.Totalamount,
        additem:additemhandler,
        removeitem:removeitemhandler,
    }
  return (
      <Contextdata.Provider value={creatdata}>{props.children}</Contextdata.Provider>
  )
}


export  default Contextdata
