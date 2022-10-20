var pizzitas = [
    {
        id: 1,
        nombre:"pizza de Muzza",
        ingredientes:["Salsa de Tomate","Muzarella","Aceitunas"],
        precio:700,
    },

    {
        id:2,
        nombre:"pizza Calabresa",
        ingredientes:["Salsa de Tomate","Muzarella","Rodajas de Salame","Aceitunas"],
        precio:850,
    },
    
    {
        id:3,
        nombre:"pizza a la napolitana",
        ingredientes:["Salsa de Tomate","muzarella","Rodajas de tomate","Oregano"],
        precio:800,
    },

    {
        id:4,
        nombre:"pizza de jamon y huevo",
        ingredientes:["Salsa de Tomate","Muzarella","Fetas de jamon","Huevo picado","Aceitunas"],
        precio:900,
    },

    {
        id:5,
        nombre:"pizza rellena",
        ingredientes:["Salsa de Tomate","Muzarella","Jamon trozado","oregano","tomate trozado"],
        precio:1200,
    },

    {
        id:6,
        nombre:"pizza ultra rellena",
        ingredientes:["Salsa de Tomate","Muzarella","Jamon trozado","Tomate trozado","Panceta trozada","Choclo","Oregano","Aceitunas rellenas"],
        precio:1500,
    }
]

const form = document.getElementById('pizza-form');
const input = document.getElementById('id-pizzitas');
const list = document.getElementById('lista');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const saveLocalStorage = (taskList) => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
};

const createTask = task =>
`
    <li class="card blue">
        <h2>${task.nombre}</h2>
        <h3>$${task.precio}</h3>
    </li>
`;

const wrongTask = () =>
`
    <li class="card black">
        <h2>El id ingresado no coincide con ninguna pizza</h2>
    </li>
`;

const noNumber = () =>
    `
    <li class="card red">
        <h2>Ingrese un numero por favor</h2>
    </li>
`;

const decider = (n) =>{
    if (n < 1 || n > 7){
        return wrongTask (n);
    }
    else if (n == null){
        return noNumber ();
    }
    else{
        return createTask (n);
    }
};

renderTask = TodoList => {
    list.innerHTML = TodoList.map(task => decider(task)).join('');
    console.log(list.innerHTML)
};


const init = () => {
    form.addEventListener('submit', e =>{
        e.preventDefault();
        const task = input.value;
        input.value = '';
        const thisPizza = pizzitas.filter ((pizzitas) => pizzitas.id == task);
        tasks = [...tasks, task];
        saveLocalStorage(tasks);
        renderTask(thisPizza);
    })
    document.addEventListener('DomContentLoaded', renderTask(tasks));
}
init();
