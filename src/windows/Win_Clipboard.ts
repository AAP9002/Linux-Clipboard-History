import { BrowserWindow} from 'electron';
import {Manager} from '../components/Manager';

export class Win_Clipboard{
    _title: string;
    _Showing: boolean;
    _clipboardWindow: Electron.BrowserWindow;
    _clipboardManager: Manager;

    constructor(clipboardManager: Manager){
        this._title = "Clipboard";
        this._Showing = true;
        this._clipboardManager = clipboardManager;

        this._clipboardWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            },
            title: this._title
        })
        this._clipboardWindow.loadFile('src/public/ClipboardPage.html');
    }

    Show(): void{
        this._clipboardWindow.show();
    }

    Hide(): void{
        this._clipboardWindow.hide();
    }

    isShowing(): boolean{
        return this._Showing;
    }
}