//create list group component
import { useState } from "react";

//create props
interface Props {
    items: string[];
    heading: string;
}
function ListGroup({ items, heading }: Props) {
    //create a list
    //const items = ["Hargeisa", "Burco", "Berbera", "Borama", "Ceerigabo"];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            {/* fragmentation */}
            <h1>{heading} </h1>
            <ul className="list-group">
                {items.map((item, index) => <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => setSelectedIndex(index)}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;