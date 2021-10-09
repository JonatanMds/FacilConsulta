<template>
    <div id="revisaoCadastro">
        <b-button to="/Atendimento">ssss</b-button>
        

        <div id="main" class="container">
            <h1>Revisão do cadastro</h1>

            <b-row class="row">
                <b-col md="6">            
                    <div class="informacoes">
                        <p class="titulo">Nome Completo</p>
                        <p id="revisaoCadastro"> {{nome}} </p>
                    </div >
                    
                    <div  class="informacoes">
                        <p class="titulo">CPF</p>
                        <p id="revisaoCadastro"> {{cpf}} </p>
                    </div>
                    
                    <div  class="informacoes">
                        <p class="titulo">Estado/Cidade</p>
                        <p id="revisaoCadastro"> {{estado}}</p>
                    </div>
                    
                    <div  class="informacoes">
                        <p class="titulo">Especialidade principal</p>
                        <p id="revisaoCadastro"> {{especialidade}} </p>
                    </div>
                    
                    <div class="informacoes">
                        <p class="titulo">Preço da consulta</p>
                        <p id="revisaoCadastro"> R${{preco}} </p>
                    </div>
                    
                    <div class="informacoes">
                        <p class="titulo">Forma de pagamento</p>
                        <p id="revisaoCadastro"> {{}} </p>
                    </div>
                </b-col>  
                
                <b-col class="img-fluid" md="3">
                    <img src="@/assets/desktop-pagina-3.png" alt="">
                </b-col>
             </b-row> 
       

            <b-row class="row">
                <b-col md="12">
                    <b-button class="cadastrar" to="/Conclusao">CADASTRAR PROFISSIONAL</b-button>
                </b-col>

                <div class="editar">
                    <a href="http:/">Editar cadastro</a>
                </div>
            </b-row>
        </div>

    </div>
</template>

<script>
export default {
    name:"revisaoCadastro",
    data(){
        return{
            especialidade: null,
            nome: null,
            cpf: null,
            celular: null,
            estado: null,
            cidade: null,
            preco: null,
        }
    },

    methods:{
        async getCadastro(){
            const req = await fetch("http://localhost:3000/medico");
            const data = await req.json();

            this.nome = data.nome,
            this.cpf =  data.cpf,
            this.celular = data.celular,
            this.cidade= data.cidade,
            this.estado= data.estado
        }, 
        async getEsp(){
            const req = await fetch("http://localhost:3000/especialidadeMedica");
            const data = await req.json();

            this.especialidade = data.especialidade;
            this.preco = data.preco;
        }, 
    },

    mounted(){
        this.getCadastro();
        this.getEsp()
    }
}
</script>

<style src='./RevisaoStyle.css'>

</style>