import "./List.css";

function List(): JSX.Element {

    const allShoseList = [
        { id: 1, name: "nike Blue butterflies" },
        { id: 2, name: "Nike Red dripping" },
        { id: 3, name: "Nike rainbow colors" },
        { id: 4, name: "Nike Sky Blue" },
        { id: 5, name: "Nike Roses" }

    ];

    return (
        <div className=" Box">
            <p>הדגמים שלנו:</p>
            <p>
                {allShoseList.map(item => <span key={item.id}>{item.name} | </span>)}
            </p>
        </div>
    );
}

export default List;
