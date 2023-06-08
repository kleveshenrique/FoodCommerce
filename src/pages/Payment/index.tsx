

import {Container,Form,Inner} from "./styles"
import logoImg from '../../assets/logo.svg'
import { Head } from "../../components/Head"
import BtnPayOrder from "../../components/BtnPayOrder"
import { useCart } from "../../hooks/useCart"

import { currencyFormat } from "../../helpers/currencyFormat"
import { useState } from "react"
import axios from "axios"

export function Payment(){

    const {cart} = useCart()
    const valorPedido = cart.reduce((acc,currente)=>acc+currente.subTotal,0)

    const [payForm,setPayForm] = useState('')

    const addressInitial = {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        ibge: "",
        gia: "",
        ddd: "",
        siafi: ""
    }
    const [address,setAdress] = useState(addressInitial)

    function handleGetAddressByZipeCode(zipCode:string){
        axios.get(`https://viacep.com.br/ws/${zipCode}/json/`).then((res)=>{
            if(res.data.erro){
                setAdress(addressInitial)
                return
            }

            setAdress(res.data)
            
        }).catch((error)=>{
            console.log(error)
        })

        console.log(address)
    }

    return(
        <Container>           
            <Head title="Pagamento"/>
            <header>                   
                <img src={logoImg} alt="Logo da Empresa" />            
            </header>  
                       
            <Inner>
                <Form>
                    <h1>Informações Pessoais</h1>
                    <div className="field">
                        <label htmlFor="full-name">Nome e Sobrenome</label>
                        <input id="full-name" type="text" placeholder="Nome e sobrenome" autoComplete="name"/>
                    </div>
                    <div className="groupField">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="text" placeholder="E-mail" autoComplete="email"/>
                        </div>
                        <div className="field">
                            <label htmlFor="mobile">Contato</label>
                            <input id="mobile" type="text" placeholder="Celular" autoComplete="phone"/>
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF/CNPJ</label>
                            <input id="cpf" type="text" placeholder="Cpf"/>
                        </div>
                    </div>
                    <fieldset>
                        {/* <legend>Pagamento</legend> */}
                        
                        <div className="groupField">
                            <div className="field">  
                                <label htmlFor="payForm">Forma de pagamento</label> 
                                <select name="payForm" id="payForm" onChange={(e)=>setPayForm(e.target.value)}>
                                    <option value="selecione">Selecione...</option>
                                    <option value="money">Dinheiro</option>
                                    <option value="pix">Pix</option>                                    
                                    <option value="card">Cartão</option>
                                </select>                           
                               
                            </div>
                            <div className="field">
                                <label htmlFor="orderValue">Valor do pedido</label>
                                <input id="orderValue" name="orderValue" type="text" value={currencyFormat(valorPedido)} disabled />
                            </div> 
                            {payForm=='money' &&    
                                <div className="field">
                                    <label htmlFor="payChange">Troco para quanto?</label>
                                    <input id="payChange" name="payChange" type="text" placeholder="Caso precise de troco."/>
                                </div>
                            }                     
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Endereço de Entrega</legend>
                        <div className="field">
                            <label htmlFor="zipcode">Cep</label>
                            <input id="zipcode" name="zipcode" type="text" onBlur={(e)=>handleGetAddressByZipeCode(e.target.value)} placeholder="Cep" />
                        </div>
                        <div className="field">
                            <label htmlFor="street">Endereço</label>
                            <input id="street" name="street" type="text" value={address.logradouro} placeholder="Endereço" />
                        </div>
                        <div className="groupField">
                            <div className="field">
                                <label htmlFor="number">Número</label>
                                <input id="number" name="number" type="text" placeholder="Número" />
                            </div>
                            <div className="field">
                                <label htmlFor="complement">Complemento</label>
                                <input id="complement" name="complement" type="text" value={address.complemento} placeholder="Complemento" />
                            </div>                        
                        </div>
                        <div className="groupField">
                            <div className="field">
                                <label htmlFor="neighbothood">Bairro</label>
                                <input id="neighbothood" name="neighbothood" type="text" value={address.bairro} placeholder="Bairro" />
                            </div>
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input id="city" name="city" type="text" value={address.localidade} placeholder="Cidade" />
                            </div>  
                            <div className="field">
                                <label htmlFor="state">Estado</label>
                                <select id="state" name="state" value={address.uf}>
                                    <option value="">Selecione</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                    <option value="EX">Estrangeiro</option>
                                </select>
                            </div>                       
                        </div>
                    </fieldset>
                    
                    <BtnPayOrder/>
                </Form>
                
            </Inner>
           
        </Container>
    )
}