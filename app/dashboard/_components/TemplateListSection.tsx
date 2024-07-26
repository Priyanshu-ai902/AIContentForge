import Templates from '@/app/(data)/Templates'
import React from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiprompt: string,
  form?: FORM[]
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean
}

function TemplateListSection() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5'>
      {Templates.map((item: TEMPLATE, index: number) => (
        <TemplateCard {...item}/>
      ))}
    </div>
  )
}

export default TemplateListSection
