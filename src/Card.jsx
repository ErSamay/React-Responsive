import React from 'react'
import { LuFileSearch2 } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


export default function Card({data , reference}) {
  return (
    <div>
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={.1} dragTransition={{bounceStiffness : 100 , bounceDamping : 30}}
         className='relative flex-shrink-0 w-60 h-72 p-5 rounded-[35px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <LuFileSearch2 />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0 '>
            <div className='flex items-center justify-between  px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoIosClose size=".7em" color='#fff'/> :   <FiDownload size=".7em" color='#fff'/> }

              
                </span>
              

            </div>
            {data.tag.isOpen &&  (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center `}>
                    <h3 className='text-sm'>{data.tag.tagTittle}</h3>
               </div> 
            ) }
        

        </div>



        </motion.div>
    </div>
  )
}

