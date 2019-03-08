const users = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Joe'},
    {id: 3, name: 'Don', groupId: 1},
    {id: 4, name: 'Kally'},
    {name: 'Alex'},
    {name: 'John'},
];

const groups = [
    {id: 1, title: 'First Group'},
    {id: 2, title: 'Last Group'},
];

async function setUsersByGroups() {
    let lastId = 0;
    for (let i in users) {
        await setTimeout(function (){
            if(users[i].id) {
                lastId = users[i].id;
            } else {
                lastId = +lastId + 1;
                users[i].id = lastId;
            }
        }, 500);
        await setTimeout(function (){
            if(!users[i].groupId) {
                users[i].groupId = groups[0].id
            }
        }, 500);
    }
}
setUsersByGroups()

console.log(users)
