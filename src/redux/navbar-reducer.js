let initialState = {
    navbarData : [
        {name: 'Mila', id: 2, photo: "https://mtdata.ru/u17/photo92AD/20050228516-0/original.jpg"},
        {name: 'Olga', id: 3, photo: "https://s.zefirka.net/images/2020-10-28/krasivye-devushki-v-obtyagivayushhix-platyax/krasivye-devushki-v-obtyagivayushhix-platyax-1.jpg"}
    ]
}

const navbarReduser = (state = initialState, action) => {
    return state;
}
export default navbarReduser ;