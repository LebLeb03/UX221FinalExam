class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);


class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
this.innerHTML ='<a href="Odd Job Form">Odd Job Form</a>&nbsp;<a href="Shop for Odd Jobs">Shop for Odd Jobs</a>' ;
}


}

customElements.define("x-twosided", TwoSidedMarket)