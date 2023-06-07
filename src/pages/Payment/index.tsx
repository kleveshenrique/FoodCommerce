

import {Container,Form,Inner} from "./styles"
import logoImg from '../../assets/logo.svg'
import { Head } from "../../components/Head"



export function Payment(){
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
                        <legend>Endereço de Entrega</legend>
                        <div className="field">
                            <label htmlFor="zipcode">Cep</label>
                            <input id="zipcode" name="zipcode" type="text" placeholder="Cep" />
                        </div>
                        <div className="field">
                            <label htmlFor="street">Endereço</label>
                            <input id="street" name="street" type="text" placeholder="Endereço" />
                        </div>
                        <div className="groupField">
                            <div className="field">
                                <label htmlFor="number">Número</label>
                                <input id="number" name="number" type="text" placeholder="Número" />
                            </div>
                            <div className="field">
                                <label htmlFor="complement">Complemento</label>
                                <input id="complement" name="complement" type="text" placeholder="Complemento" />
                            </div>                        
                        </div>
                        <div className="groupField">
                            <div className="field">
                                <label htmlFor="neighbothood">Bairro</label>
                                <input id="neighbothood" name="neighbothood" type="text" placeholder="Bairro" />
                            </div>
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input id="city" name="city" type="text" placeholder="Cidade" />
                            </div>  
                            <div className="field">
                                <label htmlFor="state">Estado</label>
                                <select id="state" name="state">
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
                    <fieldset>
                        <legend>Cobrança</legend>
                        <div className="field">
                            <label htmlFor="cred-cart-number">Número do cartão</label>
                            <input id="cred-cart-number" name="cred-cart-number" type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="cred-cart-holder-name">Nome impresso no cartão</label>
                            <input id="cred-cart-holder-name" name="cred-cart-holder-name" type="text" />
                        </div>
                        <div className="groupField">
                            <div className="field">
                                <label htmlFor="cred-cart-expiration">Validade(MM/AA)</label>
                                <input id="cred-cart-expiration" name="cred-cart-expiration" type="text" />
                            </div>
                            <div className="field">
                                <label htmlFor="cred-cart-code">Código de segurança (cvv)</label>
                                <input id="cred-cart-code" name="cred-cart-code" type="text" />
                            </div>                        
                        </div>
                    </fieldset>
                </Form>
            </Inner>
        </Container>
    )
}