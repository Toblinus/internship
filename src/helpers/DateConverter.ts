const SECONDS_IN_DAY = 24 * 3600;

/**
 * Is an abbreviation for dates
 */
export enum ShortDates {
    /**
     * Other date
     */
    Other,

    /**
     * Yesterday
     */
    Yesterday,

    /**
     * Today
     */
    Today,

    /**
     * Tomorrow
     */
    Tomorrow
}

export function seconds2ShortDate(seconds: number): ShortDates {
    if(seconds < -SECONDS_IN_DAY || seconds >= 2 * SECONDS_IN_DAY) {
        return ShortDates.Other;
    } else if(seconds >= -SECONDS_IN_DAY && seconds < 0) {
        return ShortDates.Yesterday;
    } else if(seconds < SECONDS_IN_DAY) {
        return ShortDates.Today;
    } else {
        return ShortDates.Tomorrow;
    }
}