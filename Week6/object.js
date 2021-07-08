const user = {
    name: 'Wisdom',
    username: 'wisdom2301',
    email: 'freeborn.wisdom@gmail.com',
    age: '30',
    blog: ['This is my first post', 'Hello Guys', 'How are you all doing?'],
    greet(){
        console.log(`Hello ${this.name}`)
    },
    logIn(){
        console.log(`${this.username} is logged in`)
    },
    logOut(){
        console.log('You are logged out')
    }
}
user.logIn();
user.greet();
console.log(user.greet());

