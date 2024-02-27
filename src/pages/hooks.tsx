import LeftSide from '@/components/layout/leftside';
import { NavigationTopMenu } from '@/components/navigation/top-navigator';
import { Link, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/title';
import Code from '@/components/ui/code';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getHookByName } from './hooks/hooksconfig';
import GitHubIcon from '@/components/ui/githubico';


export default function PageHooks() {

    let path = useLocation().pathname.split('/')[2]
    let getComponent = getHookByName(path.toLowerCase());

    if (!getComponent)
        return <>error</>

    return (
        <>
            <NavigationTopMenu />
            <div className='holy-grail-grid mt-20'>
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
                                        <GitHubIcon className='ml-1' fill='#fff' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className='p-2'>
                            <Title className='font-bold'>Import</Title>
                            <Code style={getComponent.import_style} language={'jsx'} code={getComponent.import_code} />
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
                                    <Code style={getComponent.code_style} language='jsx' code={getComponent.example_code} />
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

