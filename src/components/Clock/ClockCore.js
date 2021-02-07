import Grath from './Grath';

export default class ClockCore {
    grath = null;

    constructor(grath, bg = '#f9fba5') {
        if(!(grath instanceof Grath)) {
            throw new Error();
        }

        this.grath = grath;
        this.margin = 10;
        const canvas = grath.ctx.canvas;
        this.size = Math.min(canvas.width / 2, canvas.height / 2) - this.margin;
        this.bg = bg;
    }

    setArrows(arrows) {
        if(!Array.isArray(arrows)) {
            return;
        }
        
        this.arrows = arrows;
    }
    
    draw = () => {
        const grath = this.grath;
        const calcLen = l => (this.size - this.margin) / 100 * l;
        const toDeg = d => (d % 360) / 180 * Math.PI;
        const center = this.size + this.margin;
        
        grath.clear();
        grath.circleFill(center, center, this.size, this.bg);
        grath.circle(center, center, this.size);
        
        for(let i = 0; i < 12; ++i) {
            const a = i * 30;
            const pr = 20 + (i % 2) * (-5);
            const l = calcLen(pr);
            const deg = toDeg(a);
            const beginTickX = center + calcLen(100 - pr) * Math.sin(deg);
            const beginTickY = center - calcLen(100 - pr) * Math.cos(deg);
            grath.line( 
                beginTickX, 
                beginTickY, 
                beginTickX + l * Math.sin(deg),
                beginTickY - l * Math.cos(deg)
                )
            }
            
            this.arrows?.forEach(({ len, speed, value, color }) => {
                color = color || 'black';
                const l = calcLen(len);
                const t = 360 / speed;
                const deg = toDeg(t * value);
                grath.line( 
                    center, 
                    center, 
                    center + l * Math.sin(deg),
                    center - l * Math.cos(deg),
                    color
                    )
                })
                
                grath.circleFill(center, center, grath.lineWidth * 1.5);
            }
            
            start = (interval) => {
                this.draw();
                this.t = setInterval(this.draw, interval);
            }
            
            stop = () => {
        clearInterval(this.t);
    }
}