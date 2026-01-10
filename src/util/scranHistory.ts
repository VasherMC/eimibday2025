export type ScranHistory = Record<string, boolean[] | undefined>

export function getHistoryFromStorage() {
    const historyStr = localStorage.getItem("round-history")
    if (!historyStr) return {}
    return JSON.parse(historyStr) as ScranHistory
}