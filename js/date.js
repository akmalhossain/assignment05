
function donationDateTime() {
    const donationTime = new Date();
    const day = donationTime.toLocaleString('en-US', { weekday: 'short', timeZone: 'Asia/Dhaka' });
    const month = donationTime.toLocaleString('en-US', { month: 'short', timeZone: 'Asia/Dhaka' });
    const date = donationTime.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Dhaka' });
    const year = donationTime.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Dhaka' });
    const time = donationTime.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Dhaka' });


    const gmtOffset = donationTime.toString().match(/GMT[+-]\d{4}/)[0];
    const bdZoneName = "(Bangladesh Standard Time)";
    

    const showDateTime = `${day} ${month} ${date} ${year} ${time} ${gmtOffset} ${bdZoneName}`;

    return showDateTime
}