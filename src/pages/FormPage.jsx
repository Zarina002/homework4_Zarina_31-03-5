import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function FormPage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const dispatch = useDispatch()

    const {isLight} = useSelector(state => state.themeReducer)

    const submit = () => {
        dispatch({
            type: "CHANGE_INFO",
            payload: {name, age}
        })
        alert("Опубликовано")
    }

    const changeTheme = () => {
        dispatch({
            type: "CHANGE_THEME"
        })
    }

    return (
        <div>
            <button style={isLight ? {backgroundColor: "#f9f9f9", color: 'black'} : {backgroundColor: "black", color: "white"}} onClick={changeTheme}>change theme</button>
            <Link to="/user-info">user page</Link>
            <input onChange={(e)=>{setName(e.target.value)}} type="text"/>
            <input onChange={(e)=>{setAge(e.target.value)}} type="number"/>
            <button style={isLight ? {backgroundColor: "#f9f9f9", color: 'black'} : {backgroundColor: "black", color: "white"}} onClick={submit}>опубликовать</button>
        </div>
    );
}

export default FormPage;