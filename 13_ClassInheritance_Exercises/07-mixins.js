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
function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace)/3
        };
        classToExtend.prototype.isFast = function(){
            return (this.processorSpeed > (this.ram/4));
        };
        classToExtend.prototype.isRoomy = function() {
            return (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed));
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function() {
            return (this.manufacturer == this.keyboard.manufacturer && this.manufacturer == this.monitor.manufacturer);
        };
        classToExtend.prototype.isClassy = function(){
            return (this.battery.expectedLife >= 3 && ['Silver', 'Black'].indexOf(this.color) > -1 && this.weight < 3)
        }
    }
    return {computerQualityMixin, styleMixin};
}
computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);

styleMixin(Laptop);
let keyboard = new Keyboard('Logitech',70);

let keyboard2 = new Keyboard('A-4',70);
let monitor = new Monitor('Logitech',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
let laptop2 = new Laptop("Hewlett Packard",2.4,4,12,2.99,"Silver",battery);
let desktop = new Desktop("Logitech",3.3,8,1,keyboard,monitor);
let desktop2 = new Desktop("Logitech",1.2,8,10,keyboard2,monitor);
desktop.getQuality();