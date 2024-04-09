import React from 'react'
import {InView} from "react-intersection-observer"
import useNav from '../hooks/useNav'

const InViewWrapper = ({ children, index, threshold, id }) => {
  const { setNavActive } = useNav() 

  const handleView = (inView, ) => {
    
    if (index  == undefined) {
      // setNavActive(0)
    console.log("0")
      
    }else if(inView){
      setNavActive(index)
      console.log(index)

    }
    else{
    console.log(index)
    //setNavActive(index)
  }

}

  return (
    <InView onChange={handleView} threshold={threshold} id={id}>{children}</InView>
  )
}

export default InViewWrapper