import { invoke } from '@tauri-apps/api';

//declare global {
//interface Window {
//__TAURI__: {
//invoke: (command: string, payload: any) => Promise<any>;
//};
//}
//}


document.getElementById('myButton').addEventListener('click', async () => {
    try {
        const response = await invoke('my_rust_function', { arg: 'Hello from frontend' });
        console.log('Response from Rust function:', response);
    } catch (error) {
        console.error('Error calling Rust function:', error);
    }
});