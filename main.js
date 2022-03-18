let arr = [{
        id: 1,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '21-10-21',
        time: `14:31`,
        complirted: 'no',
    },
    {
        id: 2,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '21-10-21',
        time: `14:31`,
        complirted: 'yes',
    },
    {
        id: 3,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '10-10-21',
        time: `14:31`,
        complirted: 'litel bit',
    }, {
        id: 4,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '23-10-20',
        time: `14:31`,
        complirted: 'no',
    },
    {
        id: 5,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '12-10-20',
        time: `14:31`,
        complirted: 'no',
    },
    {
        id: 6,
        name: 'Переписать проект на Vue 3',
        des: `Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
     molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
        date: '23-10-21',
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
let form = document.querySelector('form')
let maindiv
const CreateElement = (meaning, arr) => {
    greed.innerHTML = ' '
    for (const obj of arr) {
        maindiv = document.createElement('div')
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
        obj1 = data1.date.split('-').map(str => parseInt(str))
        obj2 = data2.date.split('-').map(str => parseInt(str))

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
        obj2 = data1.date.split('-').map(str => parseInt(str))
        obj1 = data2.date.split('-').map(str => parseInt(str))

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

let arr_plesholder_for_inp = ['Заголовок', 'Описание', 'Время (type=time)', 'Время (type=date)']
let option_TEXT = ['yes', 'litel bit', 'no', ]
let srord = ['pluse', 'minuse']
let arr_name_for_inp = ['name', 'des', 'date', 'time', 'complirted']

const createmobile = (value, input, text) => {
    form.innerHTML = ' '
    let inputmobail
    let h1mobil = document.createElement('h1')
    let buton = document.createElement('button')
    h1mobil.innerText = text
    buton.classList.add('create')
    buton.innerText = value
    form.append(h1mobil)
    if (value == "create") {
        for (let i = 0; i < input; i++) {
            inputmobail = document.createElement('input')
            inputmobail.setAttribute('type', 'text')
            inputmobail.setAttribute('placeholder', arr_plesholder_for_inp[i])
            inputmobail.setAttribute('name', arr_name_for_inp[i])
            if (i == 2) {
                inputmobail.setAttribute('type', 'date')
            }
            if (i == 3) {
                inputmobail.setAttribute('type', 'time')
            }
            if (i == 4) {
                let select = document.createElement('select')
                select.setAttribute('name', 'complirted')
                for (let item of option_TEXT) {
                    let option = document.createElement('option')
                    option.innerText = item
                    option.setAttribute('value', item)
                    select.append(option)
                }
                form.append(select)
            }
            console.log(i);
            form.append(inputmobail)
        }
        inputmobail.remove()
    } else if (value == "sort") {
        for (let i = 0; i < input; i++) {
            inputmobail = document.createElement('input')
            inputmobail.setAttribute('type', 'radio')
            let pmobil = document.createElement('p')
            pmobil.innerText = `sord${srord[i]}`
            inputmobail.before(pmobil)
            form.append(inputmobail)
        }
    }
    form.append(buton)
    anim()
    REGEX()
}

const showModal = (width, haight, value, input, text) => {
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

    createmobile(value, input, text)
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
const anim = (butensclose) => {
    let butns = document.querySelectorAll('button[data-but]')
    for (const but of butns) {
        but.onclick = () => {
            let valueinnrTEXT = but.innerText
            let value = but.getAttribute('class')
            let width = but.getAttribute('data-with')
            let haight = but.getAttribute('data-haight')
            let input = but.getAttribute('data-input')
            showModal(width, haight, value, input, valueinnrTEXT)
        }
    }
}


const REGEX = () => {
    let counter_have_to
    let counter = 0
    let regexes = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        number: /^[0-9]+$/,
        name: /^[a-z ,.'-]+$/i,
        password: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
    }

    const set_field_success = (element) => {
        element.classList.remove('bad')
        element.classList.add('nice')
        element.getAttribute('class', 'nice')
    }


    const set_field_error = (element, text) => {
        element.classList.remove('nice')
        element.classList.add('bad')
        element.getAttribute('class', text)
        for (let item of inputmobail) {
            item.classList.add('bad')
            let p = document.createElement("p");
            item.after(p)
            p.classList.add('dont_hit')
            p.innerText = 'Ведите все правельно'
        }
    }
    form.onsubmit = () => {
        event.preventDefault()
        let Create_New_Task = {}
        let fm = new FormData(form)
        fm.forEach((a, b) => {
            Create_New_Task[a] = b
            let field = form.querySelector('*[name=' + b + ']')
            counter_have_to = form.querySelectorAll('*[name]').length

            if (field.getAttribute('data-required') !== null) {
                if (field.value.trim().length == 0) {
                    set_field_error(field, 'bad')
                    counter--
                    return
                } else if (field.getAttribute('data-regex')) {
                    if (regexes[field.getAttribute('data-regex')].test(field.value) == true) {
                        set_field_success(field, 'nice')
                        Create_New_Task[b] = a
                        counter++
                        return
                    } else {
                        set_field_error(field, 'bad')
                        counter--
                        return
                    }
                }
                set_field_success(field, 'nice')
                Create_New_Task[b] = a
                counter++
                return

            } else {
                set_field_success(field, 'nice')
                Create_New_Task[b] = a
                counter++
                return
            }


        })
        if (counter == counter_have_to) {
            let butensclose = document.querySelectorAll('.create')
            for (const but of butensclose) {
                but.onclick = () => {
                    Create_New_Task[3]
                    closeModal()
                    arr.push(Create_New_Task);
                    let claas = greed.getAttribute('class')
                    console.log(claas);
                    CreateElement(claas, arr)
                }
            }
        }
    }
}


anim([])

swap()