// import sanitize from 'sanitize-html';
// import marked from 'marked'

// const sanitizedMarkdown = (data) => {
//   return sanitize(marked(data), {
//     allowedTags: sanitize.defaults.allowedTags.concat([
//       'img'
//     ])
//   })
// }

import { ReactNode } from 'react'

type NewsLinePropsType = {
  key: number;
  title: string;
  children?: ReactNode;
}

export default function NewsLine({ title, children }: NewsLinePropsType) {
  return (
    <div className='grid grid-rows-1 sm:grid-cols-3 ov-md:grid-cols-5' >
      <div className=''>
        <div className='rounded text-white bg-prime-blue-rich text-xs col-span-1 w-5/6 h-5 flex items-center justify-center breakAll' >
          {title}
        </div>
      </div>
      <div className='sm:col-span-2 ov-md:col-span-4 text-sm leading-5 breakAll'> {children} </div>
    </div>
  )
}


      // dangerouslySetInnerHTML={{
      // __html: formatted
      // }}