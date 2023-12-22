import { BrowserWindow, globalShortcut } from 'electron';
import {Manager} from '../components/Manager';

export class Win_Settings{
    _title: string;
    _Showing: boolean;
    _settingWindow: Electron.BrowserWindow;
    _clipboardManager: Manager;
    _copyCombination: string = "CmdOrCtrl+C";
    _cutCombination: string = "CmdOrCtrl+X";

    constructor(clipboardManager: Manager){
        this._title = "Settings";
        this._Showing = false;
        this._clipboardManager = clipboardManager;

        this._settingWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            },
            title: this._title
        });
        this._settingWindow.loadFile('src/public/SettingsPage.html');

        this.setListeners();
    }

    Show(): void{
        this._settingWindow.show();
    }

    Hide(): void{
        this._settingWindow.hide();
    }

    setListeners(){
        globalShortcut.register(this._copyCombination, () => {
            this._clipboardManager.recordLastCopy();
            console.log(this._clipboardManager.getHistory());
        });

        globalShortcut.register(this._cutCombination, () => {
            this._clipboardManager.recordLastCopy();
            console.log(this._clipboardManager.getHistory());
        });
    }
}