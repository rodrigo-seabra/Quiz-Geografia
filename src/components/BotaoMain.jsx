import Style from "./BotaoMain.module.css"

function BotaoMain (props)
{
    return(
        <button onClick={props.funcao} >
            <span className={Style.box}>{props.name}</span>
        </button>  
    )
}

export default BotaoMain;