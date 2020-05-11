namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(Duck, myTiles.tile0)
    tiles.placeOnRandomTile(Attacker, myTiles.tile0)
})
info.onLifeZero(function () {
    game.over(false)
})
let Attacker: Sprite = null
let Duck: Sprite = null
Duck = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
controller.player1.moveSprite(Duck)
info.setLife(3)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001060606060606060606060606060602050000000009000000000000000000070500090900090009090909090909000705000909000000090009000000090007050000090000090900090009090900070509090900090900000900000909000705000000000900000009090009000007050009090009000900000000090909070500000900000000000009000000000705090909090900090909090009090007050000000009000900000000000900070500090900090009000909000909000705000900000900090009000000000007050009000909000900090909090900070500000000000009000000000009000704080808080808080808080808080803`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . . . 2 
2 . 2 2 . 2 . 2 2 2 2 2 2 2 . 2 
2 . 2 2 . . . 2 . 2 . . . 2 . 2 
2 . . 2 . . 2 2 . 2 . 2 2 2 . 2 
2 2 2 2 . 2 2 . . 2 . . 2 2 . 2 
2 . . . . 2 . . . 2 2 . 2 . . 2 
2 . 2 2 . 2 . 2 . . . . 2 2 2 2 
2 . . 2 . . . . . . 2 . . . . 2 
2 2 2 2 2 2 . 2 2 2 2 . 2 2 . 2 
2 . . . . 2 . 2 . . . . . 2 . 2 
2 . 2 2 . 2 . 2 . 2 2 . 2 2 . 2 
2 . 2 . . 2 . 2 . 2 . . . . . 2 
2 . 2 . 2 2 . 2 . 2 2 2 2 2 . 2 
2 . . . . . . 2 . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.dungeon.stairEast,sprites.dungeon.stairSouth],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(Duck, myTiles.tile0)
Attacker = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 f e e e e . . . . 
. . . . . . . . . . . . . 2 2 2 f e e e e . . . 
. . . . . . . . . . . . . e e e e f f e e e . . 
. . . . . . . . d . . . e 2 2 2 2 e e f f f . . 
. . . . . . . . d d . . 2 e f f f f 2 2 2 e . . 
. . . . . . . . . d d c f f e e e f f f f f . . 
. . . . . . . . . . d d c e 4 4 f b e 4 4 e . . 
. . . . . . . . . . . d c e d d f 1 4 d 4 e e . 
. . . . . . . . . . . c c d e d d d 4 e e e . . 
. . . . . . . . . . . e d d 4 e 4 4 e e . . . . 
. . . . . . . . . . . . e e 4 4 2 2 2 2 . . . . 
. . . . . . . . . . . . . . 2 e 2 2 2 2 . . . . 
. . . . . . . . . . . . . . 5 5 4 4 4 4 . . . . 
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . . . . f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.player2.moveSprite(Attacker)
tiles.placeOnRandomTile(Attacker, myTiles.tile0)
scene.cameraFollowSprite(Attacker)
