function elemDrag (event ){
    console.log('мышь нажата')
    rect.style.position = 'absolute'
    moveAt(event.pageX. event.pageY)
    area.addEventListener('mousemove', elemMove)
    area.addEventListener('mouseup',elemDrop)
}

function elemDrop(event){
    console.log("Мышь отпущена")
    area.removeEventListener('mousemove', elemMove)
    area.removeEventListener('mouseup',elemDrop)
}

function elemMove(event){
    console.log(event, offsetX,event.offsetY)
    moveAt(event.pageX, event.pageY)
}

function startDrawing(event){
}

function draw(event){
    if(!isDrawing)return;
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.strokeStyle = document.getElementById('ColorPicker').value
    ctx.lineWidth = document.getElementById('lineWidth').value
    if(current_tool == 'brush'){
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctxmoveTo(startX. startY)
        ctxlineTo(x, y)
        ctx.stroke();
        startX = x;
        startY = y;
    }
}

function endDrawing(event){

}