export class Step {
  type: string;
  name: string;

  private signatureToStepName(str: string): string {
    if(str[0] == '^') {
      str = str.substr(1);
    }
    
    if (str.charAt(str.length - 1) == '$') {
      str = str.slice(0, -1);
    }

    str = str.replace(/\(\?:([^\|]+)+\|+([^\)]+)?\)/, "$1")

    str = str.replace(/\((.+)\)/, '<b>VAL</b>')

    return str;
  }

  constructor(signature: RegExp, type: string) {
    this.name = this.signatureToStepName(signature.source);
    this.type = type;
  }
}