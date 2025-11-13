function movement () {
    if (input.buttonIsPressed(Button.A)) {
        sprite.change(LedSpriteProperty.X, -1)
    }
    if (input.buttonIsPressed(Button.B)) {
        sprite.change(LedSpriteProperty.X, 1)
    }
}
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    movement()
})
basic.forever(function () {
	
})
