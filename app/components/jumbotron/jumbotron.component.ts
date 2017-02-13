import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor() {
        this.jbtHeading = "Hello World!";
        this.jbtBtnText = "Read More";
        this.jbtText = "Affogato truffaut kinfolk, thundercats 8-bit food truck fam twee mixtape church-key trust fund. Keffiyeh sustainable poutine cray tote bag leggings, semiotics forage XOXO green juice austin before they sold out iceland.";
        this.jbtBtnUrl ="/about";
    }
}
