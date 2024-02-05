import { Alert } from "react-bootstrap"
function Alertaprin({variant,text}){
    return(
        <Alert key={variant} variant={variant}>
            {text}
        </Alert>
    )
   
}
export default Alertaprin