// Dependency Inversion Principle

class Fetch {
  request(url) {
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    return 'data from local storage'
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request('vk.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet() {
    return this.localStorage.get()
  }

}

class DataBase {
  constructor(client) {
    this.client = client
  }

  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new DataBase(new LocalStorageClient())
console.log(db.getData('rand'))
