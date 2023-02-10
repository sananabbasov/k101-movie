import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
function Header() {
    return (
        <div className='bg-main-color py-8'>
            <div className='container mx-auto text-white flex justify-between max-sm:relative'>
                <div className="lg:w-1/12 md:w-2/12 max-sm:w-4/12">
                    <img className='w-full' src="https://metaflix.az/images/logo.png" alt="" />
                </div>
                <div className="nav-items w-4/12 max-lg:w-6/12 max-sm:absolute max-sm:top-14 max-sm:bg-red-600 max-sm:w-full">
                    <ul className='flex justify-between font-bold max-sm:flex-col'>
                        <li className='text-main-yellow py-2'>HOME</li>
                        <li className='py-2'>MOVIE</li>
                        <li className='py-2'>TV SHOW</li>
                        <li className='py-2'>PRICING</li>
                        <li className='py-2'>BLOG</li>
                        <li className='py-2'>CONTACTS</li>
                    </ul>

                </div>
                <div className="max-sm:hidden flex justify-between">
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <LanguageIcon />
                    </div>
                    <div className='max-md:hidden'>
                        <button className='hover:text-main-yellow bg-main-yellow'>SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header