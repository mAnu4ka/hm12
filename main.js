let links = document.querySelectorAll('p[data-what]')
let greed = document.querySelector('#main__el')
let atribute

const swap = () => {
    for (let item of links) {
        item.onclick = () => {
            console.log('работаем');
            remove('link')
            item.classList.add('active')
            atribute = item.getAttribute('data-what')
            chek(atribute)
            swaplinks(atribute)
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
    } else if (whatdo == 'link') {
        for (const link of links) {
            link.classList.remove('active')
        }
    }
}

swap()