const instituto = document.querySelectorAll('#instituto');

instituto.forEach(insti => {
    insti.addEventListener('click', () => {
        const dato= insti.querySelector('h3').textContent
        
        alert(dato)
    })
})
