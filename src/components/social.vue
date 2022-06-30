<script lang="ts" setup></script>

<template>
    <div class="social">
        <h1>Social community 社群</h1>
        <div class="links">
            <a target="_blank" href="https://www.instagram.com/beaproblemchild_2022/" class="link"><i class="bx bxl-instagram"></i></a>
            <a target="_blank" href="https://github.com/beaproblemchild" class="link"><i class="bx bxl-github"></i></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .social{
        margin: 50px 0;
        h1{
            text-align: center;
            font-size: 2rem;
            color: #232323;
        }
        .links{
            margin: 20px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            a{
                background-color: #fff;
                padding: 20px;
                margin: 10px;
                border-radius: 5px;
                transition: .2s;
                &:hover{
                    transform: scale(110%);
                }
                i{
                    font-size: 60px;
                }
            }
        }
    }
</style>