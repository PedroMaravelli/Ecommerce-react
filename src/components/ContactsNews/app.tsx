import './index.css'
import ButtonBuy from '../Buttons/ButtonBuy/ButtonBuy'


function ContactsNews (){
    return(
        <div className='containerContactsNews'>
            <article className='textReceiveNews'>
                <h3>RECEBA AS NOVIDADES</h3>
                <p>Digite seu e-mail para receber as novidades antes de todos.</p>
            </article >
            <form action='/' method='post'>
                <article className='labelInput'>
                    <label>Nome</label>
                    <input type="text" name="name" id="inputName" placeholder='Insira seu nome ' />
                </article>
                <article className='labelInput'>
                    <label>E-mail</label>
                    <input type="email" name="email" id="inputEmail" placeholder='Insira seu e-mail' />
                </article>
                <ButtonBuy title='CADASTRAR'></ButtonBuy>
                
            </form>

        </div>
    )
}
export default ContactsNews