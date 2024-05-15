import React from 'react'

export default function NavLayout(props) {
    const { layoutProps } = props
    const { navView = " ", mainView =" " } = layoutProps
    return (
        <>
            <div className=' relative break-words w-full h-full  sm:min-h-screen text-pretty'>
                <div className='flex  flex-col text-pretty'>
                    <nav className='  flex flex-row break-words w-100 text-pretty '>

                        {/* -------Nav View------- */}
                        <nav className='z-50 	'>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-pretty">
                                <div className="relative h-16">
                                    <div className="absolute inset-y-0 left-0 flex items-center break-words text-pretty">
                                    { navView} 
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </nav>

                    {/* ----------Secondary View----------- */}

                    <div className='z-40	'>
                        { mainView} 
                    </div>
                </div>
            </div >

        </>
    )
}
