import { Each, Show } from 'react-powerpack'
import { Link } from 'react-router-dom'
import { Separator } from '../ui/separator'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useEffect } from 'react'



const components = [
    {
        value: 'Show',
        url: '/components/show'
    },
    {
        value: 'Each',
        url: '/components/each'
    },
    {
        value: 'ClickOutsideComponent',
        url: '/components/clickoutsidecomponent'
    }
]


const hooks = [
    {
        value: 'useApi',
        url: '/hooks/useapi'
    },
    {
        value: 'useAsync',
        url: '/hooks/useasync'
    },
    {
        value: 'useLastCallback',
        url: '/hooks/uselastcallback'
    },
    {
        value: 'useTimeout',
        url: '/hooks/usetimeout'
    },
    {
        value: 'useClickOutside',
        url: '/hooks/useclickoutside'
    },
    {
        value: 'useDisclosure',
        url: '/hooks/usedisclosure'
    },
    {
        value: 'useToggle',
        url: '/hooks/usetoggle'
    }
]


export default function LeftSide({ mobile }: { mobile: boolean }) {

    const [toggledComponents, toggleComponents] = useLocalStorage<string>('components_accordion', '0');
    const [toggledHooks, toggleHooks] = useLocalStorage<string>('hooks_accordion', '0');

    const handleToggleComponents = () => {
        toggleComponents(toggledComponents === '0' ? '1' : '0')
    }

    const handleToggleHooks = () => {
        toggleHooks(toggledHooks === '0' ? '1' : '0')
    }





    useEffect(() => {

    }, [toggledComponents])

    return (


        <aside id='sidebar-multi-level-sidebar' className={`bg-background ${!mobile && 'border-r-2 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'}`} aria-label='Sidebar'>
            <div className='h-full px-3 py-4 overflow-y-auto '>
                <ul className='space-y-2'>
                    <li>
                        <Link className='flex items-center p-2 rounded-lg group' to='/home'>
                            <span className='ms-3'>Home</span>
                        </Link>
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
                                    <Each of={components} render={(data, index) =>
                                        <li className='items-center mt-5 cursor-pointer hover:text-yellow-500' key={index}>
                                            <Link to={data.url} className='font-bold break-words'>
                                                {data.value}
                                            </Link>
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
                                    <Each of={hooks} render={(data, index) =>
                                        <li className='items-center mt-5 cursor-pointer hover:text-yellow-500' key={index}>
                                            <Link to={data.url} className='font-bold break-words'>
                                                {data.value}
                                            </Link>
                                            <Separator />
                                        </li>
                                    } />
                                </Show.When>
                            </Show>
                        </ul>
                        <Separator />
                    </li>
                    <li>
                        <a href='#' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                            <span className='flex-1 ms-3 whitespace-nowrap'>INFO</span>
                        </a>
                    </li>

                </ul>
            </div>
        </aside>



    )
}