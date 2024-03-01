import { Button } from '@/src/components/ui/button';
import Code from '@/src/components/ui/code';
import { Title } from '@/src/components/ui/title';
import { useEffect } from 'react'
import { Show, useApi } from 'react-powerpack'
import { Link } from 'react-router-dom';

export default function ExampleHookUseApi() {

    let { request, data } = useApi('https://randomuser.me/api/', 'get')

    useEffect(() => {
        request();
    }, [])

    const newRequest = () => {
        request();
    }

    return (
        <div className='p-2 border-2 rounded-xl'>

            <Button onClick={newRequest} variant={'outline'}>New Request</Button>
            <Show>
                <Show.When isTrue={data !== null}>
                    <Code language='json' style={{ wordWrap: 'break-word', wordBreak: 'break-word' }} code={JSON.stringify(data, null, 2)} />
                </Show.When>
                <Show.Else>
                    <div className='bg-red-500 p-2 rounded-lg'>request error</div>
                </Show.Else>
            </Show>
        </div>
    )
}

export function RequirementInfo() {
    return (

        <div className='p-2'>
            <Title className='font-bold'>Requirements</Title>
            <div className='requirement_useapi_info'>
                <div className='font-bold text-[17px] m-2'>- axios</div>
                <div className='axios_npm_url m-2 font-italic underline'>
                    <Link target='_blank' to='https://www.npmjs.com/package/axios'>
                        Axios NPM
                    </Link>
                </div>
                <div className='axios-description ml-2'>
                    Promise based HTTP client for the browser and node.js
                </div>
                <Code language='bash' style={{}} textStyle='onedark' code='npm install axios' />
            </div>
        </div>

    )
}