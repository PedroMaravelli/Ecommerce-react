import './index.css'

interface Props{
    title: string
}


function ButtonBuy ({title}: Props){
    return(
        <button >{title}</button>
    )

}
export default ButtonBuy