import axios from 'axios';
import React, { useState } from 'react';

const FileUpload = () => {
    const [myFile, setMyFile] = useState("");
    const URL = "http://localhost:9000/upLoadFile";

    const changeFile = (e) => {
        console.log(e.target.files[0]);
        let myImage = e.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(myImage); 
        reader.onload = (e) => {
            setMyFile(e.target.result);
            console.log(reader.result);
        };


    };
    const upLoadFile= ()=> {
        axios.post(URL, {myFile})
        .then((response)=>{
            console.log(response)
        })
    }

    return (
        <div className="flex items-center space-x-4">
        <input type="file" className="border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md" onChange={(e) => changeFile(e)} />
        <button className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={upLoadFile}>
            Upload File
        </button>
    </div>
    
    );
};

export default FileUpload;
