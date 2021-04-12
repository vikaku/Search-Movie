import React,{useState} from 'react';

const Search = (props) => {

    const [text , setText] = useState("");

    const handleChange = (e)=>{ 
        setText(e.target.value);
        console.log(text)

    }

    const handleReset = () =>{
        setText("")
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.search(text);
        handleReset();
        
    }

    return (

        <div>
            <form className= "search">
                <input type={text}
                        onChange={handleChange} 
                        value={text}
                />
                <input type ="submit" onClick={handleSubmit} value="SEARCH" />
            </form>
        </div>
    )
}

export default Search