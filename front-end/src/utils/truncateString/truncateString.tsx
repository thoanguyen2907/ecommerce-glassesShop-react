export const truncateString = (string: any , limit: any) => {
    if(string.length <= limit) {
      return string
    } 
    return string.slice(0, limit) + "..."
  }