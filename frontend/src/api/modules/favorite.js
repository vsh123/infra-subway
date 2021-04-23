import ApiService from '@/api'

const BASE_URL = '/favorites'

const FavoriteService = {
  get() {
    return ApiService.get(`${BASE_URL}?page=1&size=10`)
  },
  create(newFavorite) {
    return ApiService.post(`${BASE_URL}`, newFavorite)
  },
  delete(favoriteId) {
    return ApiService.delete(`${BASE_URL}/${favoriteId}`)
  }
}

export default FavoriteService
