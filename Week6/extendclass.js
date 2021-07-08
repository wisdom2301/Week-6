
fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then (function (data){
    console.log(data);
    console.log(data.results);
    })
.catch(function (error) {
    console.log(error);
});