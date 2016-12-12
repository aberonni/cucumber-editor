export class StepParameter {
    public regexp: RegExp;
    public isVariable: boolean;
    private _value: string;
    private _defaultValue: string;

    public constructor (value: string, regexp: string, defaultValue: string) {
        this.value = value;
        this._defaultValue = defaultValue;
        if (regexp) {
            this.regexp = new RegExp(regexp);
        }
    }

    public get value(): string {
        return this._value || this._defaultValue;
    }

    public set value(str: string) {
        this._value = str;
    }

    public get displayValue(): string {
        let val = this.value;

        if (this.isVariable) {
            val = '<' + val + '>';
        }

        return val;
    }

    public get isSet(): boolean {
        return this.value !== this._defaultValue;
    }
}