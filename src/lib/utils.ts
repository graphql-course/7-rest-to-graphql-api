export function getWikipediaMobileUrl(url: string) {
    return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia'): ''
}

export function checkYear(year: string) {
    const currentYear = new Date().getFullYear();
    if (isNaN(+year) || +year < 1950 || +year > currentYear) {
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

export function paginationOptions(pageElements: number, page: number, items: number = 0, fromLast: boolean = false) {
    let offset = 0;
    if (items === 0) {
        offset = (page - 1) * pageElements;
    } else {
        offset = items - ( pageElements * page );
    }
    
    const limit = pageElements;
    return `limit=${ limit }&offset=${ offset }`;
}