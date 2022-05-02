class Header {

    hendlerOpenShoppingPage(){
        shoppingPage.render();
    }

render (count){
    let html = `
    <div class='contein'>
          <div class='counter' onclick = 'headerPage.hendlerOpenShoppingPage();'>
          🧙🏻‍♀️ ${count}
          </div>
    </div>
    `
    ROOT_HEADER.innerHTML = html;
    

}
}

const headerPage = new Header();



