import('./draw.js').then((module) => {
    const canvas = document.getElementById('root_canvas');
    if (canvas.getContext) {
        module.draw({canvas})
    }
})



