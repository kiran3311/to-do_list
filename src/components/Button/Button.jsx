import AddCircleIcon from '@mui/icons-material/AddCircle';

const Button = (props) => {
    console.log('Button Component =======>>');
    return (
    
        <>
        <AddCircleIcon onClick={props.onClickHandler} className="add">
        </AddCircleIcon>
        </>
        
    
)};

export default Button;