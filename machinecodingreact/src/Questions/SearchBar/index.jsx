import { useEffect } from "react";
import { useState } from "react"
import { memoizedFunction } from "./utilities/memoize";


export const SearchBar = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [text, setText] = useState('');
    const [selectedItem , setSelectedItem] = useState(''); 

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                const segregatedData = data.map(item => item.name.common);
                console.log(segregatedData);
                setData(segregatedData);
                setLoading(false);
            }).catch(err => { console.log('err', err) })
    }, [])

    const handleChange = memoizedFunction(
        function (e) {
            const findData = data.filter(item => item.toLowerCase().includes(e.target.value));
            setFilteredData(findData);
            console.log(e.target.value , " " , findData);
        }
        , 150);

    const handleValueSelect = (item)=>{
        setSelectedItem(item)
    }

    const highlightText=(text , searchText)=>{
        const index = text.toLowerCase().indexOf(searchText.toLowerCase());
        if( index == -1 || !searchText ) return <p className="no-underline">{text}</p>;

        const beforeMatch = text.slice(0 , index);
        const match = text.slice(index , index + searchText.length -1);
        const afterMatch = text.slice(index+searchText.length);

        return (
            <p className="no-underline">
                <span className="no-underline">{beforeMatch}</span>
                <span className="text-blue-700">{match}</span>
                <span className="no-underline">{afterMatch}</span>
            </p>
        )
    }


    return (
        <div className="w-full flex flex-col p-1">
            <input className="border-2 text-center" value={text} placeholder="Enter Text" type="text" onChange={(e) => {handleChange(e); setText(e.target.value);}} />
            {loading
                ? <div className="h-[200px] w-[auto] overflow-auto text-center bg-amber-500 ">Loadin....</div>
                : <div className="h-[200px] w-[auto] overflow-auto text-center bg-amber-500 ">
                    <ul>
                        {filteredData.map((item, key) => {
                            return (
                                <li key={key} onClick={() => handleValueSelect(item)}>
                                    {highlightText(item, text)}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
            <h2 className="no-underline decoration-transparent">
                Selected Item : { selectedItem }
            </h2>
        </div>
    )
}

export default SearchBar