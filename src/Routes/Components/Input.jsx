import classes from "./Input.module.scss"
const Input = ({placeholder,value,onChange})=>{
    return(
        <input
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )

}

export default Input