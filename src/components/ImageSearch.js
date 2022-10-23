import React, { useState } from "react";

function ImageSearch(props) {
    const [text, setText] = useState("");

    function onSubmit(event){
        event.preventDefault();
        props.setTerm(text);
        setText("");
    }

    return <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b-2 border-green-500 py-2">
                <input onChange={event => setText(event.target.value)} value={text} type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search Image Term..." />
                <button type="submit" className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
            </div>
        </form>
    </div>
}

export default ImageSearch;