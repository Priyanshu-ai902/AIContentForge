"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>();
  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>console.log(value)}/>

      <TemplateListSection/>
    </div>
  )
}

export default Dashboard
