function Schedule() {
    return (
        <>
            <hr className='my-6'></hr>
            <div className='text-center flex items-center flex-col my-5'>
                <h3 className='text-2xl font-semibold mb-3'>
                CCUPC 課程行事曆
                </h3>
                <iframe src="https://calendar.google.com/calendar/embed?src=c19faecd118b61d5dbdd0970016e0b41328e60bdca943c0b8405640bc9861500%40group.calendar.google.com&ctz=Asia%2FTaipei" className='rounded-lg w-[80%] md:w-3xl h-128'></iframe>
            </div>
            <hr className='mt-12'></hr>
        </>
    )
}

export default Schedule