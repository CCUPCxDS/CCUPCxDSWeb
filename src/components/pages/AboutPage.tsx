import '@/index.css'
import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

import Tea113 from '@/assets/Cover.jpg'
import PreContest1 from '@/assets/113-1PreContest.jpg'
import PreContest2 from '@/assets/113-1PreContest-InGame.jpg'
import Course1 from '@/assets/114-1Course1.jpg'
import Course2 from '@/assets/114-1Course2.jpg'
import NCPC from '@/assets/114NCPC.jpg'
import FinalContest1 from '@/assets/114-1FinalContest1.jpg'
import FinalContest2 from '@/assets/114-1FinalContest2.jpg'

function ImageGallery({
    title,
    images,
    description
}: {
    title: string
    images: string[]
    description: string
}) {
    const isSingleImage = images.length === 1

    return (
        <section className='mx-auto my-8 w-full max-w-5xl px-6'>
            <div className='mb-8'>
                <div className='mb-3 flex items-center gap-3'>
                    <span className='block h-8 w-1.5 rounded-full bg-linear-to-b from-teal-400 to-blue-600'></span>

                    <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                        {title}
                    </h2>
                </div>
                <p className='max-w-3xl pl-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
                    {description}
                </p>
            </div>

            <div
                className={
                    isSingleImage
                        ? 'w-full'
                        : 'columns-1 gap-6 space-y-6 md:columns-2'
                }
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`
                            break-inside-avoid overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800
                            ${isSingleImage ? 'flex aspect-video max-h-125 items-center justify-center' : ''}
                        `}
                    >
                        <img
                            src={src}
                            alt={`${title} ${index + 1}`}
                            className={`
                                block transition-transform duration-500 hover:scale-105
                                ${isSingleImage ? 'h-full w-full object-cover' : 'h-auto w-full'}
                            `}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

function AboutPage() {
    const events = [
        {
            title: '新生茶會',
            images: [Tea113],
            description: '於新年度介紹課程安排與活動，認識幹部。'
        },
        {
            title: '期初檢測賽',
            images: [PreContest1, PreContest2],
            description:
                '讓新手熟悉競賽環境（DOMJudge），檢測基礎能力作為調整課程難度基準。'
        },
        {
            title: '課程集錦',
            images: [Course1, Course2],
            description:
                '每週社課涵蓋基礎語法、資料結構與演算法，從基礎開始教起。'
        },
        {
            title: 'NCPC 決賽',
            images: [NCPC],
            description: '代表學校參加全國大專院校程式設計競賽。'
        },
        {
            title: '期末檢測賽',
            images: [FinalContest1, FinalContest2],
            description:
                '綜合練習，提升實戰經驗，同時檢驗一學期以來的學習成果。'
        }
    ]

    return (
        <div className='flex min-h-screen flex-col bg-white font-sans text-gray-600 dark:bg-[#0B1120] dark:text-gray-100'>
            <Navbar alwaysSolid />

            <div className='relative w-full overflow-hidden px-6 pt-32 pb-12'>
                <div className='mx-auto max-w-240 text-center md:text-left'>
                    <h3 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white'>
                        關於{' '}
                        <span className='bg-linear-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-blue-400'>
                            CCUPC
                        </span>
                    </h3>

                    <div className='flex flex-col items-start gap-12 md:flex-row'>
                        <div className='space-y-6 text-lg leading-8 text-gray-600 md:w-2/3 md:text-xl dark:text-gray-300'>
                            <p>
                                <strong className='text-gray-900 dark:text-white'>
                                    National Chung Cheng University Programming
                                    Contest Team
                                </strong>
                                <br />
                                一個致力於推廣競技程式設計的社群組織。我們的目標是為初學者提供入門渠道，同時也為高手提供交流平台。
                            </p>
                            <p>
                                自 2018
                                年成立以來，舉辦過無數次社內程式競賽，也透過與同質社群合作交流，提升成員的實力與視野。我們的成員遍及各個年級與科系，大家因為對競技程式設計的熱愛而聚集在一起。
                            </p>
                        </div>

                        <div className='w-full grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 md:w-1/3 md:grid-cols-1 md:border-t-0 md:border-l md:pt-0 md:pl-8 dark:border-gray-700'>
                            <div>
                                <div className='text-3xl font-bold text-teal-600 dark:text-blue-400'>
                                    2018
                                </div>
                                <div className='text-sm tracking-wide text-gray-500 uppercase'>
                                    成立年份
                                </div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-teal-600 dark:text-blue-400'>
                                    100+
                                </div>
                                <div className='text-sm tracking-wide text-gray-500 uppercase'>
                                    歷屆成員
                                </div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold text-teal-600 dark:text-blue-400'>
                                    Top 6 Universities
                                </div>
                                <div className='text-sm tracking-wide text-gray-500 uppercase'>
                                    全國競賽佳績
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex w-full flex-col items-center '>
                {events.map((evt, index) => (
                    <ImageGallery
                        key={index}
                        title={evt.title}
                        images={evt.images}
                        description={evt.description}
                    />
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default AboutPage
