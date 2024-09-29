
function Message(props) {
    const styles = {
        backgroundColor: props.message.length !== 0 ? 'greenyellow' : 'white',
        fontSize:'medium',
        fontWeight: '500',
        width: '400px',
        borderRadius: '4px',
        padding: '20px'
      }
    return (
        <>
         <h3 style= {styles} className="success-message">{props.message}</h3>
        </>
       
    )
}

export default Message;
