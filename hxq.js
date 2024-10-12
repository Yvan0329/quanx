let body = $response.body;

let jsonBody = JSON.parse(body);

let valueValues = jsonBody.qualities.map(quality => quality.value);

let maxValue = Math.max(...valueValues);

if (valueValues.length > 0) {
    jsonBody.quality = maxValue;

    let maxQuality = jsonBody.qualities.find(q => q.value === maxValue);
    jsonBody.qualityName = maxQuality ? maxQuality.name : "";
}

$done({ body: JSON.stringify(jsonBody) });
