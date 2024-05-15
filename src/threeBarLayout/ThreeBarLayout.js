import React from 'react'

export default function ThreeBarLayout(props) {
    const { layoutProps } = props
    const { rightView = "", leftView="", mainView="" } = layoutProps
    return (
        <div className=' relative '>
            <div >
                <div className='container   py-2 mx-auto  flex flex-row md:flex-row break-words w-full h-full  sm:min-h-screen '>

                    {/* -------Left View------- */}

                    <div className=' flex-none max-w-full md:max-w-72 lg:max-w-100  text-wrap  ring-1 ring-inset ring-gray-300 rounded-md border-0 py-4'>
                        <div className='rounded-md shadow-sm '>
                            {rightView}
                        </div>
                    </div>
                    {/* -------Main View------- */}

                    <main className='  grow  min-w-100 text-wrap px-2  rounded-md border-0 py-4 px-4 bg-slate-100'>
                        <div className='rounded-md shadow-sm'>
                            {mainView}
                        </div>
                    </main>

                    {/* -------Right View------- */}
                    <div className='max-w-full md:max-w-72 lg:max-w-100  break-words text-wrap  ring-1 ring-inset ring-gray-300 rounded-md border-0 py-4'>
                        <div className='rounded-md shadow-sm'>
                            {leftView}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
