import React, { useState } from 'react'

export const useNavBar=()=>{
  const [openSideMenu,setOpenSideMenu]=useState(false); 


  const handleOpenSideMenu=()=>{
    setOpenSideMenu(prev=>!prev)
    
 }

  return {openSideMenu,handleOpenSideMenu}

}

export default useNavBar