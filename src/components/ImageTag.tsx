import { toSlug } from '@/utils/global'
import Link from 'next/link'
import React from 'react'

export default function ImageTag({tag}: {tag: string}) {

  

  return (
    <Link href={`/search/${toSlug(tag)}`}>
      <div className='bg-gray-100 px-2 text-gray-900  rounded text-md'>{tag}</div>
    </Link>
  )
}
