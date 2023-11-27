
    const getPerson = (id = 1) => {
        const url = "https://swapi.dev/api/planets/1/";
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((person) => {
                console.log(person);
            })
            .catch((error) => {
                console.log(error)
            });
    };
    (()=>{

})();