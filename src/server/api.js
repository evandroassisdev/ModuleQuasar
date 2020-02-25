const Host = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://localhost:5001/'
  } else {
    return 'https://localhost:5001/'
  }
}

export default { Host }
