import { Each, Show, useLocalStorage } from 'react-powerpack'
import { Link, NavLink } from 'react-router-dom'
import { Separator } from '../ui/separator'
import { useEffect } from 'react'
import { FaGithub, FaTwitter, FaNpm } from "react-icons/fa";
import { NavComponents, NavHooks } from '../lib/nav';






export default function LeftSide({ mobile }: { mobile: boolean }) {

    const [toggledComponents, toggleComponents] = useLocalStorage<string>('components_accordion', '0');
    const [toggledHooks, toggleHooks] = useLocalStorage<string>('hooks_accordion', '0');

    const handleToggleComponents = () =>
        toggleComponents(toggledComponents === '0' ? '1' : '0')

    const handleToggleHooks = () =>
        toggleHooks(toggledHooks === '0' ? '1' : '0')






    useEffect(() => {

    }, [toggledComponents])

    return (


        <aside id='sidebar-multi-level-sidebar' className={`bg-background ${!mobile && 'border-r-2 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'}`} aria-label='Sidebar'>
            <div className='h-full px-3 py-4 overflow-y-auto '>
                <ul className='space-y-2'>
                    <li>
                        <NavLink className='flex p-2 rounded-lg group items-center' to='/home'>
                            <img src='/react.svg' width={50} />
                            <span className='ms-3 font-bold'>PowerPack</span>
                        </NavLink>
                        <Separator className='mt-2' />
                    </li>
                    <li>
                        <div onClick={handleToggleComponents} className='cursor-pointer flex items-center w-full p-2 text-base transition duration-75 rounded-lg' aria-controls='dropdown-example' data-collapse-toggle='dropdown-example'>

                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>Components</span>
                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                            </svg>
                        </div>
                        <ul className='items-center ml-10'>
                            <Show>
                                <Show.When isTrue={toggledComponents === '1'}>
                                    <Each of={NavComponents} render={(data, index) =>
                                        <li className='items-center mt-5 cursor-pointer hover:text-yellow-500' key={index}>
                                            <NavLink to={data.url} className='font-bold break-words ease-in'>
                                                {data.value}
                                            </NavLink>
                                            <Separator />
                                        </li>
                                    } />
                                </Show.When>
                            </Show>
                        </ul>
                        <Separator />
                    </li>
                    <li>
                        <div onClick={handleToggleHooks} className='cursor-pointer  flex items-center w-full p-2 text-base transition duration-75 rounded-lg group' aria-controls='dropdown-example' data-collapse-toggle='dropdown-example'>

                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>Hooks</span>
                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                            </svg>
                        </div>
                        <ul className='items-center ml-10'>
                            <Show>
                                <Show.When isTrue={toggledHooks === '1'}>
                                    <Each of={NavHooks} render={(data, index) =>
                                        <li className='items-center mt-5 cursor-pointer hover:text-yellow-500' key={index}>
                                            <NavLink to={data.url} className='font-bold break-words'>
                                                {data.value}
                                            </NavLink>
                                            <Separator />
                                        </li>
                                    } />
                                </Show.When>
                            </Show>
                        </ul>
                        <Separator />
                    </li>
                    <li>

                        <div className="grid grid-cols-3 gap-2 w-full mt-10">
                            <Link target='_blank' to='https://github.com/ffuNnyto/react-powerpack'>
                                <FaGithub className='mx-auto' size={22} />
                            </Link>
                            <Link target='_blank' to='https://www.npmjs.com/package/react-powerpack'>
                                <FaNpm className='mx-auto' size={22} />
                            </Link>
                            <Link target='_blank' to='https://twitter.com/ffuNnyto'>
                                <FaTwitter className='mx-auto' size={22} />
                            </Link>
                        </div>

                        <div className='flex justify-center w-full mt-10'>



                        </div>

                    </li>

                </ul>
            </div>
        </aside>



    )
}