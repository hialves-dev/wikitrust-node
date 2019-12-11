export const createJsonStream = data => {
  let now = new Date().toDateString()
  return {
    title: data.title,
    content: data.content,
    keyWords: data.keyWords,
    refs: data.refs,
    createdAt: now,
    updatedAt: now
  }
}
