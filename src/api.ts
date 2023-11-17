const API_URL = 'https://localhost:7214'

export async function login(login: string) {
  const response = await fetch(`${API_URL}/login?email=${encodeURIComponent(login)}&password=admin`)
  return await response.text()
}

export async function register(email: string, password: string, fullName: string) {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      fullName
    })
  })

  if (response.ok) {
    return
  } else {
    console.log('response', response)
  }
}

export async function post(title: string, body: string, authorId: string) {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      body,
      authorId
    })
  })

  if (response.ok) {
    return
  } else {
    console.log('response', response)
  }
}

export async function deletePost(id: string) {
  await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`)
  return await response.json()
}

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`)
  return await response.json()
}

export async function getFollowers(userId: string) {
  const response = await fetch(`${API_URL}/users/${userId}/followers`)
  return await response.json()
}

export async function getFollowing(userId: string) {
  const response = await fetch(`${API_URL}/users/${userId}/following`)
  return await response.json()
}
