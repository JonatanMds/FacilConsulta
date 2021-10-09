<template>
    <div id="sobreOProfissional" class="container mt-5">
        
        <!-- Inicio Header -->
        <div id="header">
            <h1>Sobre o profissional</h1>
            <h2>Dados do profissional</h2>
        </div>
        <!-- //Fim Header -->
    


        <!--Inicio Formulário-->
        <b-form class="container">
            
            <b-row class="row">

                <!-- Name -->
                <b-col md="6" sm="12">
                    <b-form-group label="Nome completo*" label.for="nome">
                        <b-form-input id="nome" 
                        class="inputArea"
                        v-model.trim="$v.nome.$model" 
                        placeholder="ex: Jonatan"
                        :state="nomeValidation"
                        ></b-form-input>
                        <p v-if="this.$v.nome.$error">São aceitos apenas letras</p> 
                    </b-form-group>
                <!-- Name -->
                
                <!-- CPF -->
                    <b-form-group class="mt-5" label="CPF*" label.for="cpf">
                        <b-form-input 
                        class="inputArea" 
                        v-model.trim="$v.cpf.$model" id="cpf" 
                        placeholder="ex: 126.598.745-89"
                        v-mask="'###.###.###-##'"
                        required
                        :state="cpfValidation"
                        ></b-form-input>
                        <p v-if="this.$v.cpf.$error">Digite apenas uma sequência de 11 números</p>   
                    </b-form-group>
                <!-- CPF -->

                <!-- Cell Phone -->
                    <b-form-group class="mt-5" label="Número de celular*" label.for="celular">
                        <b-form-input  
                        class="inputArea" 
                        v-model.trim="$v.celular.$model" 
                        id="celular"
                        placeholder="ex: (21) 98651-9654"
                        v-mask="'+55 (##) #####-####'"
                        required
                        :state="celularValidation"></b-form-input>
                        <p v-if="this.$v.celular.$error">Digite apenas uma sequência de 11 números</p>   
                    </b-form-group>
                </b-col>
                <!-- Cell Phone -->
                <!-- Img -->
                <b-col class="img-fluid" md="6">
                    <img src="@/assets/desktop-pagina-1.png" alt="">
                </b-col>
                
                <!-- Img -->
            </b-row>
                
                
            <b-row class="row">
                <!-- Estado -->
                <b-col md="3">
                    <b-form-group class="mt-5" label="Estado">
                        <select  class="selectArea" placeholder="Selecione seu estado" id="estado" v-model="estado">
                            <!-- <option value="Selecione a especialidade"></option> -->
                            <option v-for="estado in estados" :key="estado.id" :value="estado.tipo"> {{estado.tipo}} </option>
                        </select>
                    </b-form-group>
                </b-col>
                <!-- Estado -->
                
                <!-- Cidade -->
                <b-col md="3">   
                    <b-form-group class="mt-5" label="Cidade*">
                        <select  class="selectArea" placeholder="Selecione sua cidade" id="cidace" v-model="cidade">
                            <!-- <option value="Selecione a especialidade"></option> -->
                            <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.tipo"> {{cidade.tipo}} </option>
                        </select>
                    </b-form-group>
                </b-col>
                <!-- Cidade -->
            </b-row>
            
            <!-- Button -->
            <b-col md="6" class=" mt-5 button">
                <b-button id="button" to="/Atendimento" @click="createProfissional()">PRÓXIMO</b-button>
            </b-col>
            <!-- Button -->

        </b-form>
        <!-- Fim Formulario -->
    </div>
</template>


<script>
import {required, minLength, maxLength} from "vuelidate/lib/validators";
export default {
    name: "sobreOProfissional",
    data(){
        
        return{
                nome: null,
                cpf: null,
                celular: null,
                cidades: null,
                cidade: null,
                estado: null,
                estados: null
            }
        
        },

        //  Inicio Validação NAME, CPF, CELL PHONE
        validations:{
                nome:{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(48)
                    },

                cpf:{
                    required,
                    minLength: minLength(11)
                    },

                celular:{
                required,
                minLength: minLength(11)
                    }
            },

            computed:{
            nomeValidation(){
                if(this.$v.nome.$dirty == false){
                    return null
                }

                return !this.$v.nome.$error;
            },
            cpfValidation(){
                if(this.$v.cpf.$dirty == false){
                    return null
                }
                return !this.$v.cpf.$error
            },

            celularValidation(){
                if(this.$v.celular.$dirty == false){
                    return null
                }
                return !this.$v.celular.$error
            },
        },

        //  Fim Validação NAME, CPF, CELL PHONE
       
       
       methods:{
                        
            // Inicio Enviando informações para a API
            async createProfissional(){
            const data = {
                nome: this.nome,
                cpf: this.cpf,
                celular: this.celular,
                cidade: this.cidade,
                estado: this.estado 
                }
            const dataJson = JSON.stringify(data);

            const req = await fetch("http://localhost:3000/medico", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJson

                })

            const res = await req.json();

            console.log(res);
            },
            // Fim Enviando informações para a API

            
            
            // Inicio Buscando Informações API
            async getCadastro(){
                const req = await fetch("http://localhost:3000/valor");
                const data = await req.json();

                this.cidades = data.cidades;
            }, 
            async geteEstado(){
                const req = await fetch("http://localhost:3000/valor");
                const data = await req.json();

                this.estados = data.estados
                } 
        },

        mounted(){
            this.getCadastro();
            this.geteEstado()
        },

        // Fim Buscando Informações API
    
    }

</script>

// Style Page
<style src="./ProfissionalStyle.css">

</style>
