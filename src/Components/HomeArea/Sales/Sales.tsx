import "./Sales.css";

// Conditional Rendering

function Sales(): JSX.Element {
    return (
        <div className="Specials Box">
			<p>
        
                { isTheFirstOfTheMonth() ? <span>sales for the start of the month, 10% off</span> : <span>no sales today</span> }
                
            </p>
        </div>
    );
}

function isTheFirstOfTheMonth(): boolean {
    const current = new Date();
    let date = current.getDate();
    return date === 1;
}

export default Sales;