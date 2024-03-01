import { Each } from 'react-powerpack'
import { Link, NavLink } from 'react-router-dom'
import { Separator } from '@/src/components/ui/separator'
import { FaGithub, FaTwitter, FaNpm } from 'react-icons/fa';
import { NavComponents, NavHooks } from '../lib/nav';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion';






export default function LeftSide({ mobile }: { mobile: boolean }) {

    return (


        <aside id='sidebar-multi-level-sidebar' className={`bg-background ${!mobile && 'border-r-2 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'}`} aria-label='Sidebar'>
            <div className='h-full px-3 py-4 overflow-y-auto '>
                <div className='space-y-2'>
                    <div>
                        <NavLink className='flex p-2 rounded-lg group items-center' to='/home'>
                            <img src='/react.svg' width={50} />
                            <span className='ms-3 font-bold'>PowerPack</span>
                        </NavLink>
                        <Separator className='mt-2' />
                    </div>
                    <div>

                        <Accordion type='multiple' className='w-full'>
                            <AccordionItem value='components'>
                                <AccordionTrigger>Components</AccordionTrigger>
                                <AccordionContent>
                                    <Each of={NavComponents} render={(data, index) =>
                                        <div className='items-center mt-5 cursor-pointer hover:text-yellow-500' key={index}>
                                            <NavLink to={data.url} className='font-bold break-words ease-in'>
                                                {data.value}
                                            </NavLink>
                                            <Separator />
                                        </div>
                                    } />
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                    <div>
                        <Accordion type='multiple' className='w-full'>
                            <AccordionItem value='hooks'>
                                <AccordionTrigger>Hooks</AccordionTrigger>
                                <AccordionContent>
                                    <Each of={NavHooks} render={(data, index) =>
                                        <div className='items-center mt-5 cursor-pointer hover:text-yellow-500' key={index}>
                                            <NavLink to={data.url} className='font-bold break-words ease-in'>
                                                {data.value}
                                            </NavLink>
                                            <Separator />
                                        </div>
                                    } />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='social_network'>
                        <div className='grid grid-cols-3 gap-2 w-full mt-10'>
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
                        <div className='flex justify-center w-full mt-10'></div>
                    </div>
                </div>
            </div>
        </aside>



    )
}