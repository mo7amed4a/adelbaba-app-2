import Image from 'next/image'
import React from 'react'
import { CategoryHeader } from './category-header'
import SubHeaderInput from './SubHeaderInput'

export default function SubHeader({
  lng
}: {
  lng: string
}) {
  return (
    <div className="pt-16 -mt-16 h-64 flex flex-col justify-center items-center relative">
        <Image
          width={500}
          height={500}
          alt="header"
          src="https://s3-alpha-sig.figma.com/img/102f/ef8c/472baebe2ea40046f4f0859ab9232b04?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ps172LaCvRVhoHxZb2seiJRxfxG~0fpNgPbankQy-JO~AKeIXE9rycR99M7dT8Lk4MCzW5foKZwA9LAfXuGf6eDlSzrSMnhsRDq2MS02vsauJmXdNohG~Tegj~nEn86ItkQUGxcHx-FGvH8mycPv0Mrl0smhesj11jhm6rTy6hJxR7o8nJQtQLMfn0QX9aQu-s6Z-csgLNCIhQcsLMIiKcdkjzntZxrm6XsTiRSCfH6oLaHdO87H6L3xacJWRKp~Agz6~FQfrrl6BemP0P2rm0eMV9NoUihTMEtC-54mLEcknpBb-cEHyKELSKOXG5ZPlXfJXGCyFcdRVcEyJN6t7g__"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute bg-gray-950 bg-opacity-80 inset-0"></div>
        <div className='relative z-auto'>
          <CategoryHeader lng={lng} isHome/>
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <SubHeaderInput />
        </div>
      </div>
  )
}
