const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startDate, durationMinutes) {
    const dayStartArray = dayStart.split(":")
    const dayStartInSeconds = dayStartArray[0] * 60 * 60 + dayStartArray[1] * 60;

    const dayEndArray = dayEnd.split(":")
    const dayEndInSeconds = dayEndArray[0] * 60 * 60 + dayEndArray[1] * 60;

    const startDateArray = startDate.split(":")
    const startDateInSeconds = startDateArray[0] * 60 * 60 + startDateArray[1] * 60;

    const meetingInSeconds = startDateInSeconds + durationMinutes * 60;

    return startDateInSeconds >= dayStartInSeconds && meetingInSeconds <= dayEndInSeconds
}

module.exports = scheduleMeeting;
