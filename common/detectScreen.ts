const ele = document.getElementById('body');

export const isSM = ele ? ele.offsetWidth >= 640 : window.screen.width >= 640;
export const isMD = ele ? ele.offsetWidth >= 768 : window.screen.width >= 768;
export const isLG = ele ? ele.offsetWidth >= 1024 : window.screen.width >= 1024;
export const isXL = ele ? ele.offsetWidth >= 1280 : window.screen.width >= 1280;
export const is2XL = ele ? ele.offsetWidth >= 1536 : window.screen.width >= 1536;