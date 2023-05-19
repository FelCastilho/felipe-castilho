function relogio(){

    //Função para receber objeto data
    function criarTempo(){
        let data = new Date();
        return data
    }

    function horarioAtual(){
        const background = document.querySelector('.body-background');
        let img = document.querySelector('.image')
        const hourTxt = document.querySelector('.hour-text')
        //variavel de mensagem
        const msgTxt = document.querySelector('.message')
        //Chamada da função de tempo
        let data = criarTempo()
        let newHour = data.toLocaleTimeString('pt-BR',{
            hour12: false
        })

        const hora = data.getHours()

        hourTxt.innerHTML = newHour;

        if(hora <= 11){
            msgTxt.innerHTML = 'Bom dia!';
            background.setAttribute('class', 'morning')
            img.innerHTML = '<img src="images/cafe-quente.png">'
        }else if(hora <= 18){
            msgTxt.innerHTML = 'Boa tarde!';
            background.setAttribute('class', 'afternoon')
            img.innerHTML = '<img src="images/alvorecer.png">'
        }else{
            msgTxt.innerHTML = 'Boa Noite!';
            background.setAttribute('class', 'night')
            img.innerHTML = '<img src="images/cama.png">'
        }
        
    }

    //Tempo ao vivo
    setInterval(()=>{
        horarioAtual();
    })

    function dataAtual(){
        let data = criarTempo()
        const dataTxt = document.querySelector('.data'); 
        const weekTxt = document.querySelector('.week-text');       
        let newDate = data.toLocaleDateString('pt-BR',{
            hour12: false
        })

        const week = data.getDay();

        switch(week){
            case 0:
                weekTxt.innerHTML = 'Domingo';
                break;
            case 1: 
                weekTxt.innerHTML = 'Segunda-feira';
                break;
            case 2:
                weekTxt.innerHTML = 'Terça-feira';
                break;
            case 3:
                weekTxt.innerHTML = 'Quarta-feira';
                break;
            case 4:
                weekTxt.innerHTML = 'Quinta-feira';
                break;
            case 5:
                weekTxt.innerHTML = 'Sexta-feira';
                break;
            case 6:
                weekTxt.innerHTML = 'Sábado';
                break;
            default:
                alert('Data inválida')
                break;
        }  
        
        dataTxt.innerHTML = newDate;
    } 
    
    return dataAtual(), horarioAtual()
}

relogio();