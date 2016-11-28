const defaultValue: string =  '(PARAMETER)';

export class StepParameter {
    public regexp: string;
    private _value: string;

    public constructor (value, regexp) {
        this.value = value;
        this.regexp = regexp;
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