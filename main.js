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
let course_modal = document.querySelector('.course-modal')
let course_create = document.querySelector('.course-modal-mobil')
let bg_modal = document.querySelector('.bg-modal')
let title = document.querySelector('.title')
let body = document.querySelector('body')
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

const swap = () => {
    for (let item of links) {
        item.onclick = () => {
            console.log('работаем');
            remove('link')
            item.classList.add('active')
            atribute = item.getAttribute('data-what')
            chek(atribute)
            swaplinks(atribute)
            sordplus(atribute)
            sordminuse(atribute)
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

const sordplus = (atribute) => {
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
    CreateElement(atribute, arr_sorted)
}

const sordminuse = (atribute) => {
    let arr_sorted2 = []

    arr_sorted2 = arr.sort((data1, data2) => {
        obj2 = data1.date.split('.').map(str => parseInt(str))
        obj1 = data2.date.split('.').map(str => parseInt(str))

        if (obj1[1] == obj2[1])
            if (obj1[0] == obj2[0])
                return (obj2[2] - obj1[2])
        else
            return (obj1[0] - obj2[0])
        else
            return (obj1[1] - obj2[1])
    });
    CreateElement(atribute, arr_sorted2)
}
let arrplesholder = ['Заголовок','Описание','Время (type=time)','Время (type=date)','Тип задачи (select - option - new/progress/done)']
let srord = ['pluse','minuse']
const createmobile = (value,input) =>{
    course_create.innerHTML = ' '
    let inputmobail
    let h1mobil = document.createElement('h1')
    let buton = document.createElement('button')
    h1mobil.innerText = value
    buton.classList.add('create')
    buton.innerText = 'Добавить'
    course_create.append(h1mobil)
    if (value == "create") {
        for (let i = 0; i < input; i++) {
            inputmobail = document.createElement('input')
            inputmobail.setAttribute('type','text')
            inputmobail.setAttribute('placeholder',arrplesholder[i])
            course_create.append(inputmobail)            
        }
    }else if (value == "sort"){
        for (let i = 0; i < input; i++) {
            inputmobail = document.createElement('input')
            inputmobail.setAttribute('type','checkbox')
            let pmobil = document.createElement('p')
            pmobil.innerText = `sord${srord[i]}`
            inputmobail.before(pmobil)
            course_create.append(inputmobail)            
        }
    }
    course_create.append(buton)
    let butensclose = document.querySelectorAll('.create')
    anim(butensclose)
}

const showModal = (width, haight,value,input) => {
    bg_modal.style.display = "block"
    course_modal.style.display = "flex"
    body.style.overflow = 'hidden'
    course_modal.style.width = width
    course_modal.style.height = haight
    setTimeout(() => {
        bg_modal.style.opacity = "1"
        course_modal.style.opacity = "1"
    }, 100);

    setTimeout(() => {
        course_modal.classList.add('mobail-modal')
    }, 150);

    createmobile(value,input)
}

const closeModal = () => {
    bg_modal.style.opacity = "0"
    course_modal.style.opacity = "0"
    course_modal.style.width = "0px"
    course_modal.style.height = '0px'
    body.style.overflow = 'scroll'
    setTimeout(() => {
        bg_modal.style.display = "none"
        course_modal.style.display = "none"
        course_modal.classList.remove('mobail-modal')
    }, 100);
}
const anim = (a) => {
    let butns = document.querySelectorAll('button[data-but]')
    for (const but of butns) {
        but.onclick = () => {
            let value = but.getAttribute('class')
            let width = but.getAttribute('data-with')
            let haight = but.getAttribute('data-haight') 
            let input = but.getAttribute('data-input')
            showModal(width,haight,value,input)
        }
    }
    for (const but of a) {
        but.onclick = ()=>{
            closeModal()
        }
    }
}
anim([])

swap()