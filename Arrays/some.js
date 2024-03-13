const users = ["Luiz","Carla","Daniel","Vanessa"]
if (users.some(user => user === "Daniel")) { //true pois o usuário Daniel já existe dentro do array
    console.log("User already exists!");
}