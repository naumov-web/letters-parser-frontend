export const filterBase64 = (origin: string) => {
    return origin.split(';base64,')[1];
}