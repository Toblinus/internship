export default class Grath {
    ctx = null;

    constructor(ctx) {
        if(!(ctx instanceof CanvasRenderingContext2D)){
            throw new Error();
        }
        ctx.fillStyle = 'black';
        ctx.lineWidth = 3;

        this.ctx = ctx;
    }

    get lineWidth() {
        return this.ctx.lineWidth;
    }

    line = (x1, y1, x2, y2, color = 'black') => {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    circle = (x, y, r, color = 'black') => {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    circleFill = (x, y, r, color = 'black') => {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}