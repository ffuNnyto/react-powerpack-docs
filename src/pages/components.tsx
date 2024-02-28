import LeftSide from '@/components/layout/leftside';
import { NavigationTopMenu } from '@/components/navigation/top-navigator';
import { Link, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/title';
import Code from '@/components/ui/code';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getComponentByName } from './components/componentconfig';
import { FaGithub } from "react-icons/fa";
import { getHookByName } from './hooks/hooksconfig';



export const ImportStyle = {
    backgroundColor: '',
    borderRadius: '2px',
    padding: 10,
    margin: 5,
    display: ''
}

export const CodeStyle = {
    borderRadius: '2px',
    padding: 0,
    margin: 0,

}

export interface IComponentConfig {
    title: string
    description: string
    source_code: string
    import_code: string
    import_style: React.CSSProperties,
    code_style: React.CSSProperties,
    example_code: string
    example_component: React.ReactNode
}

export default function PageResources() {

    let { pathname } = useLocation()
    let path = useLocation().pathname.split('/')[2]

    const getComponentByPath = () => {

        const type = pathname.split('/')[1];
        type RouteHandlerType = 'hooks' | 'components'

        const routeHandler = {
            'hooks': () => getHookByName(path.toLowerCase()),
            'components': () => getComponentByName(path.toLowerCase())
        };

        const routeFunction = routeHandler[type as RouteHandlerType] || routeHandler['components']

        return routeFunction();
    }



    let getComponent = getComponentByPath();

    if (!getComponent)
        return <>error</>

    return (
        <>
            <NavigationTopMenu />
            <div className='holy-grail-grid mt-24'>
                <main className='main-content max-w-[100%] w-full mx-auto'>
                    <div className='m-1 p-5 rounded-t-xl'>
                        <div className='p-2'>
                            <Title className='font-bold'>{getComponent.title}</Title>
                            <div className='description m-4'>
                                <div>
                                    <span>- Description: {getComponent.description}</span>
                                </div>
                                <div className='flex items-center'>
                                    <Link target='_blank' to={getComponent.source_code}>- Source: <span className='italic underline'>View Source Code</span></Link>
                                    <span>
                                        <FaGithub className='ml-2' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className='p-2'>
                            <Title className='font-bold'>Import</Title>
                            <Code textStyle='dark-plus' style={getComponent.import_style} language={'bash'} code={getComponent.import_code} />
                        </div>
                        <Separator />
                        <div className='p-2'>
                            <Title className='font-bold'>Example</Title>
                            <Tabs defaultValue='usage' className='mt-2'>
                                <TabsList>
                                    <TabsTrigger value='usage'>Usage</TabsTrigger>
                                    <TabsTrigger value='code'>Example Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value='usage'>
                                    {getComponent.example_component}
                                </TabsContent>
                                <TabsContent value='code'>
                                    <Code style={getComponent.code_style} textStyle='duotonesea' language='jsx' code={getComponent.example_code} />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </main>
                <section className='mt-[20px] left-sidebar'>
                    <LeftSide mobile={false} />
                </section>

            </div>
        </>
    )
}

