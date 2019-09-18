export type Season = "Halloween" | "Christmas" | "NewYear";

type SeasonDuration = {
    from: { month: number, day: number },
    to: { month: number, day: number }
};

type SeasonDescription = {
    name: Season;
    duration: SeasonDuration;
};

function isInSeason(date: Date, season: SeasonDuration): boolean {
    let { from, to } = season;
    // Increment the month because the Date API numbers months starting
    // at zero, so January is month number zero. The first day of the
    // month is numbered as one, though.
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (from.month > to.month) {
        // The season spans New Year's Eve, which we need to take into account.
        if (month < from.month && month > to.month) {
            return false;
        }
    } else {
        if (month < from.month || month > to.month) {
            return false;
        }
    }

    if (month === from.month && day < from.day) {
        return false;
    } else if (month === to.month && day > to.day) {
        return false;
    } else {
        return true;
    }
}

function getCurrentSeasons(): Season[] {
    let seasons: SeasonDescription[] = [
        {
            name: "Halloween",
            duration: {
                from: { month: 10, day: 1 },
                to: { month: 10, day: 31 }
            }
        },
        {
            name: "Christmas",
            duration: {
                from: { month: 11, day: 14 },
                to: { month: 12, day: 25 }
            }
        },
        {
            name: "NewYear",
            duration: {
                from: { month: 12, day: 26 },
                to: { month: 1, day: 5 }
            }
        }
    ];
    let results: Season[] = [];
    let today = new Date();
    for (let { name, duration } of seasons) {
        if (isInSeason(today, duration)) {
            results.push(name);
        }
    }
    return results;
}

export const currentSeasons = getCurrentSeasons();
