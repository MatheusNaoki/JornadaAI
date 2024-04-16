export default
{
    jump: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    crouch: new KeyboardEvent('keydown', { key: 'ArrowDown', keycode: 40}),
    dispatch(event) 
    {
        document.dispatchEvent(this[event]);
    }
}

