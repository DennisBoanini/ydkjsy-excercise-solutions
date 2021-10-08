function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

const reel = {
    symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }

        this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }

        return this.symbols[this.position];
    }
};

const slotMachine = {
    reels: [ Object.create(reel), Object.create(reel), Object.create(reel) ],
    spin() {
        this.reels.forEach(reel => reel.spin());
    },
    display() {
        let lines = [];
        for (let i = 0; i < 3; i++) {
            const line = this.reels
                .map(reel => {
                reel.position = (reel.symbols.length + reel.position + i) % reel.symbols.length;
                return reel.display();
            });

            lines.push(line.join(" | "))
        }

        return lines.join("\n")
    }
};

slotMachine.spin();
slotMachine.display();
