{
  {
    let mydate = new Date("08-09-2024 12:32:21 ");
    let today = Date.now();
    let diff = today - mydate;
    console.log(diff);

    let dateOptions = { year: "numeric", month: "long", day: "numeric" };
    let formatedDate = new Date().toLocaleString("en-IN", dateOptions, {
      timeZone: "asia/kolkata",
    });

    let timeOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    let formatedTime = new Date().toLocaleString("en-IN", timeOptions, {
      timeZone: "asia/kolkata",
    });

    console.log(formatedTime);
  }
}
