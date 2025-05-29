function PrintItem(props) {
  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-6">{props.todoName}</div>
        <div className="col-4">{props.todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn-size" onClick={()=>{props.onDeleteClick(props.todoName)}}>
            Delete
          </button>
        </div>
      </div>
    
    </div>
  );
}

export default PrintItem;
