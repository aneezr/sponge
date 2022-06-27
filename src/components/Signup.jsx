import React,{useState} from "react";


const SignUp = ({setNewSignIn}) => {

    const[fn,setFn] = useState("")
    const[p,setP] = useState("")
    const[em,setEm] = useState("")
    const[ln,setLn] = useState("")

    const onSubmit = () =>{
        const options = {
            method:"POST",
            headers:{
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                "first_name": fn,
                "last_name": ln,
                "email_id": em,
                "password": p
            })
        }
        fetch("http://localhost:8000/sign-up/",options)
            .then((res)=>res.json)
            .then((data)=>{console.log(data);setNewSignIn(0);})
            .catch((e)=>console.log(e))
    }

    return(
        <div className="main">
            <div className="main-header">
                    <div className="logo">Sponge</div>
                    <div></div>
            </div>
            <div className="main-body">
                <div></div>
                <div className="login-con">
                    <div style={{fontWeight:"700",fontSize:"25px",marginTop:"30px"}}>Sign Up</div>
                    <div style={{width:"80%"}}>
                        <div>
                        <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>First Name</div>
                            <input type="text" style={{padding:"7px 10px",width:"100%"}} value={fn} onChange={(e)=>setFn(e.target.value)} />
                        </div>
                        <div>
                        <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>Last Name</div>
                            <input type="text" style={{padding:"7px 10px",width:"100%"}} value={ln} onChange={(e)=>setLn(e.target.value)} />
                        </div>
                        <div>
                        <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>email</div>
                            <input type="email" style={{padding:"7px 10px",width:"100%"}} value={em} onChange={(e)=>setEm(e.target.value)} />
                        </div>
                        <div>
                            <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>password</div>
                            <input type="password" style={{padding:"7px 10px",width:"100%"}} value={p} onChange={(e)=>setP(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div onClick={()=>{onSubmit()}} className="login-button" style={{marginBottom:"15px",fontWeight:"500",fontSize:"18px"}}>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default SignUp;
