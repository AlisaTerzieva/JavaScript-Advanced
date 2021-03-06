function createKamtoterHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new TypeError('Abstract class cannot be instantiated!');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if (battery.constructor.name == 'Battery') {
                this._battery = battery;
            }
            else {
                throw new TypeError('Not an instance of the class Battery!');
            }
        }

        get battery() {
            return this._battery;
        }

        set battery(battery) {
            if (battery.constructor.name == 'Battery') {
                this._battery = battery;
            }
            else throw new TypeError('Not an instance of the class Battery!');
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            console.log(keyboard);
            if (keyboard instanceof Keyboard) {
                this._keyboard = keyboard;
            }
            else throw new TypeError('Must be instance of the Keyboard class!');
            if (monitor instanceof Monitor) {
                this._monitor = monitor;
            }
            else throw new TypeError('Must be instance of the Monitor class!');
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(keyboard) {
            if (keyboard instanceof Keyboard) {
                this._keyboard = keyboard;
            }
            else throw new TypeError('Must be instance of the Keyboard class!');
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(monitor) {
            if (monitor instanceof Monitor) {
                this._monitor = monitor;
            }
            else throw new TypeError('Must be instance of the Monitor class!');
        }
    }

   return{Battery, Keyboard, Monitor, Computer, Laptop, Desktop}
}

//let hubavaBateriq = new Battery('adiosMuchachos', '2years');
//let monitor = new Monitor('aide be', 50, 35);
//let keyb = new Keyboard('hubav', 0.01);
//let deskt = new Desktop('edno', 'dve', 'tri', 'chetiri', '5', 'blue', hubavaBateriq, keyb, monitor);
//
//console.log(deskt);


let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);