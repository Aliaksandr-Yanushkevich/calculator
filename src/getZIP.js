async function getZIP() {
  try {
    const ipInfoToken = "5a82c3c01a87ab";
    const url = `https://ipinfo.io/json?token=${ipInfoToken}`;
    const response = await fetch(url);
    const data = await response.json();
    const zip = data.postal;
    return zip;
  } catch (error) {
    console.log(`Something went wrong: ${error.message}`);
  }
}

export default getZIP;
