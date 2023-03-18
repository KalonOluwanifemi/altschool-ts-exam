<template><p class="about">About page</p>
<div class="info-container">
    <p class="info">This application was scaffolded with the Vue CLI.</p>
<p class="info">It is a simple application that can increase and Decrease a value</p>
<p class="info">To test the error page, just navigate to an unexisting route</p>
<p class="info">The functioning is housed in a composable folder</p>
<p class="info">Vuex is used for state management</p>
</div>
</template>

<script></script>
<style scoped>
    .info-container{
        margin-top: 80px;
    }
    .about{
        margin: 50px auto;
        padding: 8px 2px;
        background-color: skyblue;
        width: 200px;
        letter-spacing: 1px;

    }
    .info{
        width: 400px;
        margin: 10px auto;
        background-color: rgb(153, 151, 151);
        color: black;
        text-align: center;
        font-size: 12px;
        padding: 12px;
        border-radius: 5px;
        letter-spacing: 0.4px;
        
    }
    @media(max-width: 480px){
        .about{
           overflow: hidden;
        }
        .info-container{
            width: 380px;
        }
        .info{
        width: 380px;
    }
    } 
    </style>