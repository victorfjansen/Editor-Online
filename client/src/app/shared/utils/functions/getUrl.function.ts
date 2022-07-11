import { environment } from '../../variables'

export const getUrl = (path: string) => {
  return `${environment.baseUrl}/api/v1/${path}`
}
