const ButtonContainer=({onButtonclick})=>{

  const buttonnames =['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.',];
  return(

    <div className="button-container">
{buttonnames.map((buttonname) =>{ 
  return  <button className="button" onClick={()=>onButtonclick(buttonname)} >{buttonname}</button>
  }) }
         
        
        </div>
  )
}

export default ButtonContainer;