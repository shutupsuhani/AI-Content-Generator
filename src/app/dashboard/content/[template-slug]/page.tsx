'use client'

import React from 'react'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateList'
import Template from '@/app/(data)/Template'

interface PROPS{
  
 params:{
     'template-slug':string;
 } 
}

const Page = async (props:PROPS) => {
  
  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item.slug === props.params['template-slug']
  );
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
       
       {/**Form Section */}
        <div className='border-r'>
        <FormSection userFormInput={(v:any)=>console.log(v)} selectedTemplate={selectedTemplate} />
        </div>
       

       {/** Text Editor Section */}
        <div className='border-l'>
        <OutputSection/>
        </div>
        

    </div>
  )
}

export default Page