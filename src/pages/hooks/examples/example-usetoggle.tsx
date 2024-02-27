import { Checkbox } from '@/components/ui/checkbox';
import Code from '@/components/ui/code';
import { Separator } from '@/components/ui/separator';
import { useToggle } from 'react-powerpack';

export default function ExampleUseToggle() {

    const [isToggled, setToggle] = useToggle(false);

    return (
        <div className='p-5 items-center border-2 rounded-xl'>


            <div className='m-5'>
                <Code style={{}} language='javascript' code={`const [isToggled, toggle] = useToggle(${isToggled});`} />
            </div>

            <Separator />


            <div className='items-top flex space-x-2 m-5'>
                <Checkbox onClick={setToggle} checked={isToggled} id='terms1' />
                <div className='grid gap-1.5 leading-none'>
                    <label
                        htmlFor='terms1'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                        Accept terms and conditions
                    </label>
                    <p className='text-sm text-muted-foreground'>
                        You agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    )
}