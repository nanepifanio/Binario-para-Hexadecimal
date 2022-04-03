export default class HexConverter {
  static letterList: string[];
  static numberList: number[];

  constructor() {
    HexConverter.letterList = ["A", "B", "C", "D", "E", "F"];
    HexConverter.numberList = [10, 11, 12, 13, 14, 15];
  }

  static toHex(list: number[]): string {
    return list
      .map((n: number): string =>
        n < 10 ? n.toString() : this.letterList[this.numberList.indexOf(n)]
      )
      .join("");
  }

  static toDecimal(lists: Array<Array<string>>): number[] {
    return lists.map((list: string[]): number =>
      list
        .reverse()
        .reduceRight(
          (acu: number, cur: string, index: number): number =>
            +cur ? acu + 2 ** index : +cur + acu,
          0
        )
    );
  }

  static handleBin(b: string): string {
    const binSplitedInFour: string[] | null = b.match(/\d{4}/g);
    if (binSplitedInFour) {
      binSplitedInFour.map((bin: string): string => bin);
      const zeroAndOneLists: Array<Array<string>> = binSplitedInFour.reduce(
        (
          acu: Array<Array<string>>,
          cur: string,
          index: number
        ): Array<Array<string>> => {
          acu[index] = cur.split("");
          return acu;
        },
        []
      );
      return this.toHex(this.toDecimal(zeroAndOneLists));
    }
    return "0";
  }

  static incrementBin(b: string): string {
    switch (b.length % 4) {
      case 1:
        return this.handleBin(`000${b}`);
      case 2:
        return this.handleBin(`00${b}`);
      default:
        return this.handleBin(`0${b}`);
    }
  }

  /** Convert a binary number to Hexadecimal */
  binToHex(bin: string): string {
    if (Number.isInteger(+bin)) {
      const checkIfZeroOne: boolean = [...bin].every(
        (b: string): boolean => b === "0" || b === "1"
      );
      if (checkIfZeroOne) {
        return !(bin.length % 4)
          ? HexConverter.handleBin(bin)
          : HexConverter.incrementBin(bin);
      }
    }
    return "0";
  }
}
