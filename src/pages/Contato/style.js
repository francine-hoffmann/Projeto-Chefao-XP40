import styled from "styled-components";
export const Container = styled.div `
width: 100%;
min-height: 100vh;
>.banner {
    width: 100%;
    height: 500px;
    background-image: url(/images/contato.png.png);
    
    @media (
        max-width: 769px
        ){
            >.banner {
                height: 250px;
                background-size: cover;
            }      
            
        }
        
    }`
    
    export const Conteudo = styled.main `
    width: 100%;
    min-height: 100%;
    padding: 20px 50px;
    >.section-contato{
        width: 100%;
        >h3 {
            font-style: normal;
            font-weight: 500;
            font-size: 30px;
            line-height: 42px;
            color: #4A4A4A;
            
        }
    }
    >.contend-infos{
        width: 100%;
        height: 550px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media (
            max-width: 426px
            
            ){flex-direction: column;
                height: auto;
            }
            >.section-infos{
                width: 45%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-around;
                padding: 10px 20px;
                @media (
                    max-width: 426px
                    
                    ){
                        width: 95%;
                        height: auto;
                        padding: 10px 0px;
                        
                        
                    }
                    >.infos{
                        width: 100%;
                        height: 30%;
                        display: flex;
                        align-items: top;
                        justify-content: flex-start;
                        >.bolinha{
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            display: block;
                            margin-right: 20px;
                            margin-top: 7px;
                            @media (
                                max-width: 426px
                                
                                ){
                                        
                                        display: none;
                                        
                                
                                }
                                
                            }
                            >div{
                                width: calc(100% - 40px);
                                >h3 {
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 24px;
                                    line-height: 36px;
                                    color: #4A4A4A;
                                    text-transform: uppercase;
                                }
                                >.bolinhas{
                                
                                    width: 50%;
                                    display: flex;
                                    gap: 10px;
                                    @media (max-width: 426px)
                                    {width: 100%}
                                    >.bolinha{
                                        width: 50px;
                                        height: 50px;
                                        background: #2F5435;
                                        border-radius: 50%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        margin-top: 7px;
                                        
                                        
                                        
                                    }
                                }   
                            }
                            
                            
                            
                        }
                        
                    }
                }
                
                `
                export const Form = styled.form `
                width: 45%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-around;
                @media (
                    max-width: 426px
                    
                    ){width: 90%;
                        height: auto;
                    }
                    >h3{
                        font-style: normal;
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 36px;
                        color: #4A4A4A;
                        text-transform: uppercase
                    }
                    >label{
                        margin-top: 5px;
                        margin-bottom: -2px;
                    }
                    >input{
                        width:100%;
                        height: 50px;
                        background: #F0EDEC;
                        border: 1px solid #000000;
                        box-sizing: border-box;
                        border-radius: 20px;
                        padding-left:10px;
                    }
                    >textarea{
                        width:100%;
                        height: 200px;
                        background: #F0EDEC;
                        border: 1px solid #000000;
                        box-sizing: border-box;
                        border-radius: 30px;
                        padding:10px;
                        
                    }
                    >input[type=button]{
                        cursor: pointer;
                        background: #B9B9B9;
                        margin-top: 10px;
                        background: #2F5435;
                    }
                    
                    `