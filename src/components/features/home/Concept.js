import React from 'react'

const ConceptSection = () => {
  return (
    <div className='flex justify-between p-20'>
      <div>
        <div className='flex translate-y-full -rotate-90 items-center gap-2'>
          <p className='section_sub'>concept</p>
          <div className='h-0.1 w-16 bg-secondary-brown'></div>
        </div>
      </div>
      <div className='max-w-[1040px]'>
        <div className='flex flex-col items-center gap-2'>
          <p className='section_sub'>concept</p>
          <h2>コンセプト</h2>
          <div className='h-0.1 w-12 bg-secondary-brown'></div>
        </div>
        <div className='pt-10'>
          <p className='mx-auto w-fit leading-10 tracking-wide'>
            kikaraとは<br></br>そのままの姿でその者らしくただソコニイル<br></br>木が好きだった。<br></br>
            シンプルな物、自然素材な物を集めた<br></br>木からはじまった私を表現する場所<br></br>
            2004年自宅の庭でガーデンショップkikara<br></br>を静岡にオープン。<br></br>
            野に咲く小花や育て易い植物を集めて自然のある暮らしを提案。<br></br>生活雑貨も麻や綿素材を中心に揃え<br></br>
            最終目的の自然食品の販売へと繋げる。<br></br>食べ物で身体と精神は創られていく。<br></br>
            一番シンプルな事を見つけるきっかけになれたら
          </p>
        </div>
      </div>
      <div className='mt-auto -translate-y-full'>
        <div className='flex translate-y-full -rotate-90 items-center gap-2'>
          <p className='section_sub'>concept</p>
          <div className='h-0.1 w-16 bg-secondary-brown'></div>
        </div>
      </div>
    </div>
  )
}

export default ConceptSection
