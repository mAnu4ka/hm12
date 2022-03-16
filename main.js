let arr = [{
        id: 1,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '21.10.21',
        time: `14:31`,
        complirted: 'no',
    },
    {
        id: 2,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '21.10.21',
        time: `14:31`,
        complirted: 'yes',
    },
    {
        id: 3,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '10.10.21',
        time: `14:31`,
        complirted: 'litel bit',
    }, {
        id: 4,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '23.10.20',
        time: `14:31`,
        complirted: 'no',
    },
    {
        id: 5,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '12.10.20',
        time: `14:31`,
        complirted: 'no',
    },
    {
        id: 6,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '23.10.21',
        time: `14:31`,
        complirted: 'no',
    },
]

let links = document.querySelectorAll('p[data-what]')
let greed = document.querySelector('#main__el')
let atribute
let title = document.querySelector('.title')

const CreateElement = (meaning, arr) => {
    greed.innerHTML = ' '
    for (const obj of arr) {
        let maindiv = document.createElement('div')
        let line = document.createElement('div')
        let name = document.createElement('p')
        let des = document.createElement('p')
        let date = document.createElement('p')
        let time = document.createElement('p')
        let complirted = document.createElement('p')

        maindiv.classList.add('item')
        maindiv.setAttribute('id', obj.id)
        maindiv.classList.add(`bloke${meaning}`)
        line.classList.add('line')
        line.setAttribute('id', 'line')
        name.classList.add('name')
        name.innerText = obj.name
        if (meaning == 'tabl') {
            des.classList.add('des')
            title.classList.remove('none')
        }
        des.innerText = obj.des
        date.classList.add('date')
        date.innerText = obj.date
        time.classList.add('time')
        time.innerText = obj.time
        complirted.classList.add('complirted')
        if (obj.complirted == 'no') {
            complirted.innerText = 'Не выполнено'
            complirted.classList.add('bad')
        } else if (obj.complirted == 'yes') {
            complirted.innerText = 'Готово'
            complirted.classList.add('good')
        } else {
            complirted.innerText = 'В прогрессе'
            complirted.classList.add('midle')
        }
        greed.append(maindiv)
        if (meaning == 'tabl') {
            greed.append(line)
        }
        maindiv.append(name, des, date, time, complirted)
    }
}
CreateElement('tabl', arr)

let blokes = document.querySelectorAll('.item')
let descriptions = document.querySelectorAll('.des')
let lines = document.querySelectorAll('#line')
console.log(lines);

const swap = () => {
    for (let item of links) {
        item.onclick = () => {
            console.log('работаем');
            remove('link')
            item.classList.add('active')
            atribute = item.getAttribute('data-what')
            chek(atribute)
            swaplinks(atribute)
            sord(atribute)
        }
    }
}

const chek = (atribute) => {
    for (let item of links) {
        if (atribute !== item.getAttribute('data-what')) {
            let secondatri = item.getAttribute('data-what')
            remove('greed', secondatri)
        }
    }
}

const swaplinks = (atribute) => {
    remove(atribute)
    greed.classList.add(atribute)
}

const remove = (whatdo, removegreed) => {
    if (whatdo == 'greed') {
        greed.classList.remove(removegreed)
        title.classList.add('title')
        for (const bloke of blokes) {
            bloke.classList.remove(`bloke${removegreed}`)
        }
    } else if (whatdo == 'link') {
        for (const link of links) {
            link.classList.remove('active')
        }
    }
}

const sord = (atribute) => {
    let arr_sorted = []
    arr_sorted = arr.sort((data1, data2) => {
        obj1 = data1.date.split('.').map(str => parseInt(str))
        obj2 = data2.date.split('.').map(str => parseInt(str))

        if (obj1[1] == obj2[1])
            if (obj1[0] == obj2[0])
                return (obj2[2] - obj1[2])
        else
            return (obj1[0] - obj2[0])
        else
            return (obj1[1] - obj2[1])
    });
    let arr_sorted2 = []
    arr_sorted2 = arr.sort((data1, data2) => {
        obj1 = data1.date.split('.').map(str => parseInt(str))
        obj2 = data2.date.split('.').map(str => parseInt(str))

        if (obj1[1] == obj2[1])
            if (obj1[0] == obj2[0])
                return (obj1[2] - obj2[2])
        else
            return (obj2[0] - obj1[0])
        else
            return (obj2[1] - obj1[1])
    });
console.log();
    CreateElement(atribute, arr_sorted)
}


swap()