

import {Container,Form,Inner} from "./styles"
import logoImg from '../../assets/logo.svg'
import { Head } from "../../components/Head"
import BtnPayOrder from "../../components/BtnPayOrder"
import { useCart } from "../../hooks/useCart"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { currencyFormat } from "../../helpers/currencyFormat"
import { useState } from "react"
import axios from "axios"

import {ClientInterface} from "../../interface/ClientInterface"

const ClientSchema = yup
  .object().shape({
    fullName: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    mobile: yup.string().required("Contato obrigatório"),
    cpf: yup.string(),
    payForm:yup.string(),      
    orderValue:yup.string(),      
    payChange:yup.string(),       
    zipcode:yup.string(),       
    street:yup.string().required("Endereço obrigtório"),       
    number:yup.string().required("Número obrigtório"),      
    complement:yup.string(),      
    neighbothood:yup.string().required("Bairro obrigtório"),       
    city:yup.string().required("Cidade obrigtório"),   
    state:yup.string().required("Estado obrigtório"),
}).required()

  

export function Payment(){

    const {cart} = useCart()
    const valorPedido = cart.reduce((acc,currente)=>acc+currente.subTotal,0)

    const [payForm,setPayForm] = useState('')
    

    const { register, handleSubmit,formState: { errors } } = useForm<ClientInterface>({
        resolver: yupResolver(ClientSchema),
    });

    const onSubmit = (data:ClientInterface)=>{
        console.log(JSON.stringify(data, null, 4));
    }

   
    
    
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
                <Form   onSubmit={handleSubmit(onSubmit)}>
                    <h1>Informações Pessoais</h1>
                    <div className="field">
                        <label htmlFor="fullName">Nome e Sobrenome</label>
                        <input 
                            id="fullName"                            
                            type="text"
                            placeholder="Nome e sobrenome"
                            {...register("fullName")}
                            />
                            {errors.fullName && <span className="erro">{errors.fullName?.message}</span>}
                    </div>
                    <div className="groupField">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" {...register("email")} type="text" placeholder="E-mail" />
                            {errors.email && <span className="erro">{errors.email?.message}</span>}
                        </div>
                        <div className="field">
                            <label htmlFor="mobile">Contato</label>
                            <input id="mobile" {...register("mobile")} type="text" placeholder="Celular" />
                            {errors.mobile && <span className="erro">{errors.mobile?.message}</span>}
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF/CNPJ</label>
                            <input id="cpf" {...register("cpf")} type="text" placeholder="Cpf"/>
                        </div>
                    </div>
                    
                    <fieldset>
                        {/* <legend>Pagamento</legend> */}
                        
                        <div className="groupField">
                            <div className="field">  
                                <label htmlFor="payForm">Forma de pagamento</label> 
                                <select id="payForm" {...register("payForm")} onChange={(e)=>setPayForm(e.target.value)}>
                                    <option value="selecione">Selecione...</option>
                                    <option value="money">Dinheiro</option>
                                    <option value="pix">Pix</option>                                    
                                    <option value="card">Cartão</option>
                                </select>                           
                                {errors.payForm && <span className="erro">{errors.payForm?.message}</span>}
                            </div>
                            <div className="field">
                                <label htmlFor="orderValue">Valor do pedido</label>
                                <input id="orderValue" {...register("orderValue")} type="text" value={currencyFormat(valorPedido)} disabled />
                                
                            </div> 
                            {payForm=='money' &&    
                                <div className="field">
                                    <label htmlFor="payChange">Troco para quanto?</label>
                                    <input id="payChange" {...register("payChange")} type="text" placeholder="Caso precise de troco."/>
                                    
                                </div>
                            }                     
                        </div>
                    </fieldset>
                    
                    <fieldset>
                        <legend>Endereço de Entrega</legend>
                        <div className="field">
                            <label htmlFor="zipcode">Cep</label>
                            <input id="zipcode" {...register("zipcode")} type="text" onBlur={(e)=>handleGetAddressByZipeCode(e.target.value)} placeholder="Cep" />
                            {errors.zipcode && <span className="erro">{errors.zipcode?.message}</span>}
                        </div>
                        <div className="field">
                            <label htmlFor="street">Endereço</label>
                            <input id="street" {...register("street")} type="text" value={address.logradouro} placeholder="Endereço" />
                            {errors.street && <span className="erro">{errors.street?.message}</span>}
                        </div>
                        <div className="groupField">
                            <div className="field">
                                <label htmlFor="number">Número</label>
                                <input id="number" {...register("number")} type="text" placeholder="Número" />
                                {errors.number && <span className="erro">{errors.number?.message}</span>}
                            </div>
                            <div className="field">
                                <label htmlFor="complement">Complemento</label>
                                <input id="complement" {...register("complement")} type="text" value={address.complemento} placeholder="Complemento" />
                                {errors.complement && <span className="erro">{errors.complement?.message}</span>}
                            </div>
                                                    
                        </div>
                        <div className="groupField">
                            <div className="field">
                                <label htmlFor="neighbothood">Bairro</label>
                                <input id="neighbothood" {...register("neighbothood")} type="text" value={address.bairro} placeholder="Bairro" />
                                {errors.neighbothood && <span className="erro">{errors.neighbothood?.message}</span>}
                            </div>
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input id="city" {...register("city")} type="text" value={address.localidade} placeholder="Cidade" />
                                {errors.city && <span className="erro">{errors.city?.message}</span>}
                            </div>  
                            <div className="field">
                                <label htmlFor="state">Estado</label>
                                <select id="state"  {...register("state")} value={address.uf}>
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
                                {errors.state && <span className="erro">{errors.state?.message}</span>}
                            </div>                       
                        </div>
                    </fieldset>   
                                     
                    <BtnPayOrder />
                </Form>
                
            </Inner>
           
        </Container>
    )
}