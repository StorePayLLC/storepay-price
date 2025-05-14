export interface ImageCompressOptions {
  strict?: boolean;
  checkOrientation?: boolean;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  width?: number;
  height?: number;
  resize?: 'contain' | 'cover' | 'none';
  quality?: number;
  mimeType?: string;
  convertTypes?: string | string[];
  convertSize?: number;
  beforeDraw?(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
  drew?(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
}

export function imageCompress(image: File | Blob, options: ImageCompressOptions): Promise<File | Blob> {
  return import('compressorjs').then(
    ({ default: ImageCompressor }) =>
      new Promise(
        (resolve, reject) =>
          new ImageCompressor(image, {
            quality: options.quality || 0.6,
            maxWidth: options.maxWidth || 1500,
            convertSize: options.convertSize || 1024 * 1024,
            success: resolve,
            error: reject,
          }),
      ),
  );
}

export const getDataFromBlob = (myBlob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(myBlob);
  });
