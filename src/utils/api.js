export function getNews() {
    return fetch(`http://api.mediastack.com/v1/news?access_key=aef75383a04bed9d1aabd7df5e1d62ef&languages=ru`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => data)
}