export const InfiniteLoaderCodeString = `
    export function App() {
        const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 10 }, (_, i) => i + 1));
        const [isLoading, setIsLoading] = useState<boolean>(false);

        const handleLoadMore = () => {
            setIsLoading(true);
            setNumbers(prevNumbers => [...prevNumbers, ...Array.from({ length: 10 }, (_, i) => prevNumbers.length + i + 1)]);
            setIsLoading(false);
        };

        const CustomLoader = () => {
            return <div>Loading...</div>;
        };

        const renderContent = () => {
            return (
                <ul>
                    <Each of={numbers} render={(number, idx) =>
                        <li key={idx}>
                            item: {number} with index: {idx}
                        </li>
                    } />
                </ul>
            );
        };
        
        return (
            <div style={{overflow:'auto',maxHeight:'200px'}}>
                <InfiniteLoader
                    onLoadMore={handleLoadMore}
                    isLoading={isLoading}
                    renderContent={renderContent}
                    loadingComponent={<CustomLoader />}
                />
            </div>
        )
    }`