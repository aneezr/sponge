import React,{useState} from "react";


const Login = ({setIsLoggedIn,setNewSignIn}) => {

    const[p,setP] = useState("")
    const[em,setEm] = useState("")

    const onSubmit = () =>{
        const options ={
            method:"POST",
            headers:{
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                "username": em,
                "password": p
            })
        }
        console.log(options)
        fetch("http://localhost:8000/login/",options)
            .then((res)=>{if(res.status==200){setIsLoggedIn(1)}})
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
                    <div style={{fontWeight:"700",fontSize:"25px",marginTop:"30px"}}>Sign In</div>
                    <div style={{width:"80%"}}>
                        <div style={{marginBottom:"30px"}}>
                            <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>username</div>
                            <input type="text" style={{padding:"7px 10px",width:"100%"}} value={em} onChange={(e)=>setEm(e.target.value)} />
                        </div>
                        <div>
                            <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>password</div>
                            <input type="password" style={{padding:"7px 10px",width:"100%"}} value={p} onChange={(e)=>setP(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div onClick={() =>{onSubmit()} } className="login-button">login</div>
                        <div onClick={() => setNewSignIn(1)} className="login-button" style={{marginBottom:"15px",fontWeight:"500",fontSize:"18px"}}>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Login;
