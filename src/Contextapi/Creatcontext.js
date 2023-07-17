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
    return defaultstate
}
 export const Creatcontext = (props) => {
    const [statedata,datadispacth]=useReducer(reducerhandler,defaultstate)
    const additemhandler=(items)=>{
      datadispacth({type:"ADD", item:items})
    }
    const removeitemhandler=()=>{
       datadispacth({type:"REMOVE"})
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
