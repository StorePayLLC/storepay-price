export function FileToBase64(file: File, callBack: (base64: string) => void) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => callBack(reader.result as string);
}
