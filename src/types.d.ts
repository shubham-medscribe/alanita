declare global {
  interface Window {
    grecaptcha: any;
    gtag: (...args: any[]) => void;
  }

  var grecaptcha: any;
  var gtag: (...args: any[]) => void;
}

export {};
