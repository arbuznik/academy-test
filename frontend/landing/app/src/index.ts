// import express from 'express'
// import next    from 'next'
// import path    from 'path'
//
// const bootstrap = async () => {
//   const app = next({
//     dev: process.env.NODE_ENV !== 'production',
//     dir: process.env.NODE_ENV !== 'production' ? path.join(__dirname, '../ src') : __dirname,
//   })
//
//   const handle = app.getRequestHandler()
//
//   await app.prepare()
//
//   const server = express()
//
//   server.get('*', (req, res) => handle(req, res))
//
//   server.listen(7777)
// }
//
// bootstrap()

// it starts up as standalone anyway
export {}
