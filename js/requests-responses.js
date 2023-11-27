//Main
(()=> {

        // THE FETCH
        const url = "https://pokeapi.co/api/v2/pokemon/charmander";
        const options ={
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        };
        fetch(url, options)
            .then((response)=>{
                return response.json()
            .catch((error)=>{
                    console.log(error);
                })
            })
            .then((data)=> {
                console.log(data)
            });

})();