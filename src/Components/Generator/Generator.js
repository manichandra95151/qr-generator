import React, {  useState } from "react";
import QRCode from "qrcode";

export default function Generator() {
  const [text, setText] = useState("");
  const [qrCodeData, setQRCodeData] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); // State to hold the error message

  const generateQRCode = async () => {
    try {
      const dataURL = await QRCode.toDataURL(text);
      setQRCodeData(dataURL);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleSubmit = () => {
    if (!text) {
      setError("Please enter text or URL to generate a QR code.");
      return;
    }
    setError(""); // Clear the error if text is entered
    generateQRCode();
    setSubmitted(true);
  };

  const handleClear = () => {
    setText('');
    setQRCodeData('');
    setSubmitted(false);
    setError(""); // Clear the error message when clearing
  };

  return (
    <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#dbf2ff]">
            Generate Your QR Code
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your text or URL below to create a custom QR code
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <input
            type="text"
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter text or URL"
            value={text}
            onChange={(event) => setText(event.target.value.trim())}
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <div className="flex justify-center">
            {qrCodeData && (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src={qrCodeData} alt="qr-code" />
              </div>
            )}
          </div>
          <div>
            {submitted ?  (
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-[#2d8f87] text-sm font-medium rounded-md text-white hover:border-[#f1faff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleClear}
              >
                Clear
              </button>
            ) : (
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-[#2d8f87] text-sm font-medium rounded-md text-white hover:border-[#f1faff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
