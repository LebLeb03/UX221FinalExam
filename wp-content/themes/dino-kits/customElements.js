class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);


class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
this.innerHTML ='<a href="Kit-Submission">Kit Submission Form</a>&nbsp;<a href="Shop-for-Kits">Shop for Kits</a>' ;
}


}
customElements.define("x-twosided", TwoSidedMarket)