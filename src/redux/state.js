let renderFullPage = ()=>{
    console.log('rendring in process..')
}
let state ={
    dialogsPage: {
        dialogsData : [
            {name: 'Vovan', id: 1, photo: "https://peopletalk.ru/wp-content/uploads/2018/01/ap5a5p-640x473.jpg"},
            {name: 'Mila', id: 2, photo: "https://mtdata.ru/u17/photo92AD/20050228516-0/original.jpg"},
            {name: 'Olga', id: 3, photo: "https://s.zefirka.net/images/2020-10-28/krasivye-devushki-v-obtyagivayushhix-platyax/krasivye-devushki-v-obtyagivayushhix-platyax-1.jpg"},
            {name: 'Robert', id: 4, photo: "https://i.pinimg.com/originals/1e/a0/cd/1ea0cdb656a1c785f1e691e1b3925adb.jpg" },
            {name: 'Kirill', id: 5, photo: "https://i.pinimg.com/originals/b8/d7/84/b8d784316ad8c8d290075266aa2d96c9.jpg"},
            {name: 'Joey', id: 6, photo: "https://i.pinimg.com/originals/38/12/60/3812600e5d24110db37e5b038b8b780f.jpg"}
        ],
        messagesData : [
            {text: 'Will you go to bar after concert?'},
            {text: 'Hope to see you soon)'},
            {text: 'Hi, how are you?'}
        ],
        messageChange: ""    
    },
    profilePage: {
        PostData : [
            {message: 'Want travel to sea. Like photos please)', likeCount: 25},
            {message: 'Hi, everyone)This is my first post))', likeCount: 30}
        ],
        PostChange: ""
          
    },
    navbarPage:{
        dialogsData : [
            {name: 'Mila', id: 2, photo: "https://mtdata.ru/u17/photo92AD/20050228516-0/original.jpg"},
            {name: 'Olga', id: 3, photo: "https://s.zefirka.net/images/2020-10-28/krasivye-devushki-v-obtyagivayushhix-platyax/krasivye-devushki-v-obtyagivayushhix-platyax-1.jpg"}
        ]
    }
}

export const addPost = ()=>{
    let postData ={
        message: state.profilePage.PostChange,
        likeCount: 0

    }
    state.profilePage.PostData.unshift(postData);
    state.profilePage.PostChange = "";
    renderFullPage(state);
}
export const dialogPost =() =>{
    let messageData = {
        text: state.dialogsPage.messageChange
    }
    state.dialogsPage.messagesData.push(messageData)
    state.dialogsPage.messageChange=''
    renderFullPage(state);
}

export const textPostChange = (textChanger)=>{
    state.profilePage.PostChange = textChanger;
    renderFullPage(state);
}

export const messagePostChange = (messageChenger)=>{
    state.dialogsPage.messageChange=messageChenger
    renderFullPage(state);
}

export const renderChanging = (observer) =>{
    renderFullPage = observer
}
export default state;