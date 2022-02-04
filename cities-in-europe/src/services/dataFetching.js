export let url = 'http://localhost:9000/cities/'

export const createCity = (cityName, description, imageURL, category, likes) => {

    const city = {
        name:cityName,
        description,
        imageURL,
        category,
        likes: 0 
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(city)
    })
}

export const cityLike = (id, like) => {
    return fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
          },
       body: JSON.stringify({likes:like})
    })
}

