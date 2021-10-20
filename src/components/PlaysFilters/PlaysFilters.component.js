import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <Disclosure >
    {({ open }) => (
      <>
      <div className="bg-gray-100 mb-3 mr-5 text-sm ">
      <Disclosure.Button className="py-3 pl-2 flex items-center gap-3 ">
        {open ? <BiChevronUp /> : <BiChevronDown />}

        <span className={open ? "text-red-700" : "text-gray-700"} >
            {props.title}
        </span>

      </Disclosure.Button>
      
      <Disclosure.Panel className="text-gray-500 ml-3 pb-3">
        <div className="flex item-center gap-3 flex-wrap">
         {props.tags.map((tag) => (
           <>
            <div className="border-2 border-gray-200 p-2">
            <span className="text-red-600 ">{tag}</span>
            </div>
           </>
         ))
         }
        </div>
      </Disclosure.Panel>
      </div>
      </>
    )}
    </Disclosure>
  );
}

export default PlaysFilter;