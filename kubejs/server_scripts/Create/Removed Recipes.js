// JavaScript source code
ServerEvents.recipes(event => { 
    event.remove({ output: 'create:rose_quartz' });
    event.remove({ output: 'create:electron_tube' });
})