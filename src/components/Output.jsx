import React,{useState} from "react"



const Output = ({patient,fileURL,setSumbit}) =>{

    const [v,sV] = useState(1);

    return(
        <div className="main">
            <div className="main-header">
                <div className="logo">Sponge</div>
                <div style={{padding:"5px",borderRadius:"50%",color:"white",fontWeight:"500"}} onClick={()=>{setSumbit(0)}}>Back</div>
            </div>
            <div className="main-body" style={{justifyContent:"center",alignItems:"center"}} >
                <div className="input-con" >
                    <div className="input-title"><div>Result</div></div>
                    <div  className="input-body">
                        <div className="input-form">
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Patient's Name</div>
                                <span>{patient.name}</span>
                            </div>
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Age</div>
                                <span>{patient.age}</span>
                            </div>
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Sex</div>
                                <span>{patient.sex}</span>
                            </div>
                            <div style={{marginBottom:"30px"}}>
                                <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Patient's Contact :</div>
                                <span>{patient.contact}</span>
                            </div>
                        </div>
                        <div className="image-drop">
                            <img src={fileURL} className="output-image" />
                            {v?<div style={{color:"white",background:"green",padding:"5px 10px",borderRadius:"5px",height:"10%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontWeight:"500"}}><div>Normal</div></div>:<div style={{color:"white",background:"red",padding:"5px 10px",borderRadius:"5px",height:"10%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontWeight:"500"}}><div>Adenocarcinoma</div></div>}                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Output;