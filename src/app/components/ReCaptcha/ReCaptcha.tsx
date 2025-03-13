import Script from "next/script";

const ReCaptcha = () => {
/*   useEffect(() => {
    const handleRecaptcha = () => {
      if (typeof window !== "undefined" && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute("'6Lfpv24qAAAAAGaZfp4A2eCddeHXbxM4CrXg ", { action: "homepage" }).then((token: string) => {
            console.log("reCAPTCHA token:", token);

            // Example: Send token to Google Analytics
            if (typeof window.gtag === "function") {
              window.gtag("event", "recaptcha_trigger", {
                event_category: "reCAPTCHA",
                event_action: "ccdatechangeform",
                event_label: "User Interaction",
              });
            }
          });
        });
      }
    };

    handleRecaptcha();
  }, []); */

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render='6Lfpv24qAAAAAGaZfp4A2eCddeHXbxM4CrXg `}
        strategy="afterInteractive"
        onLoad={() => console.log("reCAPTCHA script loaded")}
      />
    </>
  );
};

export default ReCaptcha;
