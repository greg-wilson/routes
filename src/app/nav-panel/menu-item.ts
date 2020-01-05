export class MenuItem {

    public active: boolean;

    constructor(
        public name: string,
        public tooltip: string,
        public icon: string,
        public route: string,
        public width: number) {
    }
}