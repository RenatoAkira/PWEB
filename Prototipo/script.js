
document.querySelectorAll('.Tarefa').forEach(card => {
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });
});


document.querySelectorAll('.Coluna').forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingCard = document.querySelector('.dragging');
        column.appendChild(draggingCard);
    });
});
