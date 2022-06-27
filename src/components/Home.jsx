import React,{useState} from "react";

import  Input  from "./Input";
import  Output  from "./Output";


const Home = () =>{

    const [fileName, setFileName] = useState("");
    const [fileURL, setFileURL] = useState("");
    const [submit, setSumbit] = useState(0);

    const[patient,setPatient] = useState("");

    return(submit?<Output setSumbit={setSumbit} patient={patient} fileURL={fileURL} fileName={fileName} />:<Input setSumbit={setSumbit} fileName={fileName} fileURL={fileURL} setFileName={setFileName} setFileURL={setFileURL} setPatient={setPatient} />)
}

export default Home;