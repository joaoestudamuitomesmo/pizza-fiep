import {useState} from "react"
export default function Contato(){
    const [nome, setNome] = ('');
    const [email, setEmail] = ('');
    const [mensagem, setMensagem] = ('');

    const enviarWhatsApp = (e) =>{
        e.preventDefault();
        const telefone = '554199009999';
        const texto = `Olá!\nMeu nome é ${nome}\nMeu email é ${email}\n Mensagem ${mensagem}`
    }
}