type PromiseResolved<T> = (value: T) => void
type PromiseRejected<T> = (reason: T) => void
type PromiseExecutor<T, R> = (
    resolve: PromiseResolved<T>,
    reject: PromiseRejected<R>
) => void

type PromiseThenCallback<T> = (value : T | undefined) => void
type PromiseCatchCallback<T> = (reason : T | undefined) => void

enum PromiseState {
    PENDING = 'pending',
    FULLFIELD = 'fullfiled',
    REJECTED = 'rejected'
}

class MyPromise<T, R> {
    private _state: PromiseState = PromiseState.PENDING

    private _successCallbackHandler : PromiseThenCallback<T>[] = []
    private _failerCallbackHandler : PromiseCatchCallback<R>[] = []
    private _value: T | undefined = undefined;
    private _resaon: R | undefined = undefined;

    constructor(executor: PromiseExecutor<T, R>) {
        executor(
            this._PromiseResolver.bind(this), this._PromiseRejector.bind(this)
        );
    }

    public then(handelerFunction : PromiseThenCallback<T>){
        if (this._state === PromiseState.FULLFIELD){
            handelerFunction(this._value)
        }else{
            this._successCallbackHandler.push(handelerFunction)
        } 
         return this;
    }
    public catch(handelerFunction : PromiseCatchCallback<R>){
        if (this._state === PromiseState.REJECTED){
            handelerFunction(this._resaon)
        }else{
            this._failerCallbackHandler.push(handelerFunction)
        }
        return this;
    }

    private _PromiseResolver(value: T) {
        if (this._state === PromiseState.FULLFIELD) return;
        this._state = PromiseState.FULLFIELD;
        this._value = value;
        this._successCallbackHandler.forEach((everyCallback) => everyCallback(value))
    }

    private _PromiseRejector(reason: R) {
        if (this._state === PromiseState.REJECTED) return;
        this._state = PromiseState.REJECTED;
        this._resaon = reason;
        this._failerCallbackHandler.forEach((everyCallback) => everyCallback(reason))
    }
}


function customPromise() {
    return new MyPromise<string, string>((resolve, reject) => {
        // your logic code goes here
        resolve("Resolved successfully") //here we pass the value with res, rej as per desired need
    });
}

customPromise().then( () => console.log("custom promise resolved"));

const waitFor = (s : number) =>
    new MyPromise<number, number>((resolve, reject) => {
    setTimeout( () => resolve(s), s * 1000);
});

 waitFor(5)
    .then((value) => { console.log(` promise resolved`, value); })
    .catch((reason) => { console.log(` promise rejected`, reason); })
    // .finally(() => { console.log(` Finally Setteled Promise `); })