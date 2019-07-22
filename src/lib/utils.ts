export function getWikipediaMobileUrl(url: string) {
    return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia'): ''
}

export function yearCheck(year: string) {
    const currentYear = (new Date()).getFullYear();
    if (isNaN(+year)) {
        return String(currentYear);
    } else if (+year< 1950 || +year > currentYear) {
        console.warn(`Select years between 1950 and ${currentYear}`);
        return String(currentYear);
    }
    return year;
}

export function roundCheck(round: number) {
    if (round >= 100) {
        return 1;
    }
    return round;
}
 