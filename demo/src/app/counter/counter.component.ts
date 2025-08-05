import { Component } from "@angular/core";

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
})
export class CounterComponent {
    count: number = 0;
    className: string = 'bright';

    increment() {
        this.count += 1;
        if (this.count > 10) {
            this.className = 'dark';

            if (this.count > 20) {
                this.count = 0;
            }

        } else {
            this.className = 'bright';
        }

    }

    decrement() {
        this.count -= 1;
        if (this.count <= 10) {
            this.className = 'bright';
        }
    }
}