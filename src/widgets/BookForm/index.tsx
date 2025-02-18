// 'use client';
// import { useRouter } from 'next/navigation';
// import { FC, FormEvent, useState } from 'react';

// import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';

// //components
// import Button from '@/components/ui/Button';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

// interface Props {}

// const Index: FC<Props> = () => {
//   const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);
//   const { push } = useRouter();

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     console.log(form)
//   }

//   return (
//     <div className="mx-auto max-w-[70vw] md:max-w-[85vw] px-[4vw] ">
//       <div className="relative">
//         <button
//           className=" group absolute left-0 top-[25%] z-10 box-content rounded-full bg-stone-800 p-[0.5vw] hover:bg-stone-800"
//           onClick={() => push('/')}
//         >
//           <svg
//             focusable="false"
//             className="h-[1.5vw] w-[1.5vw] md:h-[2.25vw] md:w-[2.25vw] fill-stone-400 transition group-hover:fill-stone-300"
//             viewBox="0 0 24 24"
//           >
//             <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
//           </svg>
//         </button>
//         <h1 className="mb-[1.75vw] md:text-[4.6vw] md:mb-[2.25vw] text-center text-[3.5vw] font-bold leading-[100%]">Let’s Talk</h1>
//       </div>
//       <form className="flex h-full flex-col items-center" onSubmit={handleSubmit}>
//         <div className="flex flex-wrap">
//           {RADIO_FIELDS.map((item) => (
//             <RadioGroup
//               onValueChange={(value) => setForm((prev) => ({ ...prev, [item.formKey]: value }))}
//               key={item.title}
//               className={`mb-[1.75vw] inline-block w-[calc(50%-1.75vw)] ${item.classes}`}
//               required={true}
//             >
//               <h4 className="mb-[0.2vw] md:mb-[0.5vw] text-[1.3vw] md:text-[1.6vw] font-medium">{item.title}</h4>
//               {item.radioArray.map((radio) => (
//                 <div key={radio.value} className="flex items-center space-x-[0.65vw] md:space-x-[1vw] md:space-y-[0.3vw] font-[400]">
//                   <RadioGroupItem value={radio.value} id={radio.name} required={true} />
//                   <label htmlFor={radio.name} className="text-[1vw] md:text-[1.25vw] leading-[1.75vw]">
//                     {radio.name}
//                   </label>
//                 </div>
//               ))}
//             </RadioGroup>
//           ))}

//           <div className="w-full space-y-[2vw] text-[1.1vw]">
//             {INPUT_FIELDS.map((item) => (
//               <div key={item.label} className={`w-full ${item.classes}`}>
//                 <label htmlFor={item.label} className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block">
//                   {item.label}
//                 </label>
//                 <input
//                   onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
//                   type={item.type || 'text'}
//                   name={item.name}
//                   id={item.label}
//                   className="h-[3vw] md:h-[4vw] w-full appearance-none rounded-[0.25vw] border-[0.125vw] border-primary/80 bg-transparent px-[1vw] py-[0.8vw]"
//                   required={item.required}
//                 />
//               </div>
//             ))}
//             <div className="w-full">
//               <label className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block" htmlFor="message">
//               Write a Message
//               </label>
//               <textarea
//                 minLength={20}
//                 maxLength={500}
//                 onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
//                 id="message"
//                 name="message"
//                 className="min-h-[10vw] w-full resize-none border-[0.125vw] rounded-[0.125vw] text-[1.2vw] md:text-[1.5vw] border-primary/80 bg-transparent px-[0.8vw] py-[0.6vw]"
//               />
//             </div>
//           </div>

//           <Button
//             title="Send"
//             type="submit"
//             classes="py-[1.2vw] px-[5vw] md:py-[1.6vw] md:px-[8vw] text-[1.1vw] md:text-[1.5vw] bg-bg-1/90 hover:bg-bg-1/80"
//             btnClasses="p-[0.2vw] md:p-[0.25vw] capitalize self-start mt-[2.5vw]"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Index;


"use client"

import type React from "react"

import { useState } from "react"
import { RADIO_FIELDS, INPUT_FIELDS, BOOK_FORM_DEFAULT_STATE, type BookFormState } from "@/components/ui/RadioGroup"

export default function BookForm() {
  const [form, setForm] = useState<BookFormState>(BOOK_FORM_DEFAULT_STATE)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <form className="grid gap-4">
      {/* Radio Fields */}
      {RADIO_FIELDS.map((item) => (
        <div key={item.title} className={`mb-[1.75vw] inline-block w-[calc(50%-1.75vw)] ${item.classes}`}>
          <div className="mb-4 text-lg font-medium">{item.title}</div>
          <div className="space-y-2">
            {item.radioArray.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`${item.formKey}-${option.value}`}
                  name={item.formKey}
                  value={option.value}
                  checked={form[item.formKey as keyof BookFormState] === option.value}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300"
                />
                <label htmlFor={`${item.formKey}-${option.value}`} className="text-sm">
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Input Fields */}
      {INPUT_FIELDS.map((field) => (
        <div key={field.name} className={field.classes}>
          <input
            type={field.type || "text"}
            name={field.name}
            placeholder={field.label}
            required={field.required}
            value={form[field.name as keyof BookFormState] as string}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  )
}

