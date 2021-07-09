const ul = document.getElementById('users');

fetch('https://randomuser.me/api/?results=15')
.then((resp) => resp.json())
.then (function (data){
    let users = data.results;
    return users.map((user) => {

        const li = document.createElement('li');
        
        const img = document.createElement('img');
        const p = document.createElement('p');
        ul.appendChild(li);

        let paragraph = li.appendChild(p);
        let image = li.appendChild(img);
        let firstName = user.name.first;
        let lastName = user.name.last;

        paragraph.innerHTML = `${firstName} ${lastName}`;
        image.src = user.picture.large;
        
    });
    })
.catch(function (error) {
    console.log(error);
}); 