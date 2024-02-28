export const EachCodeString = `
    export function App() {
        const [nums, setNums] = useState([0,1,2,3,4,5]);
        
        return (
            <Each of={nums} render={(num, index) => 
                <div>
                    render {num}
                </div>
            } />
        )
    }`