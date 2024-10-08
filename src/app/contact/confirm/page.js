import React, { Suspense } from 'react'
import ConfirmContent from '@/components/features/contact/ConfirmContent'
import Stepper from '@/components/features/contact/Stepper'

const ConfirmPage = () => {
  return (
    <div className='mx-auto max-w-[90%] py-36 md:tracking-wide'>
      <Stepper step1={true} step2={true} />
      <Suspense fallback={<div>読み込み中...</div>}>
        <ConfirmContent />
      </Suspense>
    </div>
  )
}

export default ConfirmPage
