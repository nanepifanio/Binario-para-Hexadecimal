export default class HexConverter {
    static letterList;
    static numberList;
    constructor() {
        HexConverter.letterList = ["A", "B", "C", "D", "E", "F"];
        HexConverter.numberList = [10, 11, 12, 13, 14, 15];
    }
    static toHex(list) {
        return list
            .map((n) => n < 10 ? n.toString() : this.letterList[this.numberList.indexOf(n)])
            .join("");
    }
    static toDecimal(lists) {
        return lists.map((list) => list
            .reverse()
            .reduceRight((acu, cur, index) => +cur ? acu + 2 ** index : +cur + acu, 0));
    }
    static handleBin(b) {
        const binSplitedInFour = b.match(/\d{4}/g);
        if (binSplitedInFour) {
            binSplitedInFour.map((bin) => bin);
            const zeroAndOneLists = binSplitedInFour.reduce((acu, cur, index) => {
                acu[index] = cur.split("");
                return acu;
            }, []);
            return this.toHex(this.toDecimal(zeroAndOneLists));
        }
        return "0";
    }
    static incrementBin(b) {
        switch (b.length % 4) {
            case 1:
                return this.handleBin(`000${b}`);
            case 2:
                return this.handleBin(`00${b}`);
            default:
                return this.handleBin(`0${b}`);
        }
    }
    binToHex(bin) {
        if (Number.isInteger(+bin)) {
            const checkIfZeroOne = [...bin].every((b) => b === "0" || b === "1");
            if (checkIfZeroOne) {
                return !(bin.length % 4)
                    ? HexConverter.handleBin(bin)
                    : HexConverter.incrementBin(bin);
            }
        }
        return "0";
    }
}
