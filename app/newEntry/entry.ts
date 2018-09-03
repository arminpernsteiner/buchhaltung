export class Entry {
    public date: string;
    public debit: string;
    public credit: string;
    public value: number;
    public description: string;

    constructor(date: string, debit: string, credit: string, value: number, description: string) {
        this.date = date;
        this.debit = debit;
        this.credit = credit;
        this.value = value;
        this.description = description;
    }
    /*
    constructor() {
        this.date = '';
        this.debit = '';
        this.credit = '';
        this.value = 0;
        this.description = '';
    }
    */
}