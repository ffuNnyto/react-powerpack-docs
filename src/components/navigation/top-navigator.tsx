
import LeftSideSheet from '../layout/leftside-sheet';
import { useTheme } from '../theme-provider';
import { Button } from '../ui/button';
import { Search } from '../ui/search';
import { MainNav } from './main-nav';
import SearchDoc from '../search/search-doc';

export function NavigationTopMenu() {
    
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')


    return (
        <>
            <div className='md:hidden'>
                <LeftSideSheet trigger={
                    <div data-drawer-target='sidebar-multi-level-sidebar' data-drawer-toggle='sidebar-multi-level-sidebar' aria-controls='sidebar-multi-level-sidebar' className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
                        <span className='sr-only'>Open sidebar</span>
                        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <path clipRule='evenodd' fillRule='evenodd' d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
                        </svg>
                    </div>
                } />
            </div>
            <div className='hidden flex-col md:flex z-10'>
                <div className='border-b fixed w-full bg-background'>
                    <div className='flex h-16 items-center px-4 mx-auto max-w-screen-sm'>
                        <MainNav />
                        <div className='ml-auto flex items-center space-x-4'>

                            <SearchDoc trigger={<Search />} />

                            <Button onClick={toggleTheme} variant='secondary'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'><path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0'></path><path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'></path></svg>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

