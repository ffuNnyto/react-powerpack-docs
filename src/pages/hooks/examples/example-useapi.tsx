import { Button } from '@/components/ui/button';
import Code from '@/components/ui/code';
import { useEffect } from 'react'
import { Show, useApi } from 'react-powerpack'

export default function ExampleHookUseApi() {

    let { request, data} = useApi('https://randomuser.me/api/', 'get')

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