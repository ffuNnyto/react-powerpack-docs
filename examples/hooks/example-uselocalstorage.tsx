import Code from '@/src/components/ui/code';
import { Input } from '@/src/components/ui/input';
import { useLocalStorage } from 'react-powerpack';

export default function ExampleUseLocalStorage() {


    const [localStorageTest, setLocalStorageTest] = useLocalStorage<string>('uselocalstorage', 'you can edit in realtime and check localstorage')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalStorageTest(event.target.value)
    }

    return (
        <div className='p-2 border-2 rounded-xl'>


            <Code language='javascript' style={{}} code={`const [localStorageTest, setLocalStorageTest] = useLocalStorage<string>('uselocalstorage', '${localStorageTest}')`} />


            <Input value={localStorageTest?.toString()} onChange={onChange} />

        </div>
    )
}