<template>

    <div id="atendimento">
        <b-button to="/">ssss</b-button>
        <div id="main" class="container mt-5">
            
            <div>
                <h1>Sobre o atendimento</h1>
                <h2>Detalhes do atendimento</h2>
            </div>


            
            <b-form class="container">
                <b-row class="row">
                    <b-col md="6" sm="12">

                        <!-- Inicio Input Especialidade -->
                        <b-form-group class="mt-5" label="Especialidade principal*" for="especialidade">
                            <select  class="inputArea" placeholder="Selecione a especialidade" id="especialidade" v-model="especialidade">
                                <option v-for="especialidade in especialidades" :key="especialidade.id" :value="especialidade.tipo"> {{especialidade.tipo}} </option>
                            </select>
                        </b-form-group>
                        <!-- Fim Input Especialidade -->

                        <!-- Inicio Input Preco consulta -->
                        <b-form-group class="mt-5" label="Informe o preço da consulta*" style="width: 80%;" id="preco">
                            <b-form-input class="inputArea" placeholder="Valor" 
                            required
                            v-model.trim="$v.preco.$model" id="preco"
                            :state="precoValidation"
                            ></b-form-input>
                            <p v-if="this.$v.preco.$error"></p>
                        </b-form-group>
                        <!-- Fim Input Especialidade -->

                        <!-- Inicio Checkbox forma de pagamento -->
                        <b-form-checkbox-group class="mt-5" label="Forma de pagamento da consulta">
                            <b-form-checkbox class="checkboxPagamento" value="Pix"><span style="margin-left: 40px">Pix</span></b-form-checkbox>
                            <b-form-checkbox class="checkboxPagamento" value="dinheiro"><span style="margin-left: 40px">Dinheiro</span></b-form-checkbox>
                            <b-form-checkbox class="checkboxPagamento" value="cartao"><span style="margin-left: 40px">Cartão de crédito</span></b-form-checkbox>
                        </b-form-checkbox-group>
                        <!-- Fim Checkbox forma de pagamento -->
                    </b-col>

                    
                    <!-- Inicio Imagem -->
                    <b-col class="img-fluid" md="6">
                        <img src="@/assets/desktop-pagina-2.png" alt="">
                    </b-col>
                    <!-- Inicio Imagem -->

                </b-row>

                <!-- Inicio button -->
                <b-col md="6">
                <b-button id="button" class="mt-5" to="/Revisao" @click="createProfissional()">PRÓXIMO</b-button>
                </b-col>
                <!-- Inicio button -->
            </b-form>
        </div>
    </div>
</template>



<script>
import {required, numeric} from "vuelidate/lib/validators";
export default {
    name: "atendimento",
    data(){
        return{
                especialidade: null,
                preco: null,
                especialidades: null
            }
    },
    
    //  Inicio Validação Preco
    validations:{
            preco:{
                required,
                numeric
        }
    },

    computed:{
        precoValidation(){
            if(this.$v.preco.$dirty == false){
                return null
            }
            return !this.$v.preco.$error;
        }
    },
    //  Fim Validação Preco

    
    // Inicio Enviando informações para a API
    methods:{
         async createProfissional(){
        const data = {
            preco: this.preco,
            especialidade: this.especialidade
        }

        const dataJson = JSON.stringify(data);

        const req = await fetch("http://localhost:3000/especialidadeMedica", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: dataJson

        })

        const res = await req.json();

        console.log(res);
        },

        async getCadastro(){
            const req = await fetch("http://localhost:3000/valor");
            const data = await req.json();

            this.especialidades = data.especialidades;
        } 
    },

    mounted(){
        this.getCadastro()
    }
    // Fim Enviando informações para a API
}
</script>

<style src="./AtendimentoStyle.css">

</style>