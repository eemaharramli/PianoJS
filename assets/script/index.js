const keys = document.querySelectorAll('.key');
keys.forEach(key=>{
    key.addEventListener('click', playNote)
})

function playNote(e){
    const key = e.target;
    const note = document.getElementById(key.dataset.note)
    key.classList.add('active');
    note.currentTime = 0;
    note.play();
    console.log(this)
    note.addEventListener('ended', ()=>{
        key.classList.remove('active');
    })
}