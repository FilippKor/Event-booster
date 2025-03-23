const getEventApi = async (keyword) => {
    if (keyword === "" || keyword === undefined || keyword === null){
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    } else {
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1&keyword=${keyword}`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    }
};
// api - end

// show card - start
const list = document.querySelector(".main__list");

 function createMarkup(arr) {
    console.log(arr)
    const html = arr.events.map((item) => {
        return `<li class="main__item">
                     <div class="main__style-div"></div>
                     <img class="main__img" src="${item.images[0].url}" alt="poster"/>
                     <h2 class="main__title">${item.name}</h2>
<span class="main__locate">${item.locale}</span>
                   </li>`;
    }).join("");

    list.innerHTML = html;
}
function searcPost() {
    const keyWord = searcInput.value;

    getEventApi(keyWord).then((data) => {
        createMarkup(data._embedded)
    });
}
const searcInput = document.querySelector(".header__input-searc");

searcInput.addEventListener("input", _.debounce(() => {
    searcPost()
}, 500));