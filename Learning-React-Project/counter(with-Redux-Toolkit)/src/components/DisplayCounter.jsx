import { useSelector } from "react-redux";


const DisplayCounter=()=>{

  const {counterVal} = useSelector(store => store.counter);
  return(
    <center>
<div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Counter Current Value:{counterVal}
        </p>
        </div>
        </center>
  );
}

export default DisplayCounter;