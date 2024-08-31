// script.js
function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
    // Redirect to a new page using the scanned URL
    window.location.href = decodedText;
}

function onScanFailure(error) {
    // This callback would be called when QR code scanning fails.
    console.warn(`QR error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,    // Sets the framerate to 10 frames per second
        qrbox: { width: 250, height: 250 },  // Sets the scanning box size
        aspectRatio: 1.0,  // Ensures the scan area is a square
        experimentalFeatures: {
            useBarCodeDetectorIfSupported: true  // Uses the barcode detector if available
        },
        rememberLastUsedCamera: true  // Remember the last used camera (front/back)
    },
    /* verbose= */ false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);
