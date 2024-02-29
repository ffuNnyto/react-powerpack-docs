import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { Each, InfiniteLoader } from 'react-powerpack';

export default function ExampleInfiniteLoader() {

    const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 10 }, (_, i) => i + 1));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLoadMore = () => {
        setIsLoading(true);
        setNumbers(prevNumbers => [...prevNumbers, ...Array.from({ length: 10 }, (_, i) => prevNumbers.length + i + 1)]);
        setIsLoading(false);
    }



    const CustomLoader = () => {
        return <div>Loading...</div>;
    }

    const renderGridItems = () => {
        return (

            <Each of={numbers} render={(item, idx) =>
                <div className='grid grid-cols-3'>
                    <div grid-idx={idx} className='bg-pink-400 p-1 m-1 rounded-md'>Grid Item</div>
                    <div grid-idx={idx} className='bg-blue-400 p-1 m-1 rounded-md'>Grid Item</div>
                    <div grid-idx={idx} className='bg-pink-700 p-1 m-1 rounded-md'>Grid Item</div>
                </div>
            } />

        )
    }

    const renderContent = () => {
        return (
            <ul>
                <Each of={numbers} render={(number, idx) =>
                    <li key={idx} className='dark:bg-secondary bg-primary text-secondary dark:text-primary rounded-md p-1 m-2'>
                        item: {number} with index: {idx}
                    </li>
                } />
            </ul>
        );
    };

    return (
        <div className='p-2 border-2 rounded-xl'>


            

            <div className='overflow-auto max-h-[200px]'>

                <InfiniteLoader
                    onLoadMore={handleLoadMore}
                    isLoading={isLoading}
                    renderContent={renderContent}
                    loadingComponent={<CustomLoader />}
                />
            </div>


            <Separator className='mt-10 mb-10' />


            <div className='overflow-auto max-h-[200px] '>

                <InfiniteLoader
                    onLoadMore={handleLoadMore}
                    isLoading={isLoading}
                    renderContent={renderGridItems}
                    loadingComponent={<CustomLoader />}
                />
            </div>

        </div>
    )
}