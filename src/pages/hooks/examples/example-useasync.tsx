import Code from '@/components/ui/code';
import { Show, useAsync } from 'react-powerpack';

export default function ExampleUseAsync() {

    const fetchUserData = async () => {

        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json();
    };

    const { isLoading, error, result } = useAsync(fetchUserData, []);

    return (
        <div className='p-2 border-2 rounded-xl'>
            <Show>
                <Show.When isTrue={isLoading}>
                    <div className='p-2'>
                        Loading Request
                    </div>
                </Show.When>
                <Show.When isTrue={result !== null}>
                    <Code language='json' style={{ wordWrap: 'break-word', wordBreak: 'break-word' }} code={JSON.stringify(result, null, 2)} />
                </Show.When>
                <Show.Else>
                    <div className='bg-red-500 p-2 rounded-lg'>{JSON.stringify(error)}</div>
                </Show.Else>
            </Show>
        </div>

    )
}