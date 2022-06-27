import React,{useState} from "react";
import Dropzone from "react-dropzone";


const Input = ({setFileName,setFileURL,setPatient,fileURL,setSumbit,fileName}) =>{

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");

    const onSubmit = () =>{
        if(name!=="" && age!=="" && contact!=="" && fileURL!==""){
            setPatient({
                name:name,
                age:age,
                contact:contact,
                sex: document.getElementById("sex").value
            })
            const formData = new FormData();
            formData.append('file',fileName); 
            var options = {
                method : 'POST',
                headers:{
                    'accept': 'application/json',
                    'Content-Type' : 'multipart/form-data'
                },
                body:formData
            };
            fetch("http://localhost:8000/model/predict/",options)
                .then((res)=>res.json())
                .then((data)=>{console.log(data);
                    setSumbit(1);})
        }
    }

    const handleDrop = (acceptedFiles) =>{
        setFileName(acceptedFiles[0])
        setFileURL(URL.createObjectURL(acceptedFiles[0]))
    }


    return(
        <div className="main">
            <div className="main-header">
                <div className="logo">Sponge</div>
                <div></div>
            </div>
            <div className="main-body" style={{justifyContent:"center",alignItems:"center"}} >
                <div className="input-con" >
                    <div className="input-title"><div>Enter details and upload CT scan</div></div>
                    <div  className="input-body">
                        <div className="input-form">
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Patient's Name</div>
                                <input type="text" className="login-input" onChange={(e)=>setName(e.target.value)} value={name} />
                            </div>
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Age</div>
                                <input min="0" type="number" className="login-input"  onChange={(e)=>setAge(e.target.value)} value={age} />
                            </div>
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Sex</div>
                                <select class="classic-select" id="sex">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Patient's Contact</div>
                                <input type="email" className="login-input"  onChange={(e)=>setContact(e.target.value)} value={contact} />
                            </div>
                        </div>
                        <div className="image-drop">
                            <Dropzone
                                onDrop={handleDrop}
                                accept="image/*"
                                minSize={1024}
                                maxSize={3072000}
                            >
                                {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps({ className: "dropzone" })}>
                                    <input {...getInputProps()} />
                                    <p>Drag'n'drop images, or click to select files</p>
                                </div>
                                )}
                            </Dropzone>
                            {fileURL===""?null:<div style={{color:"white",background:"green",padding:"5px 10px",borderRadius:"5px",height:"6%",display:"flex",alignItems:"center",justifyContent:"center"}}><div>uploaded</div></div>}
                            {/* <img src={fileName} /> */}
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",hieght:"10%",width:"100%",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
                        <div  className="login-button" onClick={()=>{onSubmit()}}>Submit</div>
                        <div  className="login-button" onClick={()=>{setName("");setAge("");setContact("");setFileURL("");setFileName("")}}>Reset</div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Input;