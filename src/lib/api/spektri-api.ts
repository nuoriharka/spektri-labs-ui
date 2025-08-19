class SpektriAPI {
  private baseURL = process.env.NEXT_PUBLIC_API_URL || ''

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`)
    if (!response.ok) throw new Error(`API Error: ${response.status}`)
    return response.json()
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error(`API Error: ${response.status}`)
    return response.json()
  }

  streamRuns(runId: string) {
    return new EventSource(`${this.baseURL}/runs/${runId}/stream`)
  }
}

export const spektriAPI = new SpektriAPI()
