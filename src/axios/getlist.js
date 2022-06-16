import request from ".";

export function getTopList() {
    return request.get(
        "/toplist"
    )
}