const defaultValue: string =  '(PARAMETER)';

export class StepParameter {
    public regexp: RegExp;
    private _value: string;

    public constructor (value: string, regexp: string) {
        this.value = value;
        if (regexp) {
            this.regexp = new RegExp(regexp);
        }
    }

    public get value(): string {
        return this._value || defaultValue;
    }

    public set value(str: string) {
        this._value = str;
    }

    public get isSet(): boolean {
        return this.value !== defaultValue;
    }
}