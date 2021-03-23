// type diffDateResultType = number;

export default class Task {
    /**
     * @param {string} title
     * @param {string} description
     * @param {Date} date Deadline for the task
     * @param {boolean} isChecked
     */
    constructor(
        private title: string,
        private description: string,
        private date: Date,
        private isChecked: boolean
    ){}
    
    /**
     * Swap task for this task
     * @param task The task for swap with this task
     */
    swap(task: Task): void {
        const { title, description, date, isChecked } = task;

        task.title = this.title;
        task.description = this.description;
        task.date = this.date;
        task.isChecked = this.isChecked;


        this.title = title;
        this.description = description;
        this.date = date;
        this.isChecked = isChecked;
    }

    /**
     * Get time left value in seconds
     */
    getTimeLeft(): number {
        const now = new Date();
        now.setHours(this.date.getHours());
        now.setMinutes(this.date.getMinutes());
        now.setSeconds(this.date.getSeconds());
        const timeLeft = this.date.getTime() - now.getTime();
        return Math.ceil((timeLeft) / 1000);
    }
}