const router = require('express').Router()
const bandRouter = require('./band')
const genreRouter = require('./genre')
const likedSongRouter = require('./likedSong')
const musicRouter = require('./music')
const playlistRouter = require('./playlist')
const playlistItemsRouter = require('./playlistItems')
const userRouter = require('./user')
const userLogRouter = require('./userLog')

router.use('/band', bandRouter)
router.use('/genre', genreRouter)
router.use('/likedsong', likedSongRouter)
router.use('/music', musicRouter)
router.use('/playlist', playlistRouter)
router.use('/playlistitems', playlistItemsRouter)
router.use('/user', userRouter)
router.use('/userlog', userLogRouter)

module.exports = router
