const { app } = require('electron');
import {Run} from './components/Run';


app.whenReady().then(() => {
   new Run();
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
})