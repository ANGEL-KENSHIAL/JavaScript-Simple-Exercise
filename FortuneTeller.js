function tellFortune() {
  const numChildren = document.getElementById("numChildren").value;
  const partnerName = document.getElementById("partnerName").value;
  const location = document.getElementById("location").value;
  const jobTitle = document.getElementById("jobTitle").value;

  console.log(
    `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`,
  );
}
