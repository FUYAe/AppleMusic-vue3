import request from ".";

export function getSongUrl(id) {
    return request.get(
        `/song/url?id=${id}`
    )
}
export function getSongs() {
    return request.get(
        "/artist/top/song?id=6452"
    )
}