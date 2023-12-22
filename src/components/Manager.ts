const { clipboard } = require('electron')

export class Manager{
    _clipboard: Electron.Clipboard;
    _history: string[];
    _size: number;

    constructor(size: number = 10, history: string[] = []){
        this._clipboard = clipboard;
        this._history = history;
        this._size = size;
    }

    recordLastCopy(): void{
        var lastCopy = this._clipboard.readText();
        if(this._history.length >= this._size){
            this._history.shift();
        }
        this._history.push(lastCopy);
    }

    getHistory(): string[]{
        return this._history;
    }


    getLastCopy(): string{
        return this._clipboard.readText();
    }

    setLastCopy(text: string): void{
        this._clipboard.writeText(text);
    }
}
