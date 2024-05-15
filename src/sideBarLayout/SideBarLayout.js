import React, { useEffect } from 'react'

export default function SideBarLayout(props) {
    const { hideBar = false, reverse = false, layoutProps } = props
    const { mainView="", sideView="" } = layoutProps

    useEffect(() => {
        const reverseSideBar = document.getElementById('reverseSideBar');
        if (reverseSideBar) {
            reverse ? reverseSideBar.classList.add('md:flex-row-reverse') : reverseSideBar.classList.remove('md:flex-row-reverse');
        }
    }, [reverse])
    return (

        <div className=' relative '>
            <div >
                <div id='reverseSideBar' className={`md:flex-row  mx-auto  flex flex-col  break-words w-full h-full  sm:min-h-screen`}>

                    {/* -------Left View------- */}


                    <div className={hideBar ? "hidden" : " 	" + "flex-none  max-w-full md:max-w-96 lg:max-w-100   text-wrap  ring-1 ring-inset ring-gray-300 rounded-md border-0 py-4"}>
                        <div className='rounded-md shadow-sm '>
                            {sideView}
                        </div>
                    </div>
                    {/* -------Main View------- */}

                    <main className='  grow  w-full	 max-w-2/3 text-wrap px-2  rounded-md border-0 py-4 px-4 bg-slate-100'>
                        <div className='rounded-md shadow-sm'>
                            {mainView}
                        </div>
                    </main>


                </div>
            </div>
        </div >


    )
}
