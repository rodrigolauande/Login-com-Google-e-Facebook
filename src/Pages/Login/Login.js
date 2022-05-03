import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Api from '../../Api';
import { AreaLogin } from './AreaLogin';
import {BtnDefaultIcons, BtnDefault} from '../../componentes/Btn';
import {AiFillFacebook} from 'react-icons/ai';
import {IoIosArrowBack} from 'react-icons/io'

function Login({onReceiveGoogle, onReceiveFacebook}) {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }

    const actionLoginFacebook = async () => {
        let result = await Api.facebookLogar();

        if(result){
            onReceiveFacebook(result.user);
        }else{
            alert('Error');
        }
    }
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/registrar">
                    <AreaLogin>
                    <h1 className="Organize">
                        <Link to="/"><IoIosArrowBack /></Link>
                        Crie sua conta
                    </h1>

                    <p>Crie sua conta, e gratis!</p>

                    <form>
                    <div className="form-input">
                            <label>Nome</label>
                            <input type="text" />
                        </div>

                        <div className="form-input">
                            <label>E-mail</label>
                            <input type="email" />
                        </div>
                        
                        <div className="form-input">
                            <label>Senha</label>
                            <input type="password" />
                        </div>

                        <BtnDefault>Comece Agora!</BtnDefault>

                        <div className="footerLogin">
                            Ja tem um conta?
                            <Link to="/"> Fazer Login</Link>
                        </div>
                    </form>

                    </AreaLogin>
                </Route>

                <Route exact path="*">
                <AreaLogin>
                    <h1>Faca Login na sua conta</h1>

                    <BtnDefaultIcons onClick={actionLoginFacebook} >
                    <AiFillFacebook />
                    <div className='center'>Fazer login com facebook</div>
                    </BtnDefaultIcons> 

                    <BtnDefaultIcons onClick={actionLoginGoogle}>
                    <AiFillFacebook />
                    <div className='center'>Fazer login com google</div>
                    </BtnDefaultIcons> 

                    <p>ou</p>

                    <form>
                        <div className="form-input">
                            <label>E-mail</label>
                            <input type="email" />
                        </div>
                        
                        <div className="form-input">
                            <label>Senha</label>
                            <input type="password" />
                        </div>

                        <BtnDefault>Entrar</BtnDefault>

                        <div className="footerLogin">
                            Nao tem um conta?
                            <Link to="/registrar"> Registre-se</Link>
                        </div>
                    </form>
                </AreaLogin>

                </Route>
            </Switch>
</BrowserRouter>
    )
}

export default Login