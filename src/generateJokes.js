import axios from 'axios' 

export function generateJokes(){
    const config = {
        Headers:{
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com/', config).then((res)=> {
        console.log('res', res.data)
        document.getElementById('joke').innerHTML = res.data.joke 
    })
}


