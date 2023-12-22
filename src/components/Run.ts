import { Win_Settings } from '../windows/Win_Settings';
import {Win_Clipboard} from '../windows/Win_Clipboard';
import { Manager } from './Manager';

export class Run{
    _settingInstance : Win_Settings;
    _clipboardInstance : Win_Clipboard;
    _clipboardManager: Manager;

    constructor(){
        this._clipboardManager = new Manager();
        this._settingInstance = new Win_Settings(this._clipboardManager);
        this._clipboardInstance = new Win_Clipboard(this._clipboardManager);
    }
}